const form = document.getElementById('uploadForm');
const fileInput = document.getElementById('fileInput');
const message = document.getElementById('message');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file);

    const url = `http://localhost:3000/documentos/upload`
    try {
        const response = await fetch(url, {
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
