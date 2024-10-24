import { Router } from "express";
import { editarPerfilEmpleado, formulario, opciones, pago, solicitarcambio } from "../controllers/empleado.controllers.js";

const rutaEmpleado = Router();

rutaEmpleado.get("/solicitar", solicitarcambio)
rutaEmpleado.get("/editar", formulario)
rutaEmpleado.get("/", opciones)
rutaEmpleado.get("/pago", pago)
rutaEmpleado.get("/editarPerfilEmpleado", editarPerfilEmpleado)



export default rutaEmpleado;