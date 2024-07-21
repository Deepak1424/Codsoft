document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');

    let index = 0;
    const totalItems = items.length;
    const intervalTime = 5000; // Interval time in milliseconds (5 seconds)

    let slideInterval;

    function startSlide() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    function nextSlide() {
        index = (index < totalItems - 1) ? index + 1 : 0;
        updateCarousel();
    }

    function updateCarousel() {
        track.style.transform = `translateX(${-index * 100}%)`;
    }

    prevBtn.addEventListener('click', function() {
        index = (index > 0) ? index - 1 : totalItems - 1;
        updateCarousel();
        clearInterval(slideInterval); // Reset interval on manual navigation
        startSlide();
    });

    nextBtn.addEventListener('click', function() {
        nextSlide();
        clearInterval(slideInterval); // Reset interval on manual navigation
        startSlide();
    });

    // Start autoplay
    startSlide();
});
