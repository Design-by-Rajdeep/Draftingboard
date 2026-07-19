/* ============================================================
   PROJECT.JS
   Combined file — merges:
     1. project-data.js    (project data object)
     2. project-slider.js  (hero image slider)
     3. project-detail.js  (related projects slider + detail loader)

   NOTE: Load order matters and is preserved below.
   project-slider.js defines window.changeHeroSlider(), which
   project-detail.js calls when a related card is clicked — so
   the slider block must stay ahead of the detail block.

   ORDER BELOW MATCHES REQUESTED LIST:
     1. Farmhouse
     2. Group Housing
     3. Commercial Building
     4. Primary School
     5. Villa
     6. Bhowali Resort
     7. Urban Design
============================================================ */


/* ===========================================
   1. PROJECT DATA
=========================================== */

const projects = {

    farmhouse: {

        title: "FARMHOUSE",

        description:
            "Designed as a peaceful countryside retreat, this farmhouse celebrates a close connection with nature. The layout is planned to ensure that every room enjoys views of the surrounding greenery, creating bright, open spaces that feel connected to the landscape throughout the day."+
"Large openings and carefully planned spaces strengthen the visual connection between the indoors and outdoors, while cross ventilation in every room keeps the interiors naturally cool and comfortable. A small internal courtyard brings in natural light and fresh air, improving comfort without excessive heat."+
"Privacy is enhanced through jali screens around the private areas. These screens filter sunlight, allow cool breezes to pass through, and add character to the façade. Outdoor decks are placed next to the living room, dining area, bedrooms, and gym, creating comfortable spaces for dining, reading, yoga, or simply enjoying the outdoors."+
"Finished in warm, earthy tones, the farmhouse blends naturally with its surroundings, offering a calm and comfortable living experience inspired by the simplicity of countryside life."
,

        map:
            "https://www.google.com/maps/embed?pb=",

        images: [

          
        "assets/images/featured project/farmhouse/farmhouse_exit.png",
        "assets/images/featured project/farmhouse/Farmhouse Cover.png",
        "assets/images/featured project/farmhouse/farmhouse_exit _6.png",
        "assets/images/featured project/farmhouse/farmhouse_exit.png",
        "assets/images/featured project/farmhouse/Farmhouse Cover.png",
        "assets/images/featured project/farmhouse/farmhouse_exit _6.png",
        "assets/images/featured project/farmhouse/farmhouse_exit.png",
        "assets/images/featured project/farmhouse/farmhouse_exit _7.png"

        ]

    },



    grouphousing: {

        title: "GROUP HOUSING",

        description:
            "A thoughtfully planned residential development balancing community living, privacy, green spaces, and efficient circulation while maximizing urban connectivity.",

        map:
            "https://www.google.com/maps/embed?pb=",

         images: [

          
        "assets/images/featured project/Group Housing/Group Housing Cover.png",
        "assets/images/featured project/Group Housing/01 Group Housing.png",
        "assets/images/featured project/Group Housing/02 Group Housing.png",
        "assets/images/featured project/Group Housing/03 Group Housing.png",
        "assets/images/featured project/Group Housing/04 Group Housing.png",
        "assets/images/featured project/Group Housing/05 Group Housing.png",
        "assets/images/featured project/Group Housing/06 Group Housing.png",
        "assets/images/featured project/Group Housing/07 Group Housing.png",
        "assets/images/featured project/Group Housing/08 Group Housing.png",
        "assets/images/featured project/Group Housing/09 Group Housing.png",
        "assets/images/featured project/Group Housing/10 Group Housing.png"

        ]

    },



    commercial: {

        title: "COMMERCIAL BUILDING",

        description:
            "A contemporary commercial development designed to maximize business functionality, customer engagement, and efficient space utilization while maintaining a strong architectural identity.",

        map:
            "https://www.google.com/maps/embed?pb=",

        images: [

        "assets/images/featured project/Commercial/Commercial Cover.png",
        "assets/images/featured project/Commercial/01 Commercial_building.png",
        "assets/images/featured project/Commercial/02 Commercial_building.png",
        "assets/images/featured project/Commercial/03 Commercial_building.png",
        "assets/images/featured project/Commercial/04 Commercial_building.png",
        "assets/images/featured project/Commercial/05 Commercial_building.png",
        "assets/images/featured project/Commercial/06 Commercial_building.png",
        "assets/images/featured project/Commercial/07 Commercial_building.png",
        "assets/images/featured project/Commercial/08 Commercial_building.png",
        "assets/images/featured project/Commercial/09 Commercial_building.png"

        ]

    },



    school: {

        title: "PRIMARY SCHOOL",

        description:
            "A modern educational campus focusing on open learning spaces, environmental sustainability, and student interaction through thoughtful planning and contemporary architectural design.",

        map:
            "https://www.google.com/maps/embed?pb=",

        images: [

        "assets/images/featured project/School/School Cover.png",
        "assets/images/featured project/School/1. Student Entry.png",
        "assets/images/featured project/School/2. Courtyard View.png",
        "assets/images/featured project/School/3.Cortyard View 2.png",
        "assets/images/featured project/School/4.Courtyard 4.png",
        "assets/images/featured project/School/7. Agriculture.png",
        "assets/images/featured project/School/10. Angle 2.png",
        "assets/images/featured project/School/11.Front Elevation.png",
        "assets/images/featured project/School/14. Backside Birdeye.png",
        "assets/images/featured project/School/21 Classroom Indoor.png",
        "assets/images/featured project/School/22 Library Indoor.png"

        ]

    },



    villa: {

        title: "VILLA",

        description:
            "A premium residential villa designed with contemporary architecture, open living spaces, abundant natural light, and seamless indoor-outdoor connectivity. The project blends elegance, functionality, and sustainability while offering panoramic views and luxurious living experiences.",

        map:
            "https://www.google.com/maps/embed?pb=",

        images: [

        "assets/images/featured project/Modern Villa/Villa Cover.png",
        "assets/images/featured project/Modern Villa/02 Villa.png",
        "assets/images/featured project/Modern Villa/01 Villa.png",
        "assets/images/featured project/Modern Villa/04 Villa.png",
        "assets/images/featured project/Modern Villa/05 Villa.png",
        "assets/images/featured project/Modern Villa/06 Villa.png"

        ]

    },



    bhowaliresort: {

        title: "BHOWALI RESORT",

        description:
            "An elegant resort project emphasizing premium finishes, immersive interiors, lighting, and sophisticated material selection set within a scenic retreat setting.",

        map:
            "https://www.google.com/maps/embed?pb=",

        images: [

         
        "assets/images/featured project/Bhowali/Bhowali Cover.png",
        "assets/images/featured project/Bhowali/02 Bhowali.png",
        "assets/images/featured project/Bhowali/09. Street View.png",
        "assets/images/featured project/Bhowali/03Bhowali.png"


        ]

    },



    urbandesign: {

        title: "URBAN DESIGN",

        description:
            "test",

        map:
            "https://www.google.com/maps/embed?pb=",

        images: [

        "assets/images/featured project/Urban_Design/Urban Design cover.png",
        "assets/images/featured project/Urban_Design/01 Urban Design.png",
        "assets/images/featured project/Urban_Design/02 Urban Design.png",
        "assets/images/featured project/Urban_Design/03 Urban Design.png",
        "assets/images/featured project/Urban_Design/04 Urban Design.png",
        "assets/images/featured project/Urban_Design/05 Urban Design.png",
        "assets/images/featured project/Urban_Design/06 Urban Design.png",
        "assets/images/featured project/Urban_Design/07 Urban Design.png",
        "assets/images/featured project/Urban_Design/08 Urban Design.png",
        "assets/images/featured project/Urban_Design/09 Urban Design.png",
        "assets/images/featured project/Urban_Design/10 Urban Design.png",
        "assets/images/featured project/Urban_Design/11 Urban Design.png",
        "assets/images/featured project/Urban_Design/12 Urban Design.png"

        ]

    }

};


