import { Router } from "express";
import { crearEmpleadoAdminRH, empleadosAdminRH, empleadoXCompensacion, planCompesaciones, principalAdminRH, seleccionarPlan, verNomina } from "../controllers/adminrh.controllers.js";
import { agregarOferta, estructuraOrganizacional, gestionReclutamiento, mostrarRecluta,  programarEntrevista } from "../controllers/adminrh.controllers.js";

const rutaAdminRH = Router();

rutaAdminRH.get("/principal", principalAdminRH)
rutaAdminRH.get("/empleados", empleadosAdminRH)
rutaAdminRH.get("/crear-empleado", crearEmpleadoAdminRH)
rutaAdminRH.get("/compensaciones", planCompesaciones)
rutaAdminRH.get("/planes", seleccionarPlan)
rutaAdminRH.get("/nomina", verNomina)
rutaAdminRH.get("/empleadoXcompensacion/:id",empleadoXCompensacion)
rutaAdminRH.get("/reclutamiento", gestionReclutamiento)
rutaAdminRH.get("/recluta", mostrarRecluta)
rutaAdminRH.get("/oferta", agregarOferta)
rutaAdminRH.get("/estructura", estructuraOrganizacional)
rutaAdminRH.get("/entrevista", programarEntrevista)


export default rutaAdminRH