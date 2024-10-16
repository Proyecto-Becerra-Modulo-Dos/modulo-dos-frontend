const input = document.querySelector("#url").value;
const url1 = localStorage.setItem("url", input);
const url = localStorage.getItem("url");

// Ocultar todos los contenedores y mostrar el correspondiente
function mostrarContenedor(id) {
  document.getElementById("solicitudes-container").classList.add("hidden");
  document.getElementById("aprobados-container").classList.add("hidden");
  document.getElementById("rechazados-container").classList.add("hidden");

  // Mostrar el contenedor específico
  // document.getElementById(id).classList.remove('hidden')
  document.getElementById(id).classList.remove("hidden");
}

// Event listener para "Solicitudes"
document
  .getElementById("solicitudes-btn")
  .addEventListener("click", function () {
    mostrarContenedor("solicitudes-container");
  });

// Event listener para "Aprobadas"
document.getElementById("aprobados-btn").addEventListener("click", function () {
  mostrarContenedor("aprobados-container");
});

// Event listener para "Rechazadas"
document
  .getElementById("rechazados-btn")
  .addEventListener("click", function () {
    mostrarContenedor("rechazados-container");
  });

// tabla
const urlApi = url + "/supervisor";

// Mostrar en proceso
fetch(urlApi + "/verHorasExtra")
  .then((res) => res.json())
  .then((data) => {
    if (data.error) {
      console.error("error al mostrar datos", data);
    } else {
      mostrar(data);
    }
  })
  .catch((error) => console.log(error));

const mostrar = (data) => {
  let body = "";

  for (let i = 0; i < data.length; i++) {
    body += `
            <tr>
              <td>${data[i].nombre}</td>
              <td>${data[i].apellido}</td>
              <td>${data[i].email}</td>
              <td>${data[i].descripcion}</td>
              <td>${data[i].rol}</td>
              <td>
                <button class="btn_aprobar" onclick = "aprobarHorasExtra(${data[i].idSoli});">Aprobar</button><br />
                <button class="btn_rechazar" onclick = "rechazarHorasExtra(${data[i].idSoli});">Rechazar</button>
              </td>
            </tr>
    `;
  }

  document.getElementById("dataSolicitud").innerHTML = body;
};

const aprobarApi = (ID) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: ID,
    }),
  };

  fetch(urlApi + "/aprobarHorasExtra", options)
    .then((res) => res.json())
    .then((data) => {
      if (data.error == false) {
        console.log(data);
        Swal.fire(data);
        window.location.href = "/hextra";
      }
    })
    .catch((err) => {
      console.log("Tenemos un problema", err);
    });
};

const aprobarHorasExtra = (id) => {
  Swal.fire({
    title: "¿Estas seguro que quieres aprobar estas horas Extra?",
    text: "¡No podrás revertir la accion!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, aprobar!",
    allowOutsideClick: false,
  }).then((result) => {
    if (result.isConfirmed) {
      aprobarApi(id);
      Swal.fire({
        title: "¡Aprobado!",
        text: "Las horas Extra han sido aprobadas.",
        icon: "success",
        allowOutsideClick: false,
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/hextra";
        }
      });
    }
  });
};

const rechazarApi = (ID) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: ID,
    }),
  };

  fetch(urlApi + "/rechazarHorasExtra", options)
    .then((res) => res.json())
    .then((data) => {
      if (data.error == false) {
        console.log(data);
        Swal.fire(data);
        window.location.href = "/hextra";
      }
    })
    .catch((err) => {
      console.log("Tenemos un problema", err);
    });
};

const rechazarHorasExtra = (id) => {
  Swal.fire({
    title: "¿Estas seguro que quieres rechazar estas horas Extra?",
    text: "¡No podrás revertir la accion!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, rechazar!",
    allowOutsideClick: false,
  }).then((result) => {
    if (result.isConfirmed) {
      rechazarApi(id);
      Swal.fire({
        title: "¡Rechazado!",
        text: "Las horas Extra han sido rechazadas.",
        icon: "success",
        allowOutsideClick: false,
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/hextra";
        }
      });
    }
  });
};

// Mostrar aprobados
fetch(urlApi + "/verHorasExtraAprobados")
  .then((res) => res.json())
  .then((data) => {
    if (data.error) {
      console.error("error al mostrar datos", data);
    } else {
      mostrarAprobados(data);
    }
  })
  .catch((error) => console.log(error));

const mostrarAprobados = (data) => {
  let body = "";

  for (let i = 0; i < data.length; i++) {
    body += `
            <tr>
              <td>${data[i].nombre}</td>
              <td>${data[i].apellido}</td>
              <td>${data[i].email}</td>
              <td>${data[i].descripcion}</td>
              <td>${data[i].rol}</td>
              <td>
                <button class="btn_aprobar">Aprobado</button>
              </td>
            </tr>
    `;
  }

  document.getElementById("dataAprobados").innerHTML = body;
};

// Mostrar rechazados
fetch(urlApi + "/verHorasExtraRechazados")
  .then((res) => res.json())
  .then((data) => {
    if (data.error) {
      console.error("error al mostrar datos", data);
    } else {
      mostrarRechazados(data);
    }
  })
  .catch((error) => console.log(error));

const mostrarRechazados = (data) => {
  let body = "";

  for (let i = 0; i < data.length; i++) {
    body += `
            <tr>
              <td>${data[i].nombre}</td>
              <td>${data[i].apellido}</td>
              <td>${data[i].email}</td>
              <td>${data[i].descripcion}</td>
              <td>${data[i].rol}</td>
              <td>
                <button class="btn_rechazar">Rechazado</button>
              </td>
            </tr>
    `;
  }

  document.getElementById("dataRechazados").innerHTML = body;
};
