import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
//import estRoutes from "./routes/est.routes.js";
import matRoutes from "./routes/mat.routes.js";
import matUserRoutes from "./routes/matUser.routes.js";
import actividadRoutes from "./routes/actividad.routes.js";

import { FRONTEND_URL } from "./config.js";

const app = express();

app.use(
    cors({
      credentials: true,
      origin: FRONTEND_URL,
    })
);

app.use(cookieParser());
app.use(express.json());

app.get("/",(req,res)=>{
    res.json("BoostClass");
})
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/materias", matRoutes);
app.use("/api/matuser", matUserRoutes);
app.use("/api/actividades", actividadRoutes);

export default app;
