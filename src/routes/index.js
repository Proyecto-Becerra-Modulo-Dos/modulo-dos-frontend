import { Router } from "express";
import rutaHome from "./routes.home.js";
import rutaSupervisor from "./routes.supervisor.js";

const ruta = Router();

ruta.use("/", rutaHome);
ruta.use("/", rutaSupervisor)

export default ruta