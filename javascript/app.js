let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = 'slide active';
}

function prevSlide() {
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].className = 'slide active';
}
