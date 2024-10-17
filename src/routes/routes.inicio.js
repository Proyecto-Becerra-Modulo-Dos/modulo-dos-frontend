import { Router } from "express";
import { login, ofertasTrabajo, vistaInicial } from "../controllers/inicio.controllers.js";

const rutaInicio = Router();

rutaInicio.get("/login", login)
rutaInicio.get("/", vistaInicial)
rutaInicio.get("/ofertasTrabajo", ofertasTrabajo)

export default rutaInicio