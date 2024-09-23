import { Router } from "express";
import rutaHome from "./routes.home.js";
import rutaAdminRH from "./routes.adminrh.js";

const ruta = Router();

ruta.use("/", rutaHome);
ruta.use("/admin", rutaAdminRH);

export default ruta