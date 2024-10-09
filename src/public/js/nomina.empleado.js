const url = "http://localhost:3000"; //Está es la url que trae lo del backend
const endpoint = "/empleados/vernomina";
const recurso = url + endpoint;
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
  
        document.getElementById("periodoPago").innerText = data.empleados[0].fecha_pago;
        document.getElementById("comprobante").innerText = data.empleados[0].idNomina;


        document.getElementById("salario_neto").innerText = data.empleados[0].salario_neto;
        document.getElementById("bonificacion").innerText = data.empleados[0].bonificaciones;
    
  
      }
  
    })
    .catch((err) => console.log(err));