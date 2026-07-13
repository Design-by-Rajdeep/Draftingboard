document.addEventListener("DOMContentLoaded", function () {
  const heroSlides = document.querySelectorAll(".hero-slide");
  let currentHeroSlide = 0;

  if (heroSlides.length > 0) {
    heroSlides[currentHeroSlide].classList.add("active");

    setInterval(function () {
   heroSlides[currentHeroSlide].classList.remove("active");

currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;

// Force reflow so animation restarts
void heroSlides[currentHeroSlide].offsetWidth;

heroSlides[currentHeroSlide].classList.add("active");
    }, 4000);
  }
});


const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// this code for services page image crousel
// this code for services page image crousel
// this code for services page image crousel

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".carousel-card");
  
  const heroNode = document.getElementById("project-hero");
  const titleNode = document.getElementById("project-title");
  const descNode = document.getElementById("project-desc");
  const mapNode = document.getElementById("project-map");

  cards.forEach(card => {
    card.addEventListener("click", function () {
      
      // 1. Remove active outline from old cards, attach to clicked card
      cards.forEach(c => c.classList.remove("active"));
      this.classList.add("active");

      // 2. Extract Data attributes
      const newHero = this.getAttribute("data-hero");
      const newTitle = this.getAttribute("data-title");
      const newDesc = this.getAttribute("data-desc");
      const newMapUrl = this.getAttribute("data-map");

      // 3. Apply smooth text fade-out animation effect transitions
      titleNode.style.opacity = 0;
      descNode.style.opacity = 0;

      setTimeout(() => {
        // Swap values
        heroNode.style.backgroundImage = `url('${newHero}')`;
        titleNode.textContent = newTitle;
        descNode.textContent = newDesc;
        mapNode.setAttribute("src", newMapUrl);

        // Fade elements back in smoothly
        titleNode.style.opacity = 1;
        descNode.style.opacity = 1;
      }, 250);

      // 4. Automatically scroll the screen back up to view the updated project layout beautifully
      heroNode.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});




/* ===========================================
   Featured Projects Slider
=========================================== */
document.addEventListener("DOMContentLoaded", () => {

    const track = document.querySelector(".slider-track");
    const cards = Array.from(document.querySelectorAll(".project-card"));
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const dotsContainer = document.querySelector(".slider-dots");

    let currentIndex = 0;
    let autoPlay;

    function cardsPerView() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 992) return 2;
        return 3;
    }

    function totalSlides() {
        return cards.length - cardsPerView() + 1;
    }

    function updateSlider() {

        const gap = 35;
        const cardWidth = cards[0].offsetWidth + gap;

        track.style.transform =
            `translateX(-${currentIndex * cardWidth}px)`;

        updateDots();

    }

    /* ---------- Create Dots ---------- */

    function createDots() {

        dotsContainer.innerHTML = "";

        for (let i = 0; i < totalSlides(); i++) {

            const dot = document.createElement("span");

            if (i === currentIndex)
                dot.classList.add("active");

            dot.addEventListener("click", () => {

                currentIndex = i;
                updateSlider();
                restartAuto();

            });

            dotsContainer.appendChild(dot);

        }

    }

    function updateDots() {

        const dots = dotsContainer.querySelectorAll("span");

        dots.forEach(dot => dot.classList.remove("active"));

        if (dots[currentIndex])
            dots[currentIndex].classList.add("active");

    }

    /* ---------- Next ---------- */

    function nextSlide() {

        currentIndex++;

        if (currentIndex >= totalSlides())
            currentIndex = 0;

        updateSlider();

    }

    /* ---------- Previous ---------- */

    function prevSlide() {

        currentIndex--;

        if (currentIndex < 0)
            currentIndex = totalSlides() - 1;

        updateSlider();

    }

    nextBtn.addEventListener("click", () => {

        nextSlide();
        restartAuto();

    });

    prevBtn.addEventListener("click", () => {

        prevSlide();
        restartAuto();

    });

    /* ---------- Auto ---------- */

    function startAuto() {

        autoPlay = setInterval(nextSlide, 4000);

    }

    function stopAuto() {

        clearInterval(autoPlay);

    }

    function restartAuto() {

        stopAuto();
        startAuto();

    }

    document
        .querySelector(".project-slider")
        .addEventListener("mouseenter", stopAuto);

    document
        .querySelector(".project-slider")
        .addEventListener("mouseleave", startAuto);

    window.addEventListener("resize", () => {

        if (currentIndex >= totalSlides())
            currentIndex = totalSlides() - 1;

        createDots();
        updateSlider();

    });

    createDots();
    updateSlider();
    startAuto();

});