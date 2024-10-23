// Función para manejar el envío del formulario
function handleSubmit(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const rol = document.getElementById('rol').value;
    const equipo = document.getElementById('equipo').value;
    const direccion = document.getElementById('direccion').value;
    const justificacion = document.getElementById('justificacion').value;

    // Validar los campos (puedes agregar más validaciones si lo deseas)
    if (!nombre || !email || !rol || !equipo || !direccion || !justificacion) {
        alert("Por favor, complete todos los campos obligatorios.");
        return;
    }

    // Crear un objeto con los datos del formulario
    const solicitudData = {
        nombre: nombre,
        email: email,
        rol: rol,
        equipo: equipo,
        direccion: direccion,
        justificacion: justificacion
    };

    console.log("Datos de la solicitud:", solicitudData);
    alert("Solicitud enviada exitosamente.");

    // Aquí puedes enviar los datos a un servidor usando fetch() si es necesario
    // fetch('URL_DEL_SERVIDOR', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(solicitudData)
    // }).then(response => {
    //     if (response.ok) {
    //         alert('Solicitud enviada con éxito');
    //     } else {
    //         alert('Error al enviar la solicitud');
    //     }
    // }).catch(error => {
    //     console.error('Error:', error);
    // });
}

// Agregar event listener al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', handleSubmit); // Manejar el envío del formulario
    }
});
