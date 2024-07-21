import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    cedula: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    rol: {
      type: String,
      enum : ["ADMINISTRADOR", "DOCENTE", "ESTUDIANTE"],
      default: 'ESTUDIANTE'
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default mongoose.model("Usuarios", userSchema);
