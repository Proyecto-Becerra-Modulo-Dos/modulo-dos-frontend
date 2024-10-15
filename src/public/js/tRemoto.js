const input = document.querySelector("#url").value;
const url1 = localStorage.setItem("url", input);
const url = localStorage.getItem("url");

// tabla
const urlApi = url + "/supervisor";

// Mostrar en proceso
fetch(urlApi + "/verTrabajoRemoto")
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
                <button class="btn_aprobar" onclick = "aprobarTrabajoRemoto(${data[i].idSoli});">Aprobar</button><br />
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

  fetch(urlApi + "/aprobarTrabajoRemoto", options)
    .then((res) => res.json())
    .then((data) => {
      if (data.error == false) {
        console.log(data);
        Swal.fire(data);
        window.location.href = "/tremoto";
      }
    })
    .catch((err) => {
      console.log("Tenemos un problema", err);
    });
};

const aprobarTrabajoRemoto = (id) => {
  Swal.fire({
    title: "¿Estas seguro que quieres aprobar este trabajo remoto?",
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
        text: "El trabajo remoto ha sido aprobado.",
        icon: "success",
        allowOutsideClick: false,
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/tremoto";
        }
      });
    }
  });
};
