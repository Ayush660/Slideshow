/* Code by wrapping all the functions into an object */

const slideShow = {
    slideIndex: 1,
    timer: null,
    setTimer: function() {
        return setInterval(() => {
            this.changeSlide(1);
        }, 4000);
    },
    changeSlide: function(n) {
        clearInterval(this.timer);
        this.slideIndex += n;
        this.showSlide(this.slideIndex);

        this.timer = this.setTimer();
    },
    current: function(n) {
        clearInterval(this.timer)
        this.slideIndex = n;
        this.showSlide(this.slideIndex);

        this.timer = this.setTimer();
    },
    key: function(event) {
        if (event.key === "ArrowLeft") {
            this.changeSlide(-1);
        } else if (event.key === "ArrowRight") {
            this.changeSlide(1);
        }
    },
    showSlide: function(n) {
        {
            const slides = document.getElementsByClassName("slide");
            const dots = document.getElementsByClassName("dot");
            if (n > slides.length) this.slideIndex = 1;
            else if (n < 1) this.slideIndex = slides.length;

            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
                dots[i].className = dots[i].className.replace(" active", "");
            }

            slides[this.slideIndex - 1].style.display = "block";
            dots[this.slideIndex - 1].className += " active";

        }
    }
}

slideShow.showSlide(1);
slideShow.timer = slideShow.setTimer();
document.addEventListener("keydown", (event) => {
    slideShow.key(event);
})
