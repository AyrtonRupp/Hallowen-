// Array de imágenes para el carrusel
const images = [
    'carousel-images/calabazas.jpg',
    'carousel-images/dog.jpg',
    'carousel-images/hallowen.jpg'
];

let currentIndex = 0;
const carouselImage = document.getElementById('carousel-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

// Función para cambiar la imagen del carrusel
function updateCarouselImage() {
    carouselImage.src = images[currentIndex];
}

// Eventos de los botones del carrusel
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateCarouselImage();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateCarouselImage();
});

// Función para redireccionar al usuario al seleccionar opciones en el menú desplegable
function handleDropdownClick(event) {
    const targetId = event.target.getAttribute('href');
    if (targetId === 'la-fiesta.html') {
        // Redirecciona a la sección "¿Qué Disfraz Te Recomendamos?" en index.html
        window.location.href = 'dizfraz.html';
    } else if (targetId === 'dizfraz.html') {
        // Redirecciona a la sección "Anótate a la Fiesta" en index.html
        window.location.href = 'anotate.html';
    }
}

// Detectar clics en las opciones del menú desplegable
document.querySelectorAll('.dropdown-content a').forEach(link => {
    link.addEventListener('click', handleDropdownClick);
});


document.querySelectorAll('.section-container section p').forEach((p) => {
    p.addEventListener('mouseenter', () => {
        p.style.transform = 'scale(1.05)';
        p.style.transition = 'transform 0.3s ease';
    });
    p.addEventListener('mouseleave', () => {
        p.style.transform = 'scale(1)';
    });
});

