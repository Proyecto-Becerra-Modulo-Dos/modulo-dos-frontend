import { config } from "dotenv"
config()

const url = process.env.BACKEND_URL

export const principalAdminRH = (req, res) => {
    res.render("views.principal_admin_rh.ejs")
}