// // SLIDER AUTOMATICO Y FUNCION DE BOTONES
// const slides = document.querySelector('.slides');
// const prevButton = document.getElementById('prev');
// const nextButton = document.getElementById('next');

// let currentIndex = 0;
// let autoSlideInterval;
// let interactionTimeout;

// // function updateButtons() {
// //   prevButton.disabled = currentIndex === 0;
// //   nextButton.disabled = currentIndex === slides.children.length - 1;
// // }

// function showSlide(index) {
//   slides.style.transform = `translateX(-${index * 100}%)`;
//   currentIndex = index;
// //   updateButtons();
// }

// function nextSlide() {
//   if (currentIndex < slides.children.length - 1) {
//     showSlide(currentIndex + 1);
//   } else {
//     showSlide(0); 
//   }
// }

// function prevSlide() {
//   if (currentIndex > 0) {
//     showSlide(currentIndex - 1);
//   } else {
//     showSlide(slides.children.length - 1);
//   }
// }

// function startAutoSlide() {
//   autoSlideInterval = setInterval(nextSlide, 4000); 
// }

// function stopAutoSlide() {
//   clearInterval(autoSlideInterval);
// }

// function resetInteractionTimer() {
//   clearTimeout(interactionTimeout);
//   interactionTimeout = setTimeout(startAutoSlide, 4000); 
// }

// prevButton.addEventListener('click', () => {
//   stopAutoSlide(); 
//   prevSlide();
//   resetInteractionTimer(); 
// });

// nextButton.addEventListener('click', () => {
//   stopAutoSlide(); 
//   nextSlide();
//   resetInteractionTimer(); 
// });

// startAutoSlide();


// SLIDER AUTOMATICO Y FUNCION DE SWIPE
const slides = document.querySelector('.slides');

let currentIndex = 0;
let autoSlideInterval;
let interactionTimeout;

// Variables para detectar swipe
let startX = 0;
let endX = 0;

// Mostrar la slide según el índice actual
function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
}

// Desliza a la siguiente slide
function nextSlide() {
  if (currentIndex < slides.children.length - 1) {
    showSlide(currentIndex + 1);
  } else {
    showSlide(0);
  }
}

// Desliza a la slide anterior
function prevSlide() {
  if (currentIndex > 0) {
    showSlide(currentIndex - 1);
  } else {
    showSlide(slides.children.length - 1);
  }
}

// Inicia el deslizamiento automático
function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 4000);
}

// Detiene el deslizamiento automático
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Reinicia el temporizador de interacción
function resetInteractionTimer() {
  clearTimeout(interactionTimeout);
  interactionTimeout = setTimeout(startAutoSlide, 4000);
}

// Eventos de deslizamiento (Swipe)
slides.addEventListener('touchstart', (e) => {
  stopAutoSlide(); // Detenemos el auto slide mientras el usuario interactúa
  startX = e.touches[0].clientX; // Guardamos la posición inicial del toque
});

slides.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX; // Guardamos la posición final del toque mientras se mueve
});

slides.addEventListener('touchend', () => {
  // Detectamos la dirección del swipe
  const swipeDistance = startX - endX;

  if (swipeDistance > 50) {
    // Swipe hacia la izquierda
    nextSlide();
  } else if (swipeDistance < -50) {
    // Swipe hacia la derecha
    prevSlide();
  }

  resetInteractionTimer(); // Reinicia el auto slide después del swipe
});

startAutoSlide(); // Inicia el deslizamiento automático al cargar
