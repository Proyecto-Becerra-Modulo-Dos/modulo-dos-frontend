document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('crearEmpleado').addEventListener('submit', async (e) => {
        e.preventDefault();

        const identificacion = document.getElementById('identificacion').value;
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const usuario = document.getElementById('usuario').value;
        const celular = document.getElementById('celular').value;
        const direccion = document.getElementById('direccion').value;
        const email = document.getElementById('email').value;
        const contrasena = document.getElementById('contrasena').value;
        const rol = document.getElementById('rol').value;

        if (!identificacion || !nombre || !apellido || !usuario || !celular || !direccion || !email || !contrasena || !rol) {
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
            headers:{
                "content-Type": "application/json",
                // "x-access-token": token
            },
            body:JSON.stringify({
                identificacion: identificacion,
                nombre: nombre,
                apellido: apellido,
                usuario: usuario,
                celular: celular,
                direccion: direccion,
                email: email,
                contrasena: contrasena,
                rol: rol
            })
        }

        console.log("OPCIONES:",options);
        

        try {
            const response = await fetch('http://localhost:3000/empleados/crear', options);
            console.log(response);
            
            if (!response.ok) {
                const responseText = await response.text();
                throw new Error(`Error: ${response.status} ${response.statusText} - ${responseText}`);
            }

            const responseData = await response.json();
            console.log("Usuario registrado:", responseData);

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
                title: "<h5 style='color:white; font-family: 'Inter', sans-serif;'>" + 'Error al agregar la oferta' + "</h5>",
                showConfirmButton: true,
                customClass: {
                    popup: 'bg-alert',
                }
            });
        }
    });
});
