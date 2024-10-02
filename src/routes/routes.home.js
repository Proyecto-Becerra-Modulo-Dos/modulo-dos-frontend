import { Router } from "express";
import { login, supervisorHome } from "../controllers/home.controllers.js";

const rutaHome = Router();

rutaHome.get("/login", login);
rutaHome.get("/supervisor", supervisorHome);

export default rutaHome;
