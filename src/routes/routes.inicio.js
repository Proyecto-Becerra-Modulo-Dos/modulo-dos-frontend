import { Router } from "express";
import { aplicarOfertas, formulario, login, ofertasTrabajo, solicitudEquipo, vistaInicial } from "../controllers/inicio.controllers.js";

const rutaInicio = Router();

rutaInicio.get("/login", login)
rutaInicio.get("/", vistaInicial)
rutaInicio.get("/ofertasTrabajo", ofertasTrabajo)
rutaInicio.get("/aplicarOfertas", aplicarOfertas)
rutaInicio.get("/formulario", formulario)
rutaInicio.get("/solicitudEquipo", solicitudEquipo)
export default rutaInicio