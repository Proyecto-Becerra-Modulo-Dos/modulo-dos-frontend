import { Router } from "express";
import { formulario, login, nomina, objetivos, principal, solicitarcambio } from "../controllers/home.controllers.js";

const rutaHome = Router();

<<<<<<< HEAD:dist/routes/routes.home.js
rutaHome.get("/", login)
=======
rutaHome.get("/login", login)
rutaHome.get("/principal", principal)
rutaHome.get("/solicitar", solicitarcambio)
rutaHome.get("/editar", formulario)
rutaHome.get("/objetivos", objetivos)
rutaHome.get("/nomina", nomina)


>>>>>>> 1396406a46d41ff10dd1f0636086dd1e7d982980:src/routes/routes.home.js

export default rutaHome