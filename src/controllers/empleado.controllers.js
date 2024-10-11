import { config } from "dotenv"
config()

const url = process.env.BACKEND_URL

export const cargarDocumentos = (req, res) => {
    res.render("views.cargar.documentos.ejs")
}