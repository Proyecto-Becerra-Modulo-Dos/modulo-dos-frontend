import { Router } from "express";
import {
  desempeno,
  hExtra,
  hTrabajadas,
  pSolicitudes,
  Svista,
  tRemoto,
} from "../controllers/supervisor.controllers.js";

const rutaSupervisor = Router();

rutaSupervisor.get("/desempeno", desempeno);
rutaSupervisor.get("/hextra", hExtra);
rutaSupervisor.get("/psolicitudes", pSolicitudes);
rutaSupervisor.get("/tremoto", tRemoto);
rutaSupervisor.get("/svista", Svista);
rutaSupervisor.get("/htrabajadas", hTrabajadas);

export default rutaSupervisor;
