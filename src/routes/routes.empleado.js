import { Router } from "express";
import { Documentos, formulario, incoporacion, opciones, pago, solicitarcambio } from "../controllers/empleado.controllers.js";

const rutaEmpleado = Router();

rutaEmpleado.get("/solicitar", solicitarcambio)
rutaEmpleado.get("/editar", formulario)
rutaEmpleado.get("/", opciones)
rutaEmpleado.get("/pago", pago)
rutaEmpleado.get("/incorporacion", incoporacion)
rutaEmpleado.get("/documentos", Documentos)

export default rutaEmpleado;