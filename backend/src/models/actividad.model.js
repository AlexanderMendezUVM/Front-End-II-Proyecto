import mongoose from "mongoose";

const actividadSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true
    },
    mensaje: {
        type: String,
    },
    objetivos: {
        type: String,
    },
    participantes: {
      type: Number,
      require: true
    },
    ponderacion: {
        type: Number,
        require: true
    },
    fecha: {
        type: String,
    },
    hora:{
        type: String,
    },
    idmatuser: {
      type: mongoose.Types.ObjectId,
      ref: "MatUser"
    },
    idmat: {
      type: mongoose.Types.ObjectId,
      ref: "Materias"
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default mongoose.model("Actividades", actividadSchema);