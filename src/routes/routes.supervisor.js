import { Router } from "express";
import {
  desempeno,
  hSolicitudes,
  pSolicitudes,
  tRemoto,
} from "../controllers/supervisor.controllers.js";

const rutaSupervisor = Router();

rutaSupervisor.get("/desempeno", desempeno);
rutaSupervisor.get("/hsolicitudes", hSolicitudes);
rutaSupervisor.get("/psolicitudes", pSolicitudes);
rutaSupervisor.get("/tremoto", tRemoto);

export default rutaSupervisor;
