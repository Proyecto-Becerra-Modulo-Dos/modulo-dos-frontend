import { Router } from "express";
import { formulario, login, nomina, objetivos, principal, solicitarcambio } from "../controllers/home.controllers.js";

const rutaHome = Router();

<<<<<<< HEAD
<<<<<<< HEAD
rutaHome.get("/", login)
=======
<<<<<<< HEAD:dist/routes/routes.home.js
rutaHome.get("/", login)
=======
rutaHome.get("/login", login)
=======
rutaHome.get("/", login)
>>>>>>> 5cd28d8375d144b6bd70514d0f253b1c8977fd8f
rutaHome.get("/principal", principal)
rutaHome.get("/solicitar", solicitarcambio)
rutaHome.get("/editar", formulario)
rutaHome.get("/objetivos", objetivos)
rutaHome.get("/nomina", nomina)

<<<<<<< HEAD

>>>>>>> 1396406a46d41ff10dd1f0636086dd1e7d982980:src/routes/routes.home.js
>>>>>>> 927f1753241f01951b3daaffb9bf7b3916e0fe1c

=======
>>>>>>> 5cd28d8375d144b6bd70514d0f253b1c8977fd8f
export default rutaHome