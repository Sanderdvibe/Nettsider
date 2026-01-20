document.addEventListener('DOMContentLoaded', () => {

    // Toggle mobil-meny
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');

    if (navToggle && navList) {   // sjekk at elementene faktisk finnes
        navToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }

    // Slideshow
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.querySelector('.slide-btn.next');
    const prevBtn = document.querySelector('.slide-btn.prev');

    if (slides.length && nextBtn && prevBtn) {
        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
        }

        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });

        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });

        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 6000);
    }

});