/* ===========================================
   2. PROJECT HERO SLIDER
=========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const slidesContainer = document.querySelector(".pd-slides");
    const dotsContainer = document.getElementById("pdDots");

    const prevBtn = document.getElementById("pdPrevBtn");
    const nextBtn = document.getElementById("pdNextBtn");

    let currentProject = "farmhouse";
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

        if (!images || images.length === 0) {
            return;
        }

        images.forEach((image, index) => {

            const img = document.createElement("img");

            img.src = image;

            img.alt = projects[projectKey].title || "";

            img.className = "pd-slide";

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

        if (!projects[currentProject]) return;

        const total = projects[currentProject].images.length;

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

        if (!projects[currentProject]) return;

        const total = projects[currentProject].images.length;

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
       (Called from the related-projects block below)
    ======================================= */

    window.changeHeroSlider = function(projectKey){

        loadHeroSlider(projectKey);

    }

    /* =======================================
       INITIAL LOAD
    ======================================= */

    loadHeroSlider("farmhouse");

});


/* ==========================================================
   3. PROJECT DETAIL
   PART 1
   - Generate Related Project Cards
   - Related Project Slider
   - Previous / Next
   - Dots
   - Auto Slide
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /*====================================
        ELEMENTS
    ====================================*/

    const track = document.getElementById("relatedTrack");
    const prevBtn = document.getElementById("relatedPrevBtn");
    const nextBtn = document.getElementById("relatedNextBtn");
    const dotsContainer = document.getElementById("relatedDots");

    if (!track) return;

    /*====================================
        GENERATE CARDS
    ====================================*/

    track.innerHTML = "";

    Object.keys(projects).forEach((key, index) => {

        const project = projects[key];

        const card = document.createElement("a");

        card.href = "#";

        card.className = "related-card";

        if (index === 0) {
            card.classList.add("active-project");
        }

        card.dataset.project = key;

        card.innerHTML = `

            <img src="${project.images[0]}" alt="${project.title}">

            <div class="related-content">

                <h3>${project.title}</h3>

                <p>${project.description.substring(0,90)}...</p>

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

            dot.className="related-dot";

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

        document.querySelectorAll(".related-dot").forEach((dot,index)=>{

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
       PROJECT DETAIL
       PART 2
       - Click Card
       - Update Hero Slider
       - Update Title
       - Update Description
       - Update Google Map
       - Active Project
       - Smooth Scroll
    ========================================================== */


    /*====================================
        ELEMENTS
    ====================================*/

    const title = document.getElementById("pdTitle");

    const description = document.getElementById("pdDescription");

    const map = document.getElementById("pdMap");


    /*====================================
        LOAD PROJECT
    ====================================*/

    function loadProject(projectKey){

        const project = projects[projectKey];

        if(!project) return;

        /*--------------------------
            Hero Slider
        ---------------------------*/

        if(typeof changeHeroSlider === "function"){

            changeHeroSlider(projectKey);

        }

        /*--------------------------
            Title
        ---------------------------*/

        title.style.opacity = 0;

        /*--------------------------
            Description
        ---------------------------*/

        description.style.opacity = 0;

        /*--------------------------
            Google Map
        ---------------------------*/

        map.style.opacity = 0;

        setTimeout(()=>{

            title.textContent = project.title;

            description.textContent = project.description;

            map.src = project.map;

            title.style.opacity = 1;

            description.style.opacity = 1;

            map.style.opacity = 1;

        },300);

    }


    /*====================================
        CARD CLICK
    ====================================*/

    cards.forEach(card=>{

        card.addEventListener("click",(e)=>{

            e.preventDefault();

            const projectKey = card.dataset.project;

            /*--------------------------
                Active Border
            ---------------------------*/

            cards.forEach(c=>{

                c.classList.remove("active-project");

            });

            card.classList.add("active-project");

            /*--------------------------
                Load Project
            ---------------------------*/

            loadProject(projectKey);

            /*--------------------------
                Scroll to Hero
            ---------------------------*/

            document.getElementById("project_detail")
            .scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        });

    });


    /*====================================
        INITIAL PROJECT
    ====================================*/

    loadProject("farmhouse");

    /* ==========================================================
       PROJECT DETAIL
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
        map.style.transition = ".35s";

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

    const heroSlider = document.querySelector(".pd-slider");

    if(heroSlider){

        heroSlider.addEventListener("touchstart",(e)=>{

            startX = e.changedTouches[0].clientX;

        });

        heroSlider.addEventListener("touchend",(e)=>{

            endX = e.changedTouches[0].clientX;

            if(startX-endX>60){

                if(typeof document.getElementById("pdNextBtn").click==="function"){

                    document.getElementById("pdNextBtn").click();

                }

            }

            if(endX-startX>60){

                if(typeof document.getElementById("pdPrevBtn").click==="function"){

                    document.getElementById("pdPrevBtn").click();

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
        RELOAD CURRENT PROJECT
    ====================================*/

    window.reloadCurrentProject=function(){

        const active=document.querySelector(".related-card.active-project");

        if(active){

            loadProject(active.dataset.project);

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