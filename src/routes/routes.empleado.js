import { Router } from "express";
import { cargarDocumentos } from "../controllers/empleado.controllers.js";

const rutaEmpleado = Router();

rutaEmpleado.get("/cargar-doc", cargarDocumentos)

export default rutaEmpleado;