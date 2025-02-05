const carouselContainer = document.querySelector('.carousel-container');
const body = document.querySelector('body');
const slides = document.querySelectorAll('.slide');
const slideColors = ['#FAB049', '#00D4FF', '#76BA77']; // Add colors for each slide
let currentIndex = 0;

slides.forEach(slide => {
    slide.addEventListener('click', () => {
        const targetIndex = parseInt(slide.getAttribute('data-index'));
        updateCarousel(targetIndex);
    });
});

function updateCarousel(targetIndex) {
    slides[currentIndex].classList.remove('slidesSelected');
    slides[targetIndex].classList.add('slidesSelected');
    carouselContainer.style.transform = `translateX(-${targetIndex * 100}%)`;
    body.style.transition = 'background-color 0.5s';
    body.style.backgroundColor = slideColors[targetIndex];
    currentIndex = targetIndex;
}