import { Router } from "express";
import { crearEmpleadoAdminRH, empleadosAdminRH, planCompesaciones, principalAdminRH } from "../controllers/adminrh.controllers.js";

const rutaAdminRH = Router();

rutaAdminRH.get("/principal", principalAdminRH)
rutaAdminRH.get("/empleados", empleadosAdminRH)
rutaAdminRH.get("/crear-empleado", crearEmpleadoAdminRH)
rutaAdminRH.get("/compensaciones", planCompesaciones)

export default rutaAdminRH