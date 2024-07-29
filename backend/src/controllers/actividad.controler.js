import Actividad from "../models/actividad.model.js";



export const actividadUser = async (req, res) => {
   const listaactividades = await Actividad.find({ idmatuser: req.params.id });
   res.json(listaactividades);
};

export const actividadUserEst = async (req, res) => {
  const listaactividadesest = await Actividad.find({ idmat: req.params.idmat });
  res.json(listaactividadesest);
};

export const buscarActividad = async (req, res) => {
  try {
    const actividad = await Actividad.findById(req.params.id);
    if (!actividad) return res.status(404).json({ message: "Actividad no Encontrada" });
    return res.json(actividad);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};



export const agregarActividad = async (req, res) => {
  try {
    const { titulo, mensaje, objetivos, participantes, ponderacion, fecha, hora, idmatuser, idmat} = req.body;
    const newActividad = new Actividad({
      titulo, mensaje, objetivos, participantes, ponderacion, fecha, hora, idmatuser, idmat
    });
    await newActividad.save();
    res.json(newActividad);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


export const eliminarActividad = async (req, res) => {
  try {
    const actividad = await Actividad.findByIdAndDelete(req.params.id);
    if (!actividad)
      return res.status(404).json({ message: "Actividad no Encontrada" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const editarActividad = async (req, res) => {
  try {
    const { titulo, mensaje, objetivos, participantes, ponderacion, fecha, hora } = req.body;
    const actividadEditada = await Actividad.findOneAndUpdate(
      { _id: req.params.id },
      { titulo, mensaje, objetivos, participantes, ponderacion, fecha, hora },
      { new: true }
    );
    return res.json(actividadEditada);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};