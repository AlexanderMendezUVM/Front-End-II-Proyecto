import Materia from "../models/materia.model.js";

export const materia = async (req, res) => {
    const listamaterias = await Materia.find();
    res.json(listamaterias);
};

export const tablaMateria = async (req, res) => {
  try {
    await Materia.insertMany([
      {nombre: 'MATEMATICA 0', trimestre: 1},
      {nombre: 'COMUNICACION Y LENGUAJE', trimestre: 1},
      {nombre: 'LOGICA BASICA', trimestre: 1}, 
      {nombre: 'METODOLOGIA DEL APRENDIZAJE', trimestre: 1}, 
      {nombre: 'HUMANITAS I', trimestre: 1}, 
      {nombre: 'HUMANITAS II', trimestre: 2},   
      {nombre: 'GEOMETRIA ANALITICA', trimestre: 2}, 
      {nombre: 'MATEMATICA I', trimestre: 2},
      {nombre: 'ALGEBRA LINEAL', trimestre: 2}, 
      {nombre: 'ESTRUCTURA DE DATOS', trimestre: 2}, 
      {nombre: 'PRINCIPIOS DE ELECTRICIDAD', trimestre: 3}, 
      {nombre: 'MATEMATICA II', trimestre: 3}, 
      {nombre: 'BASE DE DATOS', trimestre: 3}, 
      {nombre: 'GEHISTORIA HUMANA', trimestre: 3},
      {nombre: 'ALGEBRA DE ESTRUCTURA', trimestre: 3}, 
      {nombre: 'FISICA', trimestre: 4}, 
      {nombre: 'DISEÑO LOGICO I', trimestre: 4}, 
      {nombre: 'MATEMATICA III', trimestre: 4}, 
      {nombre: 'ESTADISTICA DESCRIPTIVA', trimestre: 4},  
      {nombre: 'BACKEND', trimestre: 4}, 
      {nombre: 'DISEÑO LOGICO II', trimestre: 5}, 
      {nombre: 'MATEMATICA IV', trimestre: 5}, 
      {nombre: 'ESTADISTICA APLICADA', trimestre: 5}, 
      {nombre: 'FRONTEND I', trimestre: 5}, 
      {nombre: 'METODOLOGIA NUMERICA', trimestre: 6}, 
      {nombre: 'INGENIERIA ECONOMICA', trimestre: 6}, 
      {nombre: 'FRONTEND II', trimestre: 6}, 
      {nombre: 'ARQUITECTURA DEL COMPUTADOR', trimestre: 6}, 
      {nombre: 'COMPUTACION GRAFICA', trimestre: 6}, 
      {nombre: 'MICROPROCESADORES', trimestre: 7}, 
      {nombre: 'MATEMATICA COMBINATORIA', trimestre: 7}, 
      {nombre: 'SISTEMAS OPERATIVOS I', trimestre: 7},
      {nombre: 'COMUNICACION DE DATOS I', trimestre: 7}, 
      {nombre: 'INVESTIGACION DE OPERACIONES I', trimestre: 7}, 
      {nombre: 'INVESTIGACION DE OPERACIONES II', trimestre: 8}, 
      {nombre: 'LENGUAJE Y COMPILADORES', trimestre: 8}, 
      {nombre: 'PROYECTO DE SISTEMAS', trimestre: 8},
      {nombre: 'SEMINARIO DE COMPUTACION', trimestre: 8}, 
      {nombre: 'CONOCIMIENTO CIENTIFICO DEL MUNDO FISICO', trimestre: 8}, 
      {nombre: 'GESTION AMBIENTAL', trimestre: 8}, 
      {nombre: 'ELECTIVA I', trimestre: 9}, 
      {nombre: 'ELECTIVA II', trimestre: 9}, 
      {nombre: 'ELECTIVA III', trimestre: 9}, 
      {nombre: 'ELECTIVA IV', trimestre: 9}, 
      {nombre: 'MODULO DE INVESTIGACION', trimestre: 9},
      {nombre: 'PRACTICAS PROFESIONALES', trimestre: 10}, 
      {nombre: 'TRABAJO ESPECIAL DE GRADO', trimestre: 10},
    ]);
    res.send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

  
export const agregarMateria = async (req, res) => {
    try {
      const { nombre, trimestre } = req.body;
      const nuevaMateria = new Materia({
        nombre: nombre,
        trimestre: trimestre
      });
  
      const materiaAgregada = await nuevaMateria.save();
  
      res.json({
        id: materiaAgregada._id,
        nombre: materiaAgregada.nombre,
        trimestre: materiaAgregada.trimestre
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

export const eliminarMateria = async (req, res) => {
  try {
    const materia = await Materia.findByIdAndDelete(req.params.id);
    if (!materia)
      return res.status(404).json({ message: "Materia no Encontrada" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const editarMateria = async (req, res) => {
  try {
    const { trimestre, nombre } = req.body;
    console.log("T: ", trimestre);
    console.log("N: ", nombre);
    console.log("ID: ", req.params.id);
    const materiaEditada = await Materia.findOneAndUpdate(
      { _id: req.params.id },
      { trimestre, nombre },
      { new: true }
    );
    return res.json(materiaEditada);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};