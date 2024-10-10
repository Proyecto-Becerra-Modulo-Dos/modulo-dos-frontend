import { Router } from "express";
import { agregarOferta, crearEmpleadoAdminRH, empleadosAdminRH, gestionReclutamiento, principalAdminRH } from "../controllers/adminrh.controllers.js";

const rutaAdminRH = Router();

rutaAdminRH.get("/principal", principalAdminRH)
rutaAdminRH.get("/empleados", empleadosAdminRH)
rutaAdminRH.get("/crear-empleado", crearEmpleadoAdminRH)
rutaAdminRH.get("/reclutamiento", gestionReclutamiento)
rutaAdminRH.get("/oferta", agregarOferta)

export default rutaAdminRH