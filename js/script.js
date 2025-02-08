// Selecciona todas las cards
const cards = document.querySelectorAll('.card6');

// Añade un event listener a cada card
cards.forEach(card => {
    card.addEventListener('click', () => {
        // Obtén el valor de data-target
        const targetId = card.getAttribute('data-target');
        // Encuentra la sección correspondiente usando el ID
        const targetSection = document.getElementById(targetId);
        // Desplázate a la sección con un efecto suave
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// USO DE SCROLLREVEAL
ScrollReveal().reveal('.headline');