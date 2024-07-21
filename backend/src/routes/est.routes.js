import { Router } from "express";
import { auth } from "../middlewares/auth.middleware.js";
import { materia, agregarMateria } from "../controllers/est.controller.js";
const router = Router();

router.get("/materias", auth, materia);
router.post("/materias", auth, agregarMateria);
export default router;