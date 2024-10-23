// Función para obtener todas las ofertas de trabajo
async function fetchJobs() {
    try {
        const response = await fetch('/jobs');
        if (!response.ok) {
            throw new Error('Error al obtener las ofertas de trabajo');
        }
        const jobs = await response.json();
        displayJobs(jobs);
    } catch (error) {
        console.error(error);
        alert('No se pudieron cargar las ofertas de trabajo');
    }
}

// Función para mostrar las ofertas de trabajo en la página
function displayJobs(jobs) {
    const cardsContainer = document.querySelector('.cards');
    cardsContainer.innerHTML = ''; // Limpiar el contenedor antes de mostrar los nuevos trabajos

    jobs.forEach(job => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <img src="${job.imageUrl}" alt="${job.title}">
            <h2>${job.title}</h2>
            <p>${job.description}</p>
        `;
        
        cardsContainer.appendChild(card);
    });
}

// Función para agregar un evento de envío (opcional)
async function addJob(event) {
    event.preventDefault(); // Evitar que la página se recargue

    const title = document.querySelector('#job-title').value;
    const description = document.querySelector('#job-description').value;
    const imageUrl = document.querySelector('#job-image').value;

    const jobData = {
        title: title,
        description: description,
        imageUrl: imageUrl
    };

    try {
        const response = await fetch('/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jobData),
        });

        if (!response.ok) {
            throw new Error('Error al crear la oferta de trabajo');
        }

        const newJob = await response.json();
        displayJobs([newJob]); // Agregar solo la nueva oferta a la vista
    } catch (error) {
        console.error(error);
        alert('No se pudo agregar la oferta de trabajo');
    }
}

// Llamar a la función para obtener las ofertas al cargar la página
document.addEventListener('DOMContentLoaded', fetchJobs);

// Si deseas agregar un formulario para agregar trabajos, puedes hacer esto
// (Asegúrate de tener un formulario en tu HTML)
const jobForm = document.querySelector('#job-form');
if (jobForm) {
    jobForm.addEventListener('submit', addJob);
}
