import { Router } from "express";
import { crearEmpleadoAdminRH, 
    empleadosAdminRH, 
    empleadoXCompensacion, 
    planCompesaciones, 
    principalAdminRH, 
    seleccionarPlan, 
    verNomina,
    agregarOferta,
    estructuraOrganizacional, 
    gestionReclutamiento, 
    mostrarRecluta,  
    programarEntrevista,
    politicasRemoto
 } from "../controllers/adminrh.controllers.js"

 
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
rutaAdminRH.get("/politicas-trabajo-remoto", politicasRemoto)

export default rutaAdminRH