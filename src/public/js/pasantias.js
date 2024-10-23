document.addEventListener('DOMContentLoaded', () => {
    const createProgramBtn = document.getElementById('createProgramBtn');
    const createProgramModal = document.getElementById('createProgramModal');
    const cancelCreateBtn = document.getElementById('cancelCreateBtn');
    const confirmCreateBtn = document.getElementById('confirmCreateBtn');
    const programsContainer = document.getElementById('programs');
    const programNameInput = document.getElementById('programName');
    const programDescriptionInput = document.getElementById('programDescription');

    // Open the modal
    createProgramBtn.addEventListener('click', () => {
        createProgramModal.style.display = 'flex';
    });

    // Close the modal
    cancelCreateBtn.addEventListener('click', closeModal);

    // Close modal if clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === createProgramModal) {
            closeModal();
        }
    });

    // Handle form submission
    confirmCreateBtn.addEventListener('click', createProgram);

    function createProgram() {
        const name = programNameInput.value.trim();
        const description = programDescriptionInput.value.trim();

        if (name && description) {
            addProgram(name, description);
            closeModal();
            clearForm();
        } else {
            alert('Por favor, complete todos los campos.');
        }
    }

    function addProgram(name, description) {
        const programElement = document.createElement('div');
        programElement.className = 'program';
        programElement.innerHTML = `
            <h3>${escapeHTML(name)}</h3>
            <p>${escapeHTML(description)}</p>
            <button class="secondary edit-btn">Editar</button>
            <button class="danger delete-btn">Eliminar</button>
        `;

        // Add event listeners for edit and delete buttons
        const editBtn = programElement.querySelector('.edit-btn');
        const deleteBtn = programElement.querySelector('.delete-btn');

        editBtn.addEventListener('click', () => editProgram(programElement, name, description));
        deleteBtn.addEventListener('click', () => deleteProgram(programElement));

        programsContainer.appendChild(programElement);
    }

    function editProgram(programElement, name, description) {
        programNameInput.value = name;
        programDescriptionInput.value = description;
        createProgramModal.style.display = 'block';

        // Remove existing event listener and add a new one for editing
        confirmCreateBtn.removeEventListener('click', createProgram);
        confirmCreateBtn.addEventListener('click', () => updateProgram(programElement), { once: true });
    }

    function updateProgram(programElement) {
        const newName = programNameInput.value.trim();
        const newDescription = programDescriptionInput.value.trim();

        if (newName && newDescription) {
            programElement.querySelector('h3').textContent = newName;
            programElement.querySelector('p').textContent = newDescription;
            closeModal();
            clearForm();
        } else {
            alert('Por favor, complete todos los campos.');
        }
    }

    function deleteProgram(programElement) {
        if (confirm('¿Está seguro de que desea eliminar este programa?')) {
            programElement.remove();
        }
    }

    function closeModal() {
        createProgramModal.style.display = 'none';
        confirmCreateBtn.removeEventListener('click', updateProgram);
        confirmCreateBtn.addEventListener('click', createProgram);
    }

    function clearForm() {
        programNameInput.value = '';
        programDescriptionInput.value = '';
    }

    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag)
        );
    }
});