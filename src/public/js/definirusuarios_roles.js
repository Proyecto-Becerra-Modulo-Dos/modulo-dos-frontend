// Definir los usuarios con sus roles
const users = {
    trabajador: [
        { id: 1, name: "Trabajador 1" },
        { id: 2, name: "Trabajador 2" }
    ],
    pasante: [
        { id: 3, name: "Pasante 1" },
        { id: 4, name: "Pasante 2" }
    ],
    etc: [
        { id: 5, name: "Etc 1" },
        { id: 6, name: "Etc 2" }
    ]
};

// Obtener los selectores
const classificationSelect = document.getElementById('classificationSelect');
const workerSelect = document.getElementById('workerSelect');

// Función para poblar el selector de trabajadores
function populateWorkers(role) {
    // Limpiar opciones anteriores
    workerSelect.innerHTML = '<option value="" selected>Selecciona un trabajador</option>';

    // Si se selecciona un rol, agregar los trabajadores correspondientes
    if (role && users[role]) {
        users[role].forEach(worker => {
            const option = document.createElement('option');
            option.value = worker.id;
            option.textContent = worker.name;
            workerSelect.appendChild(option);
        });
    }
}

// Escuchar cambios en la clasificación de usuarios
classificationSelect.addEventListener('change', function () {
    const selectedRole = classificationSelect.value;
    populateWorkers(selectedRole);
});
