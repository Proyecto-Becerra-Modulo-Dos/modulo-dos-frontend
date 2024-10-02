import { Router } from "express";
import { formulario, login, nomina, objetivos, principal, solicitarcambio } from "../controllers/home.controllers.js";

const rutaHome = Router();

rutaHome.get("/login", login)
rutaHome.get("/principal", principal)
rutaHome.get("/solicitar", solicitarcambio)
rutaHome.get("/editar", formulario)
rutaHome.get("/objetivos", objetivos)
rutaHome.get("/nomina", nomina)



export default rutaHome