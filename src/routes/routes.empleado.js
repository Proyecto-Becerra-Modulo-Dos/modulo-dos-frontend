import { Router } from "express";
import { formulario, login, opciones, pago, principal, solicitarcambio, solicitarVacaciones } from "../controllers/empleado.controllers.js";

const rutaEmpleado = Router();

rutaEmpleado.get("/principal", principal)
rutaEmpleado.get("/solicitar", solicitarcambio)
rutaEmpleado.get("/editar", formulario)
rutaEmpleado.get("/opciones", opciones)
rutaEmpleado.get("/pago", pago)
rutaEmpleado.get("/SolicitarVacaciones", solicitarVacaciones)



export default rutaEmpleado