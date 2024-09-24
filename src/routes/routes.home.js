import { Router } from "express";
import { login, principal } from "../controllers/home.controllers.js";

const rutaHome = Router();

rutaHome.get("/login", login)
rutaHome.get("/principal", principal)


export default rutaHome