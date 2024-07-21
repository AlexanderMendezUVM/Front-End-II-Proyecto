import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
    try {
      const { cedula } = req.body;
      const user = await User.findOne({ cedula: cedula });
      if (!user) return res.status(404).json({ message: "Usuario no Encontrado" });
      return res.json(user);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

export const createUser = async (req, res) => {
  try {
    const { cedula, name, lastname, email, password ,rol} = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({
      cedula,
      name,
      lastname,
      email,
      password: passwordHash,
      rol
      //user: req.user.id,
    });
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
    try {
      const { name, lastname, email } = req.body;
      const UserUpdated = await User.findOneAndUpdate(
        { _id: req.params.id },
        { name, lastname, email },
        { new: true }
      );
      return res.json(userUpdated);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user)
      return res.status(404).json({ message: "User not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


