const modal = document.querySelector('.modal');
const btnModal = document.querySelector('.btn_menu');
const closeModal = document.querySelector('.btn_menu_close');

// Abre el modal
btnModal.addEventListener('click', () => {
    modal.classList.toggle('active');
});

// Cierra el modal al presionar el botón "cerrar"
closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Detecta cuando cambia el tamaño de la ventana
const mediaQuery = window.matchMedia('(min-width: 1024px)');

function checkResolution(e) {
    if (e.matches) {
        // Si la pantalla es mayor o igual a 768px, cierra el modal
        modal.classList.remove('active');
    }
}

// Llamar al cargar y al cambiar
mediaQuery.addEventListener('change', checkResolution);
checkResolution(mediaQuery);