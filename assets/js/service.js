/* ============================================================
   SERVICE.JS

   ORDER BELOW MATCHES REQUESTED LIST:
     1. Architectural Design
     2. Landscape Design
     3. Urban Design
     4. Towards a Sustainable Future!
     5. Interior
============================================================ */


/* ===========================================
   1. SERVICE DATA
=========================================== */

const services = {

    architecturaldesign: {

        title: "ARCHITECTURAL DESIGN",

        description:
           "Architecture is a profession of great responsibility, where every design decision " +
"has a lasting impact on its users, the surrounding community, and the environment. " +
"Great architecture is defined not only by its visual appeal but also by its ability " +
"to respond thoughtfully to context, purpose, and sustainability. In every project, " +
"we strive to balance our clients' aspirations with the unique character of the site " +
"while embracing our responsibility toward the environment. Rather than relying on " +
"expensive finishes to conceal raw surfaces and building services, we celebrate the " +
"beauty of honest materials and thoughtful craftsmanship. This approach reduces the " +
"building's carbon footprint, minimizes environmental impact, and creates spaces that " +
"are authentic, sustainable, and timeless.",

        images: [

        "assets/images/services/Architecture_DBS.jpg",

        ]

    },



    landscapedesign: {

        title: "LANDSCAPE DESIGN",

        description:
            "Modern Indian architecture often emphasizes building envelopes and interiors, " +
"while outdoor spaces are frequently overlooked. We believe these spaces are just " +
"as important, with the potential to transform unused corners into peaceful and " +
"inviting retreats. A thoughtfully designed outdoor environment encourages people " +
"to pause, relax, enjoy a cup of coffee, or simply reconnect with nature. Surrounded " +
"by greenery, these spaces become more than an extension of a building—they become " +
"places of life, comfort, and well-being. Plants have the power to calm the mind, " +
"uplift the spirit, and restore balance to everyday living. To us, outdoor spaces " +
"are not an addition—they are an essential part of meaningful design.",

        images: [

        "assets/images/services/Landscape_DBS.jpg",

        ]

    },



    urbandesign: {

        title: "URBAN DESIGN",

        description:
            "Urban design shapes the way people experience and interact with cities, influencing " +
"movement, public spaces, accessibility, sustainability, and community identity. " +
"Successful urban environments are not only functional but also vibrant, inclusive, " +
"and enriching for everyone who uses them. Our vision is to create people-centered " +
"places that improve the relationship between pedestrians, vehicles, and the built " +
"environment while reducing conflicts and encouraging safe, efficient movement. By " +
"prioritizing livability, environmental responsibility, and thoughtful planning, we " +
"design urban spaces that promote healthier lifestyles, strengthen community bonds, " +
"and contribute to cities that are resilient, harmonious, and inspiring.",

        images: [

        "assets/images/services/Urban Design_DBS.jpg",

        ]

    },



    sustainablefuture: {

        title: "TOWARDS A SUSTAINABLE FUTURE!",

        description:
            "In today's world, sustainable buildings are no longer optional—they are essential. " +
"As climate change and rising pollution continue to affect our health and the future " +
"of our planet, responsible design must prioritize environmental performance from " +
"the very beginning. We provide sustainability consultancy services that help reduce " +
"the carbon footprint of buildings through comprehensive daylight studies, solar " +
"radiation analysis, energy simulations, embodied carbon assessments, and strategic " +
"recommendations for optimizing building performance. Our goal is to create healthier, " +
"more efficient, and environmentally responsible spaces that deliver long-term value " +
"for both people and the planet.",

        images: [

        "assets/images/services/Sustainability_DBS.jpg",

        ]

    },



    interiordesign: {

        title: "INTERIOR",

        description:
            "Our interior design service shapes the spaces people experience every day, " +
            "balancing material, light, and layout to create interiors that feel warm, " +
            "functional, and true to the character of the building around them. From material " +
            "selection to furniture layout, every detail is considered to create a cohesive " +
            "and comfortable experience.",

        images: [

        "assets/images/services/Interior_DBS.png",

        ]

    }

};


/* ===========================================
   GET SELECTED SERVICE FROM URL
   (supports hash links from index.php, e.g.
    service.php#architectural-design)
=========================================== */

const serviceSlugMap = {
    "architectural-design": "architecturaldesign",
    "landscape-design": "landscapedesign",
    "urban-design": "urbandesign",
    "sustainable-future": "sustainablefuture",
    "interior-design": "interiordesign"
};

function getSelectedService() {

    /* 1. Check hash, e.g. #architectural-design */
    const hash = window.location.hash.replace("#", "");

    if (hash && serviceSlugMap[hash]) {
        return serviceSlugMap[hash];
    }

    /* 2. Fallback: check ?service=key query param */
    const params = new URLSearchParams(window.location.search);
    const key = params.get("service");

    if (key && services[key]) {
        return key;
    }

    /* 3. Default */
    return "architecturaldesign";
}

const initialService = getSelectedService();



