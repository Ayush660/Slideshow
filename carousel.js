let slideIndex = 1;
showSlide(slideIndex);

document.onkeydown = function(e) {
    if(String(e.key) == "ArrowLeft") {
        prevSlide();
    } else if(String(e.key) === "ArrowRight") {
        nextSlide();
    }
}

function nextSlide() {
    slideIndex += 1;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex -= 1;
    showSlide(slideIndex);
}

function current(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    if(n > slides.length) slideIndex = 1;
    else if(n < 1) slideIndex = slides.length;

    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for(let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

}
