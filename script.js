const slides = document.querySelectorAll('.slides .card');
let slideIndex = 0;

document.addEventListener('DOMContentLoaded', initializeSlider);

function initializeSlider() {
    if(slides.length > 0) {
      slides[slideIndex].classList.add("displaySlide");  
    }
}

function showSlide(index) {
    if(index >= slides.length) {
        slideIndex = 0;
    }
    else if(index < 0) {
        slideIndex = slides.length - 1;
    } 
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);

}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}



function openDrop() {
    var openDrop = document.querySelector(".dropdown-items");
    if(openDrop.style.display === 'none') {
        
        document.querySelector(".dropdown-items").style.animation="dropAnimation ease-in-out .2s";
    openDrop.style.display = 'flex';
    }
    else {
        document.querySelector(".dropdown-items").style.animation="upAnimation ease-in-out .2s";
        openDrop.style.display = 'none';
    }
}

function openMenu() {
    const openMenu = document.querySelector('.subMenuContainer')
    openMenu.style.display = 'flex';
    
}

function closeMenu() {
    const closeMenu = document.querySelector('.subMenuContainer');
    closeMenu.style.display = 'none';
}