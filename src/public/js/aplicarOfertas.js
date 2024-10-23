// Función para manejar la acción de aplicar a la oferta
function applyToJob() {
    // Aquí puedes implementar la lógica para aplicar a la oferta de trabajo
    // Por ejemplo, mostrar un formulario o enviar una solicitud al servidor
    alert("Has aplicado a la oferta de trabajo: Especialista en Gestión del Talento");

    // Opcionalmente, podrías redirigir a otra página o mostrar un formulario de aplicación
    // window.location.href = "pagina-de-confirmacion.html"; 
}

// Agregar un evento de clic al botón de aplicar
document.addEventListener('DOMContentLoaded', () => {
    const applyButton = document.querySelector('.apply-button a');
    
    if (applyButton) {
        applyButton.addEventListener('click', (event) => {
            event.preventDefault(); // Evitar que se recargue la página
            applyToJob(); // Llamar a la función para aplicar
        });
    }
});
