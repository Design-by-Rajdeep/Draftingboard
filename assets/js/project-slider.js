/* ===========================================
   PROJECT HERO SLIDER
=========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const slidesContainer = document.querySelector(".pd-slides");
    const dotsContainer = document.getElementById("pdDots");

    const prevBtn = document.getElementById("pdPrevBtn");
    const nextBtn = document.getElementById("pdNextBtn");

    let currentProject = "villa";
    let currentSlide = 0;
    let autoSlide;

    /* =======================================
       CREATE HERO SLIDER
    ======================================= */

    function loadHeroSlider(projectKey) {

        currentProject = projectKey;
        currentSlide = 0;

        clearInterval(autoSlide);

        slidesContainer.innerHTML = "";
        dotsContainer.innerHTML = "";

        const images = projects[projectKey].images;

        images.forEach((image, index) => {

            const img = document.createElement("img");

            img.src = image;

            img.className = "pd-slide";

            if (index === 0) {
                img.classList.add("active");
            }

            slidesContainer.appendChild(img);

            const dot = document.createElement("span");

            dot.className = "pd-dot";

            if (index === 0) {
                dot.classList.add("active");
            }

            dot.addEventListener("click", () => {

                currentSlide = index;

                updateSlider();

                restartAuto();

            });

            dotsContainer.appendChild(dot);

        });

        updateSlider();

        startAuto();

    }

    /* =======================================
       UPDATE SLIDER
    ======================================= */

    function updateSlider() {

        const slides = document.querySelectorAll(".pd-slide");
        const dots = document.querySelectorAll(".pd-dot");

        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        slides[currentSlide].classList.add("active");
        dots[currentSlide].classList.add("active");

    }

    /* =======================================
       NEXT
    ======================================= */

    function nextSlide() {

        const total = projects[currentProject].images.length;

        currentSlide++;

        if (currentSlide >= total) {

            currentSlide = 0;

        }

        updateSlider();

    }

    /* =======================================
       PREVIOUS
    ======================================= */

    function previousSlide() {

        const total = projects[currentProject].images.length;

        currentSlide--;

        if (currentSlide < 0) {

            currentSlide = total - 1;

        }

        updateSlider();

    }

    /* =======================================
       AUTO SLIDE
    ======================================= */

    function startAuto() {

        autoSlide = setInterval(() => {

            nextSlide();

        }, 3000);

    }

    function restartAuto() {

        clearInterval(autoSlide);

        startAuto();

    }

    /* =======================================
       EVENTS
    ======================================= */

    nextBtn.addEventListener("click", () => {

        nextSlide();

        restartAuto();

    });

    prevBtn.addEventListener("click", () => {

        previousSlide();

        restartAuto();

    });

    slidesContainer.addEventListener("mouseenter", () => {

        clearInterval(autoSlide);

    });

    slidesContainer.addEventListener("mouseleave", () => {

        startAuto();

    });

    /* =======================================
       GLOBAL FUNCTION
       (Called from project-detail.js)
    ======================================= */

    window.changeHeroSlider = function(projectKey){

        loadHeroSlider(projectKey);

    }

    /* =======================================
       INITIAL LOAD
    ======================================= */

    loadHeroSlider("villa");

});