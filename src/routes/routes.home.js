import { Router } from "express";
import { login, ofertasTrabajo, vistaInicial } from "../controllers/home.controllers.js";

const rutaHome = Router();

rutaHome.get("/login", login)
rutaHome.get("/vistaInicial", vistaInicial)
rutaHome.get("/ofertasTrabajo", ofertasTrabajo)
export default rutaHome