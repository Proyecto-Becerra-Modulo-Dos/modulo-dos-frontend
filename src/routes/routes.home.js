import { Router } from "express";
import { formulario, incoporacion, login, principal, solicitarcambio } from "../controllers/home.controllers.js";


const rutaHome = Router();

rutaHome.get("/login", login)
rutaHome.get("/principal", principal)
rutaHome.get("/solicitar", solicitarcambio)
rutaHome.get("/editar", formulario)
rutaHome.get("/incorporacion", incoporacion)




export default rutaHome