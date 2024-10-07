import { Router } from "express";
import { aplicarOfertas, formulario, login, ofertasTrabajo, vistaInicial } from "../controllers/home.controllers.js";

const rutaHome = Router();

rutaHome.get("/login", login)
rutaHome.get("/vistaInicial", vistaInicial)
rutaHome.get("/ofertasTrabajo", ofertasTrabajo)
rutaHome.get("/aplicarOfertas", aplicarOfertas)
rutaHome.get("/formulario", formulario)
export default rutaHome