const botonEditar = document.querySelector('.admin_politicas_remoto_right_btn');
const botonAtras = document.querySelector('.back-icon');
const descripcionPolitica = document.querySelectorAll('.admin_politicas_remoto_cuadro_borde_black_text')
const cuadroBorderBlack = document.querySelectorAll('.admin_politicas_remoto_cuadro_borde_black')

botonEditar.addEventListener('click', () => {
    
    descripcionPolitica.forEach(element => {
        element.classList.toggle('cuadro-gris')
    })

    cuadroBorderBlack.forEach(element => {
        const botonEliminar = document.createElement('div');
        botonEliminar.className = 'circulo-rojo'

        const imgEliminar = document.createElement('img');
        imgEliminar.src = './img/Trash.png'
        imgEliminar.width = '40px'

        botonEliminar.appendChild(imgEliminar)
        cuadroBorderBlack.appendChild(botonEliminar)
    })

    botonAtras.classList.toggle('none');
    
});

botonAtras.addEventListener('click', () => {
    botonAtras.classList.toggle('none');
});