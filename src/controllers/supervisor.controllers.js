export const desempeno = (req, res) => {
    res.render("views.desempeno.ejs");
};

export const hAprobadas = (req, res) => {
    res.render("views.horas_aprobadas.ejs");
};

export const hRechazadas = (req, res) => {
    res.render("views.horas_rechazadas.ejs");
};

export const hSolicitudes = (req, res) => {
    res.render("views.horas_solicitudes.ejs");
};

export const pAprobadas = (req, res) => {
    res.render("views.permisos_aprobadas.ejs");
};

export const pRechazados = (req, res) => {
    res.render("views.permisos_rechazados.ejs");
};

export const pSolicitudes = (req, res) => {
    res.render("views.permisos_solicitudes.ejs");
};

export const tRemoto = (req, res) => {
    res.render("views.trabajoRemoto.ejs");
};