import { Router } from "express";
import rutaEmpleado from "./routes.empleado.js";

const ruta = Router();

ruta.use("/", rutaEmpleado);

export default ruta