document.querySelector('.menu-icon').addEventListener('click', function() {
    var menu = document.querySelector('.menu-escondido');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}); 

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const menuEscondido = document.querySelector('.menu-escondido');

    menuIcon.addEventListener('click', () => {
        menuEscondido.classList.toggle('show');
    });
});