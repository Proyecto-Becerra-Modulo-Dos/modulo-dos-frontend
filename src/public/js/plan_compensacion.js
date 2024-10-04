document.addEventListener('DOMContentLoaded', async () => {

    // Ventana Emergente
    document.getElementById('openModalPlan').addEventListener('click', function () {
        document.getElementById('modalPlan').style.display = 'flex';
    });
    document.getElementById('closeModalPlan').addEventListener('click', function () {
        document.getElementById('modalPlan').style.display = 'none';
    });

    document.querySelectorAll('.btn-edit').forEach(button => {
        button.addEventListener('click', () => {
            document.getElementById('modalEdit').style.display = 'flex';
        });
    });
    document.getElementById('closeModalEdit').addEventListener('click', function () {
        document.getElementById('modalEdit').style.display = 'none';
    });

    // Crear Plan
    document.getElementById('crearPlan').addEventListener('submit', async (e) => {
        e.preventDefault();

        const bonificaciones = document.getElementById('bonificaciones').value;
        const salario = document.getElementById('salario').value;
        const incentivos = document.getElementById('incentivos').value;
        const tiempoLibre = document.getElementById('tiempoLibre').value;

        if (!bonificaciones || !salario || !incentivos || !tiempoLibre) {
            Swal.fire({
                icon: 'error',
                title: "<h5 style='color:white; font-family: 'Inter', sans-serif;'>" + 'Todos los campos son obligatorios' + "</h5>",
                showConfirmButton: true,
                customClass: {
                    popup: 'bg-alert',
                }
            });
            return;
        }

        // const token = sessionStorage.getItem("token");
        const options = {
            method: "POST",
            headers: {
                "content-Type": "application/json",
                // "x-access-token": token
            },
            body: JSON.stringify({
                salario: salario,
                bonificaciones: bonificaciones,
                incentivos: incentivos,
                tiempoLibre: tiempoLibre
            })
        }

        try {
            const response = await fetch('http://localhost:3000/compensaciones/crear', options);
            console.log(response);

            if (!response.ok) {
                const responseText = await response.text();
                throw new Error(`Error: ${response.status} ${response.statusText} - ${responseText}`);
            }

            Swal.fire({
                icon: 'success',
                title: "<h5 style='color:white; font-family: 'Inter', sans-serif;'>" + 'Plan creado exitosamente' + "</h5>",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'bg-alert',
                    content: 'text-alert'
                }
            });

            setTimeout(() => {
                window.location.href = `/admin/compensaciones`;
            }, 1500);

        } catch (error) {
            console.error('Error al agregar:', error);
            Swal.fire({
                icon: 'error',
                title: "<h5 style='color:white; font-family: 'Inter', sans-serif;'>" + 'Error al crear plan de compensación' + "</h5>",
                showConfirmButton: true,
                customClass: {
                    popup: 'bg-alert',
                }
            });
        }
    });

    //Editar PLan
    document.getElementById('editarPlan').addEventListener('submit', async (e) => {
        e.preventDefault();
        const url = `http://localhost:3000`
        const formData = {
            id: document.getElementById('edit-id').value,
            salario: document.getElementById('edit-salario').value,
            bonificacion: document.getElementById('edit-bonificaciones').value,
            incentivo: document.getElementById('edit-incentivos').value,
            fechaInicio: document.getElementById('edit-fechaInicio').value,
            fechaFin: document.getElementById('edit-fechaFin').value
        };

        try {
            // const token = sessionStorage.getItem("token");
            const response = await fetch(url + '/compensaciones/editar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // "x-access-token": token
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Plan editado exitosamente' + "</h5>",
                    showConfirmButton: false,
                    timer: 1500,
                    customClass: {
                        popup: 'bg-alert',
                        content: 'text-alert'
                    }
                });
                setTimeout(() => {
                    window.location.href = `/admin/compensaciones`;
                }, 1500);
            }
        } catch (error) {
            console.log(error);
            
            Swal.fire({
                icon: 'error',
                title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Error al editar el plan' + "</h5>",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'bg-alert',
                }
            });
        }
    });
});

// Eliminar Plan
async function eliminarCompensacion(id) {
    Swal.fire({
        title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + '¿Estás seguro de eliminarlo?' + "</h5>",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#318331",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar",
        cancelButtonText: "Cancelar",
        customClass: {
            popup: 'bg-alert',
            content: 'text-alert'
        }
    }).then(async (result) => {
        if (result.isConfirmed) {
            // const token = sessionStorage.getItem("token")
            const url = "http://localhost:3000";
            if (id) {
                const respuesta = await fetch(url + '/compensaciones/desactivar', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        // "x-access-token": token
                    },
                    body: JSON.stringify({ id: id })
                });

                if (respuesta.ok) {
                    Swal.fire({
                        icon: 'success',
                        title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Plan eliminado exitosamente' + "</h5>",
                        showConfirmButton: false,
                        timer: 1500,
                        customClass: {
                            popup: 'bg-alert',
                            content: 'text-alert'
                        }
                    });
                    setTimeout(() => {
                        window.location.reload();
                    }, 1500);
                }
            }
        }
    });
}

// Obtener Plan
async function editarCompensacion(id) {
    if (id) {
        const url = `http://localhost:3000`;
        try {
            const response = await fetch(url + `/compensaciones/obtener/${id}`);
            if (response.ok) {
                const data = await response.json();
                console.log("S: ",data.salario);
                console.log("B: ",data.bonificacion);
                console.log("I: ",data.incentivo);
                console.log("FF: ",data.fechaFin);
                console.log("FI: ",data.fechaInicio);
                document.getElementById('edit-salario').value = data.salario;
                document.getElementById('edit-bonificaciones').value = data.bonificacion;
                document.getElementById('edit-incentivos').value = data.incentivo;
                document.getElementById('edit-fechaInicio').value = data.fechaInicio;
                document.getElementById('edit-fechaFin').value = data.fechaFin;

                document.getElementById('edit-id').setAttribute('value', data.id);
                document.getElementById('edit-salario').setAttribute('placeholder', data.salario);
                document.getElementById('edit-bonificaciones').setAttribute('placeholder', data.bonificacion);
                document.getElementById('edit-incentivos').setAttribute('placeholder', data.incentivo);
                document.getElementById('edit-fechaInicio').setAttribute('placeholder', data.fechaInicio);
                document.getElementById('edit-fechaFin').setAttribute('placeholder', data.fechaFin);
            } else {
                console.error('Error fetching question data:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching question data:', error);
        }
    }
}