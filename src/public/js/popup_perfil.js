const openButton = document.querySelector('.open-popup-button');
const closeButton = document.querySelector('.close-button');
const popup = document.querySelector('.popup');
const accountButton = document.querySelector('.account-button');

// Redirigir a empleado

accountButton.addEventListener('click', function() {
    window.open('http://localhost:3100/empleado');
});

// abrir la ventana emergente 
openButton.addEventListener('click', function() {
    popup.style.display = 'flex';
});

// cerrar la ventana emergente 
closeButton.addEventListener('click', function() {
    popup.style.display = 'none';
});

// cerrar la ventana si se hace clic fuera 
popup.addEventListener('click', function(e) {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});
