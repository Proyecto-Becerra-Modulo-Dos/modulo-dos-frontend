import { config } from "dotenv"
config()

const url = process.env.BACKEND_URL

export const login = (req, res) => {
    res.render("views.login.ejs", {url: url})
}

export const error404 = (req, res) => {
    res.render("views.error404.ejs")
}

export const vistaInicial = (req, res) => {
    res.render("views.vistaInicial.ejs", {url: url})
}

export const ofertasTrabajo = (req, res) => {
    res.render("views.ofertasTrabajo.ejs", {url: url})
}

export const aplicarOfertas = (req, res) => {
    res.render("views.aplicarOfertas.ejs", {url: url})
}
export const formulario = (req, res) => {
    res.render("views.formulario.ejs", {url: url})
}