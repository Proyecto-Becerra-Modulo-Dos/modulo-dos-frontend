import { config } from "dotenv"
config()

const url = process.env.BACKEND_URL

export const principalAdminRH = (req, res) => {
    res.render("views.principal_admin_rh.ejs")
}

export const empleadosAdminRH = (req, res) => {
    res.render("views.empleados_admin_rh.ejs")
}

export const crearEmpleadoAdminRH = (req, res) => {
    res.render("views.crear_empleado.ejs")
}