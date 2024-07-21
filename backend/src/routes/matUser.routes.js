import { Router } from "express";
import { agregarMatUser, materiaUser } from "../controllers/matUser.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
const router = Router();

router.get("/", auth, materiaUser);
router.post("/", auth, agregarMatUser);

export default router;