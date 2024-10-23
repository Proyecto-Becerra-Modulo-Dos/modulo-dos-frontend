const botonEditar = document.querySelector('.admin_politicas_remoto_right_btn');
const botonAtras = document.querySelector('.back-icon');
const descripcionPolitica = document.querySelectorAll('.admin_politicas_remoto_cuadro_borde_black_text')
const cuadroBorderBlack = document.querySelectorAll('.admin_politicas_remoto_cuadro_borde_black')

botonEditar.addEventListener('click', () => {
    
    descripcionPolitica.forEach(element => {
        element.classList.toggle('cuadro-gris')
    })

    cuadroBorderBlack.forEach(element => {

        let botonEliminar = document.createElement('div');
        botonEliminar.className = 'circulo-rojo'
        botonEliminar.id = 'btn-eliminar'

        let imgEliminar = document.createElement('img');
        imgEliminar.src = '../img/Trash.png'
        imgEliminar.width = 25

        botonEliminar.appendChild(imgEliminar)
        element.appendChild(botonEliminar)
    })

    botonAtras.classList.remove('none');
    botonEditar.classList.add('none');
    
});

botonAtras.addEventListener('click', () => {
    botonAtras.classList.add('none');

    let btn_eliminar = document.querySelectorAll('#btn-eliminar');

    btn_eliminar.classList.add('none');
    
    botonEditar.classList.remove('none');
});