// Función para abrir la ventana modal
function abrirVentana(elemento) {
    var modal = document.getElementById("modal");
    var info = elemento.parentElement.getAttribute("data-info"); // Obtener información del cuadro
    document.getElementById("input-info").value = info; // Prellenar el input con la información actual
    modal.style.display = "block"; // Mostrar el modal
}

// Función para cerrar la ventana modal
function cerrarVentana() {
    var modal = document.getElementById("modal");
    modal.style.display = "none"; // Ocultar el modal
}

function guardarInfo() {
    var input = document.getElementById("input-info").value; // Obtener el valor del input
    cerrarVentana(); // Cerrar el modal después de guardar
}

const recurso = "http://localhost:3000/empleados/mostrarDatosPerfil";
const idUser = 6;

// Mostrar datos del usuario
const optionss = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: idUser,
    }),
  };
  fetch(recurso, optionss)
    .then((res) => res.json())
    .then((data) => {
        
      if (data.error) {
        console.error("error al mostrar datos", data);
      } else {
  
        document.getElementById("identificacion").innerText = data.message[0][0].identificacion;
        document.getElementById("nombre").innerText = data.message[0][0].nombre;
        document.getElementById("apellido").innerText = data.message[0][0].apellido;
        document.getElementById("numero_celular").innerText = data.message[0][0].telefono;
        document.getElementById("dirrecion").innerText = data.message[0][0].direccion;
        document.getElementById("correo").innerText = data.message[0][0].email;


      }
  
    })
    .catch((err) => console.log(err));
  