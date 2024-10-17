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


export const seleccionarPlan = (req, res) => {
    res.render("views.planes_admin_rh.ejs")
}

export const planCompesaciones = async(req, res) => {
    try {
        const recurso = url + `/compensaciones/`;
        const response = await fetch(recurso);
        const data = await response.json();
        res.render("views.plan_compensacion.ejs", {
            compensaciones: data.compensaciones
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

export const empleadoXCompensacion = async(req, res) => {
    const { id } = req.params

    try {
        const recurso = url + `/compensaciones/empleadosXcompensacion/${id}`;
        const response = await fetch(recurso);
        const data = await response.json();
        console.log("COMPENSACIONES: ",data.compensaciones);
        console.log("EMPLEADOS: ",data.empleados);
        res.render("views.empleado_compensacion.ejs", {
            empleados: data.empleados,
            compensaciones: data.compensaciones
        });
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

export const verNomina = async(req, res) => {
    try {
        const recurso = url + `/nomina/`;
        const response = await fetch(recurso);
        const data = await response.json();        
        res.render("views.nomina.ejs", {
            empleados: data.empleados,
            nominas: data.nominas,
            empleadosAprobada: data.empleadosAprobada,
            nominasAprobada: data.nominasAprobada,
            empleadosDesaprobada: data.empleadosDesaprobada,
            nominasDesaprobada: data.nominasDesaprobada
        });
    } catch (error) {
        res.status(500).send(error);
    }
}