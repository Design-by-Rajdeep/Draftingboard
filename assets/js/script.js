document.addEventListener("DOMContentLoaded", function () {
  const heroSlides = document.querySelectorAll(".hero-slide");
  let currentHeroSlide = 0;

  if (heroSlides.length > 0) {
    heroSlides[currentHeroSlide].classList.add("active");

    setInterval(function () {
      heroSlides[currentHeroSlide].classList.remove("active");
      currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
      heroSlides[currentHeroSlide].classList.add("active");
    }, 9000);
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