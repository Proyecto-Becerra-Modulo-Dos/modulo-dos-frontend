import { Router } from "express";
import rutaInicio from "./routes.inicio.js";
import rutaAdminRH from "./routes.adminrh.js";

const ruta = Router();

ruta.use("/", rutaInicio);
ruta.use("/admin", rutaAdminRH);

export default ruta