/* ===========================================
   2. SERVICE HERO SLIDER
=========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const slidesContainer = document.querySelector(".ms-slides");
    const dotsContainer = document.getElementById("msDots");

    const prevBtn = document.getElementById("msPrevBtn");
    const nextBtn = document.getElementById("msNextBtn");

    let currentService = initialService;
    let currentSlide = 0;
    let autoSlide;

    /* =======================================
       CREATE HERO SLIDER
    ======================================= */

    function loadHeroSlider(serviceKey) {

        currentService = serviceKey;
        currentSlide = 0;

        clearInterval(autoSlide);

        slidesContainer.innerHTML = "";
        dotsContainer.innerHTML = "";

        const images = services[serviceKey].images;

        if (!images || images.length === 0) {
            return;
        }

        images.forEach((image, index) => {

            const img = document.createElement("img");

            img.src = image;

            img.alt = services[serviceKey].title || "";

            img.className = "ms-slide";

            if (index === 0) {
                img.classList.add("active");
            }

            /* Fallback if an image path is broken/missing */
            img.addEventListener("error", function () {

                this.src =
                    "data:image/svg+xml;charset=UTF-8," +
                    encodeURIComponent(
                        `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='700'>
                            <rect width='100%' height='100%' fill='#eeeeee'/>
                            <text x='50%' y='50%' font-family='sans-serif' font-size='22'
                                  fill='#999999' text-anchor='middle' dominant-baseline='middle'>
                                Image not found
                            </text>
                        </svg>`
                    );

            }, { once: true });

            slidesContainer.appendChild(img);

            const dot = document.createElement("span");

            dot.className = "ms-dot";

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

        const slides = document.querySelectorAll(".ms-slide");
        const dots = document.querySelectorAll(".ms-dot");

        if (!slides.length) return;

        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        if (slides[currentSlide]) slides[currentSlide].classList.add("active");
        if (dots[currentSlide]) dots[currentSlide].classList.add("active");

    }

    /* =======================================
       NEXT
    ======================================= */

    function nextSlide() {

        if (!services[currentService]) return;

        const total = services[currentService].images.length;

        if (!total) return;

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

        if (!services[currentService]) return;

        const total = services[currentService].images.length;

        if (!total) return;

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
       (Called from the services block below)
    ======================================= */

    window.changeHeroSlider = function(serviceKey){

        loadHeroSlider(serviceKey);

    }

    /* =======================================
       INITIAL LOAD
    ======================================= */

     loadHeroSlider(initialService);

});


/* ==========================================================
   3. MY SERVICES
   PART 1
   - Generate Service Cards
   - Services Slider
   - Previous / Next
   - Dots
   - Auto Slide
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /*====================================
        ELEMENTS
    ====================================*/

    const track = document.getElementById("serviceTrack");
    const prevBtn = document.getElementById("servicePrevBtn");
    const nextBtn = document.getElementById("serviceNextBtn");
    const dotsContainer = document.getElementById("serviceDots");

    if (!track) return;

    /*====================================
        GENERATE CARDS
    ====================================*/

    track.innerHTML = "";

    Object.keys(services).forEach((key, index) => {

        const service = services[key];

        const card = document.createElement("a");

        card.href = "#";

        card.className = "service-card";

       if (key === initialService) {
            card.classList.add("active-service");
        }

        card.dataset.service = key;

        card.innerHTML = `

            <img src="${service.images[0]}" alt="${service.title}">

            <div class="service-content">

                <h3>${service.title}</h3>

                <p>${service.description.substring(0,90)}...</p>

                <span>Know More →</span>

            </div>

        `;

        track.appendChild(card);

    });

    /*====================================
        VARIABLES
    ====================================*/

    const cards = [...track.children];

    let current = 0;

    let autoSlider;

    /*====================================
        RESPONSIVE
    ====================================*/

    function visibleCards() {

        if(window.innerWidth <= 767) return 1;

        if(window.innerWidth <= 991) return 2;

        return 3;

    }

    function maxSlide(){

        return Math.max(cards.length - visibleCards(),0);

    }

    function stepSize(){

        const cardWidth = cards[0].offsetWidth;

        const gap = parseFloat(getComputedStyle(track).gap) || 0;

        return cardWidth + gap;

    }

    /*====================================
        CREATE DOTS
    ====================================*/

    function createDots(){

        dotsContainer.innerHTML="";

        for(let i=0;i<=maxSlide();i++){

            const dot=document.createElement("button");

            dot.className="service-dot";

            if(i===current){

                dot.classList.add("active");

            }

            dot.addEventListener("click",()=>{

                current=i;

                updateSlider();

                restartAuto();

            });

            dotsContainer.appendChild(dot);

        }

    }

    /*====================================
        UPDATE SLIDER
    ====================================*/

    function updateSlider(){

        track.style.transform=
        `translateX(-${current * stepSize()}px)`;

        document.querySelectorAll(".service-dot").forEach((dot,index)=>{

            dot.classList.toggle("active",index===current);

        });

    }

    /*====================================
        NEXT
    ====================================*/

    function nextSlide(){

        current++;

        if(current>maxSlide()){

            current=0;

        }

        updateSlider();

    }

    /*====================================
        PREVIOUS
    ====================================*/

    function previousSlide(){

        current--;

        if(current<0){

            current=maxSlide();

        }

        updateSlider();

    }

    /*====================================
        BUTTON EVENTS
    ====================================*/

    nextBtn.addEventListener("click",()=>{

        nextSlide();

        restartAuto();

    });

    prevBtn.addEventListener("click",()=>{

        previousSlide();

        restartAuto();

    });

    /*====================================
        AUTO SLIDER
    ====================================*/

    function startAuto(){

        autoSlider=setInterval(()=>{

            nextSlide();

        },3000);

    }

    function restartAuto(){

        clearInterval(autoSlider);

        startAuto();

    }

    track.parentElement.addEventListener("mouseenter",()=>{

        clearInterval(autoSlider);

    });

    track.parentElement.addEventListener("mouseleave",()=>{

        startAuto();

    });

    /*====================================
        RESIZE
    ====================================*/

    window.addEventListener("resize",()=>{

        if(current>maxSlide()){

            current=maxSlide();

        }

        createDots();

        updateSlider();

    });

    /*====================================
        INITIALIZE
    ====================================*/

    createDots();

    updateSlider();

    startAuto();


    /* ==========================================================
       MY SERVICES
       PART 2
       - Click Card
       - Update Hero Slider
       - Update Title
       - Update Description
       - Update Hero Content
       - Active Service
       - Smooth Scroll
    ========================================================== */


    /*====================================
        ELEMENTS
    ====================================*/

    const title = document.getElementById("msTitle");

    const description = document.getElementById("msDescription");


    /*====================================
        LOAD SERVICE
    ====================================*/

    function loadService(serviceKey){

        const service = services[serviceKey];

        if(!service) return;

        /*--------------------------
            Hero Slider
        ---------------------------*/

        if(typeof changeHeroSlider === "function"){

            changeHeroSlider(serviceKey);

        }

        /*--------------------------
            Title
        ---------------------------*/

        title.style.opacity = 0;

        /*--------------------------
            Description
        ---------------------------*/

        description.style.opacity = 0;

        setTimeout(()=>{

            title.textContent = service.title;

            description.textContent = service.description;

            title.style.opacity = 1;

            description.style.opacity = 1;

        },300);

    }


    /*====================================
        CARD CLICK
    ====================================*/

    cards.forEach(card=>{

        card.addEventListener("click",(e)=>{

            e.preventDefault();

            const serviceKey = card.dataset.service;

            /*--------------------------
                Active Border
            ---------------------------*/

            cards.forEach(c=>{

                c.classList.remove("active-service");

            });

            card.classList.add("active-service");

            /*--------------------------
                Load Service
            ---------------------------*/

            loadService(serviceKey);

            /*--------------------------
                Scroll to Hero
            ---------------------------*/

            document.getElementById("my_services")
            .scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        });

    });


    /*====================================
        INITIAL SERVICE
    ====================================*/

     loadService(initialService);

    /* ==========================================================
       MY SERVICES
       PART 3
       - Keyboard Navigation
       - Auto Restart
       - Smooth Fade
       - Hero Touch Swipe
       - Finish
    ========================================================== */


    /*====================================
        HERO FADE EFFECT
    ====================================*/

    function fadeContent(){

        title.style.transition = ".35s";
        description.style.transition = ".35s";

    }

    fadeContent();


    /*====================================
        KEYBOARD SUPPORT
    ====================================*/

    document.addEventListener("keydown",(e)=>{

        if(e.key==="ArrowRight"){

            nextSlide();

            restartAuto();

        }

        if(e.key==="ArrowLeft"){

            previousSlide();

            restartAuto();

        }

    });


    /*====================================
        TOUCH SUPPORT
    ====================================*/

    let startX = 0;

    let endX = 0;

    const heroSlider = document.querySelector(".ms-slider");

    if(heroSlider){

        heroSlider.addEventListener("touchstart",(e)=>{

            startX = e.changedTouches[0].clientX;

        });

        heroSlider.addEventListener("touchend",(e)=>{

            endX = e.changedTouches[0].clientX;

            if(startX-endX>60){

                if(typeof document.getElementById("msNextBtn").click==="function"){

                    document.getElementById("msNextBtn").click();

                }

            }

            if(endX-startX>60){

                if(typeof document.getElementById("msPrevBtn").click==="function"){

                    document.getElementById("msPrevBtn").click();

                }

            }

        });

    }


    /*====================================
        PAUSE WHEN TAB HIDDEN
    ====================================*/

    document.addEventListener("visibilitychange",()=>{

        if(document.hidden){

            clearInterval(autoSlider);

        }else{

            restartAuto();

        }

    });


    /*====================================
        RELOAD CURRENT SERVICE
    ====================================*/

    window.reloadCurrentService=function(){

        const active=document.querySelector(".service-card.active-service");

        if(active){

            loadService(active.dataset.service);

        }

    };


    /*====================================
        WINDOW RESIZE
    ====================================*/

    window.addEventListener("resize",()=>{

        updateSlider();

    });


    /*====================================
        END
    ====================================*/

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