import { Router } from "express";
import { auth } from "../middlewares/auth.middleware.js";
import { materia, agregarMateria, tablaMateria, eliminarMateria, editarMateria } from "../controllers/mat.controller.js";
const router = Router();

//router.get("/materias", auth, materia);
//router.post("/materias", auth, agregarMateria);

router.get("/", materia);
router.post("/", agregarMateria);
router.post("/llenar", tablaMateria);
router.delete("/:id", eliminarMateria);
router.patch("/:id", editarMateria);
export default router;