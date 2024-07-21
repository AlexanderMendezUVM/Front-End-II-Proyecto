import matUser from "../models/matUser.model.js";


export const materiaUser = async (req, res) => {
  const listamaterias = await matUser.find({ iduser: req.user.id }).populate('idmat');
  res.json(listamaterias);
};

export const agregarMatUser = async (req, res) => {
  try {
    const { iduser, idmat } = req.body;
    const newMatUser = new matUser({
      iduser,
      idmat
    });
    await newMatUser.save();
    res.json(newMatUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};