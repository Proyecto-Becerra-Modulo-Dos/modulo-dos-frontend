document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('crearEmpleado').addEventListener('submit', async (e) => {
        e.preventDefault();

        const tipoId = document.getElementById('tipoId').value;
        const identificacion = document.getElementById('identificacion').value;
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const salario = document.getElementById('salario').value;
        const contrasena = document.getElementById('contrasena').value;
        const rol = document.getElementById('rol').value;

        if (!tipoId || !identificacion || !nombre || !apellido || !email || !salario || !contrasena || !rol) {
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
                tipoId: tipoId,
                identificacion: identificacion,
                nombre: nombre,
                apellido: apellido,
                salario: salario,
                email: email,
                contrasena: contrasena,
                rol: rol
            })
        }

        try {
            const response = await fetch('http://localhost:3000/empleados/crear', options);
            console.log(response);

            if (!response.ok) {
                const responseText = await response.text();
                throw new Error(`Error: ${response.status} ${response.statusText} - ${responseText}`);
            }

            Swal.fire({
                icon: 'success',
                title: "<h5 style='color:white; font-family: 'Inter', sans-serif;'>" + 'Empleado agregado exitosamente' + "</h5>",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'bg-alert',
                    content: 'text-alert'
                }
            });

            setTimeout(() => {
                window.location.href = `/admin/empleados`;
            }, 1500);

        } catch (error) {
            console.error('Error al agregar empleado:', error);
            Swal.fire({
                icon: 'error',
                title: "<h5 style='color:white; font-family: 'Inter', sans-serif;'>" + 'Error al agregar el usuario' + "</h5>",
                showConfirmButton: true,
                customClass: {
                    popup: 'bg-alert',
                }
            });
        }
    });
});
