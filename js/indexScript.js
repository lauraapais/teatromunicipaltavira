const carouselContainer = document.querySelector('.carousel-container');
const body = document.querySelector('body');
const slides = document.querySelectorAll('.slide');
const slideColors = ['#FFAC27', '#00D8FF', '#5EBC70']; // Add colors for each slide
let currentIndex = 0;

slides.forEach(slide => {
    slide.addEventListener('click', () => {
        const targetIndex = parseInt(slide.getAttribute('data-index'));
        updateCarousel(targetIndex);
    });
});

carouselContainer.addEventListener('scroll', () => {
    const scrollLeft = carouselContainer.scrollLeft;
    const containerWidth = carouselContainer.offsetWidth;
    currentIndex = Math.round(scrollLeft / containerWidth);
    updateSlidesIndicator(currentIndex);
    body.style.transition = 'background-color 1s'; 
    body.style.backgroundColor = slideColors[currentIndex];
});

function updateCarousel(targetIndex) {
    const containerWidth = carouselContainer.offsetWidth;
    carouselContainer.scrollTo({
        left: targetIndex * containerWidth,
        behavior: 'smooth'
    });
    body.style.transition = 'background-color 1s'; 
    body.style.backgroundColor = slideColors[targetIndex];
    currentIndex = targetIndex;
}

function updateSlidesIndicator(targetIndex) {
    slides.forEach((slide, index) => {
        if(index === targetIndex) {
            slide.classList.add('slidesSelected');
        } else {
            slide.classList.remove('slidesSelected');
        }
    });
}
