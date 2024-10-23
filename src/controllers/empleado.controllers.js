import { config } from "dotenv"
config()

const url = process.env.BACKEND_URL

export const login = (req, res) => {
    res.render("views.login.ejs", {url: url})
}


export const solicitarcambio = (req, res) => {
    fetch(url + "/empleados/solicitar")
        .then(res => res.json())
        .then(data => {
            const cuentasBancarias = data.cuenta;
            res.render("views.solicitarcambio.ejs", { cuentasBancarias });            
        })
        .catch(err => console.error(err));
}

export const formulario = (req, res) => {
    res.render("views.ventanaeditar.ejs")
}

export const error404 = (req, res) => {
    res.render("views.error404.ejs")
}

export const opciones = (req, res) => {
    res.render("views.opciones.ejs")
}

export const pago = (req, res) => {
    fetch(url + "/empleados/cuenta")
        .then(res => res.json())
        .then(data => {
            fetch(url + "/empleados/solicitudes")
                .then(res => res.json())
                .then(soliResponse => {
                    const soli = soliResponse.cuenta;
                    res.render("views.pago.ejs", { data, soli });
                    console.log(soli);
                })
                .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
}

export const incoporacion = (req, res) => {
    res.render("views.formulario.incorporacion.ejs")
}

export const Documentos = (req, res) => {
    res.render("views.documentos.ejs") 
}

export const cargarDocumentos = (req, res) => {
    res.render("views.cargar.documentos.ejs")
}