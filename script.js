const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-track img");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

function updateCarousel(){

    const slideWidth = slides[0].offsetWidth;
    const gap = 25; // mesmo valor do CSS

    track.style.transform =
        `translateX(-${index * (slideWidth + gap)}px)`;
}

next.addEventListener("click", () => {
    index++;

    if (index >= slides.length) {
        index = 0;
    }

    updateCarousel();
});

prev.addEventListener("click", () => {
    index--;

    if (index < 0) {
        index = slides.length - 1;
    }

    updateCarousel();
});
