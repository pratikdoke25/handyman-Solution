document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const carouselContainer = document.querySelector(".carousel-container");
    const slideWidth = document.querySelector(".carousel-slide img").clientWidth;

    let index = 0;

    nextBtn.addEventListener("click", () => {
        if (index < carouselContainer.children.length - 1) {
            index++;
            carouselContainer.style.transform = `translateX(-${slideWidth * index}px)`;
        }
    });

    prevBtn.addEventListener("click", () => {
        if (index > 0) {
            index--;
            carouselContainer.style.transform = `translateX(-${slideWidth * index}px)`;
        }
    });
});
