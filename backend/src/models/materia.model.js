// import mongoose from "mongoose";

// const materiaSchema = new mongoose.Schema(
//   {
//     nombre: {
//       type: String,
//       required: true
//     },
//     user: {
//       type: mongoose.Types.ObjectId,
//       ref: "User"
//     }
//   },
//   {
//     timestamps: true,
//     versionKey: false
//   }
// );

//export default mongoose.model("Materia", materiaSchema);


import mongoose from "mongoose";

const materiaSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true
    },
    trimestre: {
      type: Number,
      require: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default mongoose.model("Materias", materiaSchema);