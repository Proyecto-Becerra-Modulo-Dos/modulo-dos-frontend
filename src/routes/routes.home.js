import { Router } from "express";
import { login } from "../controllers/home.controllers.js";

const rutaHome = Router();

rutaHome.get("/login", login)

export default rutaHome