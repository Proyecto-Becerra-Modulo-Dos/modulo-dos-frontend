import { config } from "dotenv"
config()

const url = process.env.BACKEND_URL

export const login = (req, res) => {
    res.render("views.login.ejs", {url: url})
}

export const principal = (req, res) => {
    res.render("views.principal.ejs")
}

export const solicitarcambio = (req, res) => {
    res.render("views.solicitarcambio.ejs")
}

export const formulario = (req, res) => {
    res.render("views.ventanaeditar.ejs")
}

export const incoporacion = (req, res) => {
    res.render("views.formulario.incorporacion.ejs")
}

export const Documentos = (req, res) => {
    res.render("views.documentos.ejs") 
}

export const error404 = (req, res) => {
    res.render("views.error404.ejs")
} 