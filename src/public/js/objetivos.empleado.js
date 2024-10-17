const url = "http://localhost:3000"; //Está es la url que trae lo del backend
const endpoint = "/empleados/verObjetivos";
const recurso = url + endpoint;
const idUser = 1;




// LISTAR
fetch(recurso)
    .then((res) => res.json())
    .then((data) => {
        if (data.error) {
            console.error("error al mostrar datos", data);
        } else {
            mostrar(data.message);
        }
    })
    .catch((err) => console.log(err));

const mostrar = (data) => {
    let body = "";

    for (let i = 0; i < data.length; i++) {
        body += `
    
            <tr>
                <td>${i + 1}</td>
                    <td>${data[i].objetivo}</td>
                    <td>
                        <div class="botones">
                        <div class="edit-btn" onclick="editarObjetivo(${data[i].idDesarrollo_Profesional})"></div>
                        <div class="delete-btn" onclick="eliminarObjetivo(${data[i].idDesarrollo_Profesional})"></div>
                    </div>
                    </td>
            </tr>                        
    `;
    }
    document.getElementById("data").innerHTML = body;
};

const recurso2 = url + "/empleados/crearObjetivo";

//CREAR OBJETIVO

const crearObjetivo = () => {
    // OBTENER DATOS
    const nuevoObjetivo = document.getElementById("nuevo_objetivo").value;
    const estado = "activo;"

    // Verificar que lo campos no esten vacios
    if (!nuevoObjetivo) {
        Swal.fire({
            icon: "warning",
            title: "Campos vacios!",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            objetivo: nuevoObjetivo,
            empleadoid: idUser,
            estado: estado

        })
    };
    fetch(recurso2, options)
        .then(res => res.json())
        .then(data => {
            if (data.error == false) {
                Swal.fire({
                    icon: "error",
                    title: "No se pudo crear el objetivo",
                    showConfirmButton: false,
                    timer: 1500
                });
                // Recargar la página o redirigir si todo es correcto
                setTimeout(() => {
                    window.location.href = "/objetivos";
                }, 1500);

            } else {
                Swal.fire({
                    icon: "success",
                    title: "Ha sido creado el objetivo",
                    showConfirmButton: false,
                    timer: 1500
                });

                // Recargar la página o redirigir si todo es correcto
                setTimeout(() => {
                    window.location.href = "/objetivos";
                }, 1500);
            }

        })
        .catch(err => {
            console.log("Tenemos un problema", err);
        });
}


// ELIMINAR OBJETIVO
const eliminarObjetivo = (id) => {
    const recursoEliminar = `${url}/empleados/eliminarObjetivo`;
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            idDesarrollo_Profesional: id,
        }),
    };

    Swal.fire({
        title: "¿Estás seguro?",
        text: "No podrás deshacer esta acción",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminarlo"
    }).then((result) => {
        if (result.isConfirmed) {

            fetch(recursoEliminar, options)
                .then(res => res.json())
                .then(data => {

                    if (data.error == false) {
                        Swal.fire(data)
                        window.location.href("/objetivo")

                    }
                    Swal.fire({
                        icon: "success",
                        title: "El objetivo fue eliminado correctamente",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    // Refrescar la tabla o recargar la página
                    setTimeout(() => {
                        window.location.href = "objetivos";
                    }, 1500);

                })
                .catch(err => {
                    console.log("Tenemos un problema", err);
                });
        }
    })
}

// FUNCIÓN EDITAR OBJETIVO (Solo como referencia, aún no implementada)
const editarObjetivo = (id) => {
    Swal.fire({
        title: "Modificar objetivo",
        input: "text",
        inputAttributes: {
            autocapitalize: "on"
        },
        showCancelButton: true,
        confirmButtonText: "Guardar",
        showLoaderOnConfirm: true,
        preConfirm: async (objetivo) => {
            try {
                const recursoEditar = `${url}/empleados/editarObjetivo`
                const options = {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        idDesarrollo_Profesional: id,
                        objetivo: objetivo
                    }),
                };


                const response = await fetch(recursoEditar, options);
                console.log(response);
                
                if (!response.ok) {
                    return Swal.showValidationMessage(`Su objetivo no pudo ser modificado correctamente
                ${JSON.stringify(await response.json())}
              `);
                }
                return response.json();
            } catch (error) {
                Swal.showValidationMessage(`
              Request failed: ${error}
            `);
            }
        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: "success",
                title: `El objetivo ha sido modificado correctamente`
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "objetivos"
                }
            });
        }

    });
};