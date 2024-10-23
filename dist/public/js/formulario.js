// Función para cerrar el formulario
function closeForm() {
    const formContainer = document.querySelector('.form-container');
    if (formContainer) {
        formContainer.style.display = 'none'; // Ocultar el formulario
    }
}

// Función para manejar el envío del formulario
function handleSubmit(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Obtener valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;
    const title = document.getElementById('title').value;
    const country = document.getElementById('country').value;

    // Validar los campos (puedes agregar más validaciones si lo deseas)
    if (!name || !email || !title || !country) {
        alert("Por favor, completa todos los campos obligatorios.");
        return;
    }

    // Crear un objeto con los datos del formulario
    const formData = {
        name: name,
        email: email,
        company: company,
        title: title,
        country: country
    };

    console.log("Datos del formulario:", formData);
    alert("Formulario enviado exitosamente.");

    // Aquí puedes enviar los datos a un servidor usando fetch() si es necesario
    // fetch('URL_DEL_SERVIDOR', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(formData)
    // }).then(response => {
    //     if (response.ok) {
    //         alert('Formulario enviado con éxito');
    //     } else {
    //         alert('Error al enviar el formulario');
    //     }
    // }).catch(error => {
    //     console.error('Error:', error);
    // });
}

// Agregar event listeners al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.querySelector('.close-btn');
    const form = document.querySelector('form');

    if (closeButton) {
        closeButton.addEventListener('click', closeForm); // Cerrar el formulario
    }

    if (form) {
        form.addEventListener('submit', handleSubmit); // Manejar el envío del formulario
    }
});
