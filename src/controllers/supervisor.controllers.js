import { config } from "dotenv";
config();

const url = process.env.BACKEND_URL;

export const Svista = (req, res) => {
  res.render("views.supervisor.ejs");
};
export const desempeno = (req, res) => {
  res.render("views.desempeno.ejs");
};

export const hSolicitudes = (req, res) => {
  res.render("views.horas_solicitudes.ejs");
};

export const pSolicitudes = (req, res) => {
  res.render("views.permisos_solicitudes.ejs", { url: url });
};

export const hTrabajadas = (req, res) => {
  res.render("views.horas_trabajadas.ejs");
};

export const tRemoto = (req, res) => {
  res.render("views.trabajoRemoto.ejs", { url: url });
};
