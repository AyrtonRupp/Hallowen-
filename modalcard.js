// Selecciona el modal y sus elementos
const modal = document.getElementById('cardModal');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const closeModal = document.getElementsByClassName('close')[0];

// Añade el evento a cada card
const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
  card.addEventListener('click', () => {
    const imgSrc = card.querySelector('img').src;
    const description = card.querySelector('p').textContent;

    modal.style.display = 'block';
    modalImage.src = imgSrc;
    modalCaption.textContent = description;
  });
});

// Cierra el modal al hacer clic en la "X"
closeModal.onclick = function () {
  modal.style.display = 'none';
};

// Cierra el modal al hacer clic fuera de la imagen
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
