let currentIndex = 0;
let slides = document.querySelectorAll(".slide");
let totalSlides = slides.length;
let slideInterval = 3000;
let captionDelay = 500;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = "none";
    slide.querySelector(".caption").style.opacity = 0;
  });

  slides[index].style.display = "block";
  setTimeout(() => {
    slides[index].querySelector(".caption").style.opacity = 1;
  }, captionDelay);
}

function autoScroll() {
  showSlide(currentIndex);
  currentIndex = (currentIndex + 1) % totalSlides;
}

function changeSlide(n) {
  currentIndex = (currentIndex + n + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// Initialize slider
showSlide(currentIndex);
setInterval(autoScroll, slideInterval);
