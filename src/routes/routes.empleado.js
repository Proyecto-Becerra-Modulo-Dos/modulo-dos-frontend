import { Router } from "express";
import { formulario, opciones, pago, solicitarcambio } from "../controllers/empleado.controllers.js";

const rutaEmpleado = Router();

rutaEmpleado.get("/solicitar", solicitarcambio)
rutaEmpleado.get("/editar", formulario)
rutaEmpleado.get("/", opciones)
rutaEmpleado.get("/pago", pago)



export default rutaEmpleado;