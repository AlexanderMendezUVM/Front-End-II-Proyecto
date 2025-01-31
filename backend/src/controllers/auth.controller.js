import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { TOKEN_SECRET } from "../config.js";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  try {
    const { name, lastname, email, password } = req.body;

    const userFound = await User.findOne({ email });

    if (userFound)
      return res.status(400).json({
        message: ["El email ya existe"],
      });

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      lastname,
      email,
      password: passwordHash,
    });

    const userSaved = await newUser.save();

    const token = await createAccessToken({
      id: userSaved._id,
    });

    res.cookie("token", token, {
      httpOnly: process.env.NODE_ENV !== "development",
      secure: true,
      sameSite: "none",
    });

    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const {email, password} = req.body;
    const userFound = await User.findOne({email});

    if (!userFound)
      return res.status(400).json({
        message: ["email no existe"],
      });

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch) {
      return res.status(400).json({
        message: ["password incorrecto"],
      });
    }

    const token = await createAccessToken({
      id: userFound._id
    });

    res.cookie('token', token);
    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const verifyToken = async (req, res) => {
  try {
    const { token } = req.cookies;
    if (!token) return res.send(false);
  
    jwt.verify(token, TOKEN_SECRET, async (error, user) => {
      if (error) return res.sendStatus(401);
  
      const userFound = await User.findById(user.id);
      if (!userFound) return res.sendStatus(401);
  
       return res.json({
         id: userFound._id,
         email: userFound.email,
         rol: userFound.rol,
         token:token
       });
    });
   
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const logout = async (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    secure: true,
    expires: new Date(0),
  });
  return res.sendStatus(200);
};
