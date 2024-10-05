import { Router } from "express";
import rutaInicio from "./routes.inicio.js";

const ruta = Router();

ruta.use("/", rutaInicio);

export default ruta