document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".carousel-card");
    const hero = document.getElementById("project-hero");
    const title = document.getElementById("project-title");
    const desc = document.getElementById("project-desc");
    const map = document.getElementById("project-map");

    const track = document.querySelector(".carousel-track");
    const dotsContainer = document.querySelector(".carousel-dots");

    let current = 0;
    let autoSlide;

    /* ===========================
       CREATE DOTS
    =========================== */

    cards.forEach((card, index) => {

        const dot = document.createElement("span");
        dot.classList.add("carousel-dot");

        if (index === 0) {
            dot.classList.add("active");
        }

        dot.addEventListener("click", () => {
            showProject(index);
            restartAutoSlide();
        });

        dotsContainer.appendChild(dot);

    });

    const dots = document.querySelectorAll(".carousel-dot");

    /* ===========================
       SHOW PROJECT
    =========================== */

    function showProject(index) {

        current = index;

        cards.forEach(card => card.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        cards[index].classList.add("active");
        dots[index].classList.add("active");

        hero.style.backgroundImage =
            `url('${cards[index].dataset.hero}')`;

        title.style.opacity = 0;
        desc.style.opacity = 0;

        setTimeout(() => {

            title.textContent = cards[index].dataset.title;
            desc.textContent = cards[index].dataset.desc;
            map.src = cards[index].dataset.map;

            title.style.opacity = 1;
            desc.style.opacity = 1;

        }, 250);

        const gap = 25;

        track.scrollTo({

            left: cards[index].offsetLeft - gap,

            behavior: "smooth"

        });

    }

    /* ===========================
       CARD CLICK
    =========================== */

    cards.forEach((card, index) => {

        card.addEventListener("click", () => {

            showProject(index);

            hero.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

            restartAutoSlide();

        });

    });

    /* ===========================
       AUTO SLIDE
    =========================== */

    function startAutoSlide() {

        autoSlide = setInterval(() => {

            current++;

            if (current >= cards.length) {
                current = 0;
            }

            showProject(current);

        }, 9000);

    }

    function restartAutoSlide() {

        clearInterval(autoSlide);
        startAutoSlide();

    }

    /* ===========================
       PAUSE ON HOVER
    =========================== */

    track.addEventListener("mouseenter", () => {
        clearInterval(autoSlide);
    });

    track.addEventListener("mouseleave", () => {
        startAutoSlide();
    });

    /* ===========================
       START
    =========================== */

    showProject(0);
    startAutoSlide();

});