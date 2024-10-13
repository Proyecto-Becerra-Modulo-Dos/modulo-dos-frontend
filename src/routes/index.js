import { Router } from "express";
import rutaInicio from "./routes.inicio.js";
import rutaAdminRH from "./routes.adminrh.js";
import rutaEmpleado from "./routes.empleado.js";

const ruta = Router();

ruta.use("/", rutaInicio);
ruta.use("/admin", rutaAdminRH);
ruta.use("/empleado", rutaEmpleado);

export default ruta