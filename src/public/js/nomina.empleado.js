const url = "http://localhost:3000"; //Está es la url que trae lo del backend
const endpoint = "/empleados/vernomina";
const recurso = url + endpoint;
const idUser = 1;



// Mostrar datos del usuario
const optionss = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    empleadoid: idUser,
  }),
};
fetch(recurso, optionss)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.empleados[0].estado);

    if (data.error) {
      console.error("error al mostrar datos", data);
    } else {

      document.getElementById("estado").innerText = data.empleados[0].estado;
      document.getElementById("fecha_pago").innerText = data.empleados[0].fecha_pago;
      document.getElementById("banco").innerText = data.empleados[0].banco;
      document.getElementById("numero_cuenta").innerText = data.empleados[0].numero_cuenta;
      document.getElementById("tipo_cuenta").innerText = data.empleados[0].tipo_cuenta;


      document.getElementById("salario_base").innerText = data.empleados[0].salario_base;
      document.getElementById("bonificacion").innerText = data.empleados[0].bonificaciones;

      document.getElementById("descuentos").innerText = data.empleados[0].descuentos;


    }

  })
  .catch((err) => console.log(err));


