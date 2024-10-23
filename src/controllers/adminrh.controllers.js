import { config } from "dotenv"
config()

const url = process.env.BACKEND_URL

export const principalAdminRH = (req, res) => {
    res.render("views.principal_admin_rh.ejs")
}

export const empleadosAdminRH = async(req, res) => {
    try {
        const recurso = url + `/empleados/`;
        const response = await fetch(recurso);
        const data = await response.json();
        res.render("views.empleados_admin_rh.ejs", {
            empleados: data.empleados
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

export const crearEmpleadoAdminRH = (req, res) => {
    res.render("views.crear_empleado.ejs")
}
export const gestionReclutamiento = (req, res) => {
    res.render("views.gestion.reclutamiento.ejs")
}
export const mostrarRecluta = (req, res) => {
    res.render("view.recluta.ejs")
}
export const agregarOferta = (req, res) => {

    res.render("views.oferta.ejs")
}
export const estructuraOrganizacional = (req, res) => {
    res.render("view.estructura.organizacional.ejs")
}
export const programarEntrevista = (req, res) => {
    res.render("views.entrevista.ejs")
}
export const responsabilidad = (req, res) => {
    res.render("view.responsabilidad.ejs")
}
