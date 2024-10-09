import { Router } from "express";
import { aplicarOfertas, formulario, login, ofertasTrabajo, solicitudEquipo, vistaInicial } from "../controllers/home.controllers.js";

const rutaHome = Router();

rutaHome.get("/login", login)
rutaHome.get("/vistaInicial", vistaInicial)
rutaHome.get("/ofertasTrabajo", ofertasTrabajo)
rutaHome.get("/aplicarOfertas", aplicarOfertas)
rutaHome.get("/formulario", formulario)
rutaHome.get("/solicitudEquipo", solicitudEquipo)
export default rutaHome