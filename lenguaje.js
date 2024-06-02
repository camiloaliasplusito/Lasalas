document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('open');
        sidebar.classList.toggle('open');
        overlay.classList.toggle('show');
    });

    overlay.addEventListener('click', () => {
        menuIcon.classList.remove('open');
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
    });
});












document.addEventListener('DOMContentLoaded', () => {
    const toggleCheckbox = document.getElementById('toggleCheckbox');
    const body = document.body;
    const modeIcon = document.getElementById('modeIcon');

    toggleCheckbox.addEventListener('change', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            modeIcon.src = '/assets/moon.svg'; // Asegúrate de que la ruta sea correcta
            modeIcon.alt = 'Modo Oscuro';
        } else {
            modeIcon.src =  '/assets/sun.svg'; // Asegúrate de que la ruta sea correcta
            modeIcon.alt = 'Modo Claro';
        }
    });
});








function isDarkMode() {
    const backgroundColor = window.getComputedStyle(document.body).backgroundColor;
    const rgb = backgroundColor.match(/\d+/g);
    const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
    return brightness < 128;
}

function updateTextColor() {
    if (isDarkMode()) {
        document.getElementById('titulo').style.color = 'white';
    } else {
        document.getElementById('titulo').style.color = 'black';
    }
}

// Update text color on load
updateTextColor();

// Update text color on theme change
const observer = new MutationObserver(updateTextColor);
observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

// Example toggle function to switch between light and dark mode
document.body.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
