let slideIndex = 0;
showSlide();

function moveSlide(n) {
    slideIndex += n;
    showSlide();
}

function showSlide() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].setAttribute("data-status", "hide");
    }
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    slides[slideIndex].setAttribute("data-status", "active");
    if (slideIndex === 0) {
        slides[slides.length - 1].setAttribute("data-status", "next");
    } else {
        slides[slideIndex - 1].setAttribute("data-status", "next");
    }
    if (slideIndex === slides.length - 1) {
        slides[0].setAttribute("data-status", "next");
    } else {
        slides[slideIndex + 1].setAttribute("data-status", "next");
    }
}
