import { Router } from "express";
import { crearEmpleadoAdminRH, empleadosAdminRH, empleadoXCompensacion, planCompesaciones, principalAdminRH, seleccionarPlan } from "../controllers/adminrh.controllers.js";

const rutaAdminRH = Router();

rutaAdminRH.get("/principal", principalAdminRH)
rutaAdminRH.get("/empleados", empleadosAdminRH)
rutaAdminRH.get("/crear-empleado", crearEmpleadoAdminRH)
rutaAdminRH.get("/compensaciones", planCompesaciones)
rutaAdminRH.get("/planes", seleccionarPlan)
rutaAdminRH.get("/empleadoXcompensacion/:id",empleadoXCompensacion)

export default rutaAdminRH