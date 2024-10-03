document.addEventListener('DOMContentLoaded', async () => {

    function seleccionarCompensacion(id) {
        localStorage.setItem('empleadoSeleccionado', id);
    }

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

    // Editar Plan
    const id = localStorage.getItem('empleadoSeleccionado');

    if (id) {
        const url = `http://localhost:3000`;

        try {
            const response = await fetch(url + `/compensaciones/obtener/${id}`);
            if (response.ok) {
                const data = await response.json();
                document.getElementById('id').value = id;
                document.getElementById('salario').value = data.salario;
                document.getElementById('bonificaciones').value = data.bonificaciones;
                document.getElementById('incentivos').value = data.incentivos;
                document.getElementById('tiempoLibre').value = data.tiempoLibre;

                document.getElementById('salario').setAttribute('placeholder', data.salario);
                document.getElementById('bonificaciones').setAttribute('placeholder', data.bonificaciones);
                document.getElementById('incentivos').setAttribute('placeholder', data.incentivos);
                document.getElementById('tiempoLibre').setAttribute('placeholder', data.tiempoLibre);
            } else {
                console.error('Error fetching question data:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching question data:', error);
        }
    }

    document.getElementById('editarPlan').addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = {
            id: document.getElementById('id').value,
            salario: document.getElementById('salario').value,
            bonificaciones: document.getElementById('bonificaciones').value,
            incentivos: document.getElementById('incentivos').value,
            tiempoLibre: document.getElementById('tiempoLibre').value
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

    // Eliminar Plan
    async function eliminarCompensacion() {
        const id = localStorage.getItem('empleadoSeleccionado');
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
                // const url = sessionStorage.getItem("url") + "/compensaciones/desactivar";
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
});