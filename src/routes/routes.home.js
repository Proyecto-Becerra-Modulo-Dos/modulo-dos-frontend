import { Router } from "express";
import { cargarDocumentos, Documentos, formulario, incoporacion, login, principal, solicitarcambio } from "../controllers/home.controllers.js";

const rutaHome = Router();

rutaHome.get("/login", login)
rutaHome.get("/principal", principal)
rutaHome.get("/solicitar", solicitarcambio)
rutaHome.get("/editar", formulario)
rutaHome.get("/incorporacion", incoporacion)
rutaHome.get("/CargarDocumentos", cargarDocumentos)
rutaHome.get("/documentos", Documentos)



export default rutaHome