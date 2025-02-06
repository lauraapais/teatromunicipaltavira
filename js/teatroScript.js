/*content showing*/
function toggleContent(id) {
    var content = document.getElementById(id);
    var icon = content.previousElementSibling.querySelector('h3:last-child');
    if (content.classList.contains('show')) {
        content.classList.remove('show');
        icon.textContent = '+';
    } else {
        content.classList.add('show');
        icon.textContent = '-';
    }
}


/*imageSlider*/
document.addEventListener("DOMContentLoaded", function() {
let currentIndex = 0;
const images = document.querySelectorAll('.imageTeatro img');
const totalImages = images.length;

function showNextImage() {
images[currentIndex].classList.remove('active');
currentIndex = (currentIndex + 1) % totalImages;
images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000); 
});
