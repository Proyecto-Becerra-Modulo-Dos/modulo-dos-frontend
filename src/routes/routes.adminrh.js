import { Router } from "express";
import { principalAdminRH } from "../controllers/adminrh.controllers.js";

const rutaAdminRH = Router();

rutaAdminRH.get("/principal", principalAdminRH)

export default rutaAdminRH