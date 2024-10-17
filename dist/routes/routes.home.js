import { Router } from "express";
import { formulario, login, nomina, objetivos, principal, solicitarcambio } from "../controllers/home.controllers.js";

const rutaHome = Router();

rutaHome.get("/", login)

export default rutaHome