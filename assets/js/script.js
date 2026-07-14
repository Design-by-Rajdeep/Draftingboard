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

/* ===========================================
   Featured Projects Slider
=========================================== */
document.addEventListener("DOMContentLoaded", () => {

    const track = document.getElementById("fpTrack");
    const cards = [...track.children];

    const prevBtn = document.getElementById("fpPrevBtn");
    const nextBtn = document.getElementById("fpNextBtn");
    const dotsContainer = document.getElementById("fpDotsContainer");

    let current = 0;
    let autoSlide;

    function visibleCards() {
        if (window.innerWidth <= 767) return 1;
        if (window.innerWidth <= 991) return 2;
        return 3;
    }

    function maxSlide() {
        return cards.length - visibleCards();
    }

    function getStep() {
        const cardWidth = cards[0].offsetWidth;
        const gap = parseFloat(getComputedStyle(track).gap) || 0;
        return cardWidth + gap;
    }

    function updateSlider() {

        track.style.transform =
            `translateX(-${current * getStep()}px)`;

        document.querySelectorAll(".fp-dot").forEach((dot, index) => {
            dot.classList.toggle("fp-active", index === current);
        });

        prevBtn.disabled = false;
        nextBtn.disabled = false;

    }

    function createDots() {

        dotsContainer.innerHTML = "";

        for (let i = 0; i <= maxSlide(); i++) {

            const dot = document.createElement("button");

            dot.className = "fp-dot";

            if (i === current)
                dot.classList.add("fp-active");

            dot.onclick = () => {

                current = i;
                updateSlider();
                restartAuto();

            };

            dotsContainer.appendChild(dot);

        }

    }

    nextBtn.onclick = () => {

        current++;

        if (current > maxSlide())
            current = 0;

        updateSlider();
        restartAuto();

    };

    prevBtn.onclick = () => {

        current--;

        if (current < 0)
            current = maxSlide();

        updateSlider();
        restartAuto();

    };

    function startAuto() {

        autoSlide = setInterval(() => {

            current++;

            if (current > maxSlide())
                current = 0;

            updateSlider();

        }, 4000);

    }

    function restartAuto() {

        clearInterval(autoSlide);
        startAuto();

    }

    track.parentElement.addEventListener("mouseenter", () => {
        clearInterval(autoSlide);
    });

    track.parentElement.addEventListener("mouseleave", () => {
        startAuto();
    });

    window.addEventListener("resize", () => {

        if (current > maxSlide())
            current = maxSlide();

        createDots();
        updateSlider();

    });

    createDots();
    updateSlider();
    startAuto();

});





/* ===========================================
   Services Slider
=========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const track = document.getElementById("servicesTrack");
    const cards = [...track.children];

    const prevBtn = document.getElementById("servicesPrevBtn");
    const nextBtn = document.getElementById("servicesNextBtn");
    const dotsContainer = document.getElementById("servicesDotsContainer");

    let current = 0;
    let autoSlide;

    function visibleCards() {
        if (window.innerWidth <= 767) return 1;
        if (window.innerWidth <= 991) return 2;
        return 3;
    }

    function maxSlide() {
        return Math.max(cards.length - visibleCards(), 0);
    }

    function getStep() {
        const cardWidth = cards[0].offsetWidth;
        const gap = parseFloat(getComputedStyle(track).gap) || 0;
        return cardWidth + gap;
    }

    function updateSlider() {

        track.style.transform =
            `translateX(-${current * getStep()}px)`;

        document.querySelectorAll(".services-dot").forEach((dot, index) => {
            dot.classList.toggle("services-active", index === current);
        });

        cards.forEach((card, index) => {
            card.classList.remove("services-active");

            if (visibleCards() === 3 && index === current + 1) {
                card.classList.add("services-active");
            }
        });

    }

    function createDots() {

        dotsContainer.innerHTML = "";

        for (let i = 0; i <= maxSlide(); i++) {

            const dot = document.createElement("button");
            dot.className = "services-dot";

            if (i === current) {
                dot.classList.add("services-active");
            }

            dot.addEventListener("click", () => {
                current = i;
                updateSlider();
                restartAuto();
            });

            dotsContainer.appendChild(dot);
        }
    }

    function nextSlide() {

        current++;

        if (current > maxSlide()) {
            current = 0;
        }

        updateSlider();
    }

    function prevSlide() {

        current--;

        if (current < 0) {
            current = maxSlide();
        }

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

    function startAuto() {

        autoSlide = setInterval(() => {
            nextSlide();
        }, 4000);

    }

    function stopAuto() {
        clearInterval(autoSlide);
    }

    function restartAuto() {
        stopAuto();
        startAuto();
    }

    track.parentElement.addEventListener("mouseenter", stopAuto);
    track.parentElement.addEventListener("mouseleave", startAuto);

    window.addEventListener("resize", () => {

        if (current > maxSlide()) {
            current = maxSlide();
        }

        createDots();
        updateSlider();

    });

    createDots();
    updateSlider();
    startAuto();

});