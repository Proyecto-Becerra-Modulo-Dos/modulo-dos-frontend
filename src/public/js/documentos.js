const form = document.getElementById('uploadForm');
const fileInput = document.getElementById('fileInput');
const message = document.getElementById('message');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('http://localhost:6000/upload', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();
        message.innerText = result.message;
    } catch (error) {
        message.innerText = 'Error al subir el archivo';
        console.error('Error:', error);
    }
});
