import { config } from "dotenv"
config()

const url = process.env.BACKEND_URL

export const login = (req, res) => {
    res.render("views.login.ejs", {url: url})
<<<<<<< HEAD
=======
<<<<<<< HEAD:dist/controllers/home.controllers.js
=======
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

export const error404 = (req, res) => {
    res.render("views.error404.ejs")
}

export const objetivos = (req, res) => {
    res.render("views.objetivos.ejs")
}

export const nomina = (req, res) => {
    res.render("views.nomina.empleado.ejs")
>>>>>>> 1396406a46d41ff10dd1f0636086dd1e7d982980:src/controllers/home.controllers.js
>>>>>>> 927f1753241f01951b3daaffb9bf7b3916e0fe1c
}