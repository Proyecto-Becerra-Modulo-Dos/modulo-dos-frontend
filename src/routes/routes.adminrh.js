import { Router } from "express";
import { agregarOferta, crearEmpleadoAdminRH, empleadosAdminRH, estructuraOrganizacional, gestionReclutamiento, mostrarRecluta, principalAdminRH, programarEntrevista } from "../controllers/adminrh.controllers.js";

const rutaAdminRH = Router();

rutaAdminRH.get("/principal", principalAdminRH)
rutaAdminRH.get("/empleados", empleadosAdminRH)
rutaAdminRH.get("/crear-empleado", crearEmpleadoAdminRH)
rutaAdminRH.get("/reclutamiento", gestionReclutamiento)
rutaAdminRH.get("/recluta", mostrarRecluta)
rutaAdminRH.get("/oferta", agregarOferta)
rutaAdminRH.get("/estructura", estructuraOrganizacional)
rutaAdminRH.get("/entrevista", programarEntrevista)


export default rutaAdminRH