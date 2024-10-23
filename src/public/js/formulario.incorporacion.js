async function enviarFormulario() {
    const identificacion = document.getElementById('telefono').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;
    const fecha_nacimiento = document.getElementById('fecha').value;

    const datosFormulario = {
        identificacion: identificacion,
        telefono: telefono,
        direccion: direccion,
        fecha_nacimiento: fecha_nacimiento
    };

    try {
        const respuesta = await fetch('http://localhost:3000/empleados/inscripcion', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datosFormulario),
        });

        if (respuesta.ok) {
            const data = await respuesta.json();
            console.log('Respuesta del servidor:', data);
            alert('Formulario actualizado con éxito.');

            document.getElementById('formularioIncorporacion').style.display = 'none';

        } else {
            console.error('Error al enviar el formulario:', respuesta.status);
            alert('Error al actualizar el formulario.');
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
}

document.querySelector('.guardar-btn').addEventListener('click', enviarFormulario);