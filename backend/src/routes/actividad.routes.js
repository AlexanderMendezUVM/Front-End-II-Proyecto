import { Router } from "express";
//import { auth } from "../middlewares/auth.middleware.js";
import { actividadUser, actividadUserEst, buscarActividad, agregarActividad, editarActividad, eliminarActividad } from "../controllers/actividad.controler.js";
const router = Router();


router.get("/:id?",actividadUser);
router.get("/est/:idmat?",actividadUserEst);
router.post("/", agregarActividad);
router.get("/buscar/:id", buscarActividad);
router.delete("/:id", eliminarActividad);
router.patch("/:id", editarActividad);
export default router;