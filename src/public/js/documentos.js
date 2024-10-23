// Almacenar los archivos seleccionados
let selectedFiles = [];

document.getElementById('fileInput').addEventListener('change', function () {
    const fileList = document.getElementById('fileList');
    
    // Agregar los nuevos archivos seleccionados al array
    for (const file of this.files) {
        selectedFiles.push(file); // Añadir cada archivo al array
    }

    // Limpiar la lista de archivos en el DOM para regenerarla
    fileList.innerHTML = '';

    // Mostrar todos los archivos seleccionados en la lista
    selectedFiles.forEach((file, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${file.name}`;
        fileList.appendChild(li);
    });
});

async function uploadDocument() {
    const tipoDocumento = document.getElementById('tipoDocumento').value;

    if (!selectedFiles.length || !tipoDocumento) {
        alert('Por favor, seleccione archivos y especifique el tipo de documento');
        return;
    }

    const formData = new FormData();
    formData.append('tipoDocumento', tipoDocumento);


    // Adjuntar todos los archivos seleccionados
    for (const file of selectedFiles) {
        formData.append('documento[]', file); // 'documentos[]' es un array de archivos
    }
    
    try {
        const response = await fetch('http://localhost:3000/documentos/uploads', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const result = await response.json();
            console.log("Ya funciona el json");
            alert(result.message);

            // Limpiar la lista de archivos y el input al guardar exitosamente
            document.getElementById('fileList').innerHTML = ''; // Vaciar la lista de archivos
            document.getElementById('fileInput').value = ''; // Resetear el input de archivo
            document.getElementById('tipoDocumento').value = ''; // Limpiar el campo de tipo de documento
            selectedFiles = []; // Limpiar la lista de archivos seleccionados
        } else {
            const error = await response.json();
            console.error('Error al guardar:', error);
            alert('Error al guardar los documentos');
        }
    } catch (error) {
        console.error('Error de red:', error);
        alert('Error de red al intentar guardar los documentos');
    }
}
