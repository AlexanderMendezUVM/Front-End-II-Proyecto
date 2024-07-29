import { Router } from "express";
import {getUsers,getUser,deleteUser,updateUser, createUser, getUserId} from "../controllers/user.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUserId);
router.post("/buscar", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;