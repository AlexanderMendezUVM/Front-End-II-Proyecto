import mongoose from "mongoose";

const matUserSchema = new mongoose.Schema(
  {
    iduser: {
      type: mongoose.Types.ObjectId,
      ref: "Usuarios"
    },
    idmat: {
      type: mongoose.Types.ObjectId,
      ref: "Materias"
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default mongoose.model("MatUser", matUserSchema);
