// Desaprobar Nómina
async function desaprobarNomina(id) {
    Swal.fire({
        title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + '¿Estás seguro de desaprobarlo?' + "</h5>",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#318331",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, desaprobar",
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
                const respuesta = await fetch(url + '/nomina/desaprobar', {
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
                        title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Nómina desaprobada exitosamente' + "</h5>",
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

// Aprobar Nómina
async function aprobarNomina(id) {
    Swal.fire({
        title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + '¿Estás seguro de aprobarlo?' + "</h5>",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#318331",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, aprobar",
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
                const respuesta = await fetch(url + '/nomina/aprobar', {
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
                        title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Nómina aprobada exitosamente' + "</h5>",
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