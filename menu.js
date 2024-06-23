const iconoMenu = document.getElementById('icono-menu');
const enlaces = document.querySelector('.enlaces ');

//<i class="fa-solid fa-xmark"></i>
iconoMenu.addEventListener('click', (e) => {
    enlaces.classList.toggle('desplegado');
    if (enlaces.classList.contains('desplegado')) {
        iconoMenu.attributes[0].value = 'fa-solid fa-xmark';

    } else {
        iconoMenu.attributes[0].value = 'fa-solid fa-bars';
    }

})