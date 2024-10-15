// Ocultar todos los contenedores y mostrar el correspondiente
function mostrarContenedor(id) {
    document.getElementById('solicitudes-container').classList.add('hidden');
    document.getElementById('aprobados-container').classList.add('hidden');
    document.getElementById('rechazados-container').classList.add('hidden');

    // Mostrar el contenedor específico
    // document.getElementById(id).classList.remove('hidden')
    document.getElementById(id).classList.remove('hidden');
}

// Event listener para "Solicitudes"
document.getElementById('solicitudes-btn').addEventListener('click', function () {
    mostrarContenedor('solicitudes-container');
});


// Event listener para "Aprobadas"
document.getElementById('aprobados-btn').addEventListener('click', function () {
    mostrarContenedor('aprobados-container');
});

// Event listener para "Rechazadas"
document.getElementById('rechazados-btn').addEventListener('click', function () {
    mostrarContenedor('rechazados-container');
});