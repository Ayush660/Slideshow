let slideIndex = 1;
let timer;
showSlide(slideIndex);
timer = setInterval(nextSlide, 4000);

document.onkeydown = function(e) {
    if(e.key === "ArrowLeft") {
        prevSlide();
    } else if(e.key === "ArrowRight") {
        nextSlide();
    }
}

function nextSlide() {
    clearInterval(timer);
    slideIndex += 1;
    showSlide(slideIndex);

    timer = setInterval(nextSlide, 4000);
}

function prevSlide() {
    clearInterval(timer);
    slideIndex -= 1;
    showSlide(slideIndex);

    timer = setInterval(nextSlide, 4000);
}

function current(n) {
    clearInterval(timer)
    slideIndex = n;
    showSlide(slideIndex);

    timer = setInterval(nextSlide, 4000);
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
