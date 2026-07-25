/* ============================================================
   PROJECT.JS
  
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

        conceptImage: [

        "assets/images/featured project/farmhouse/Farmhouse Concept.jpg"

        ],

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
            "Modern high-rise communities often have parks and public spaces that feel disconnected from everyday life. In contrast, traditional neighborhoods had lively streets where children played safely, elders gathered, and neighbors naturally interacted, creating a strong sense of community."+
"This project brings that spirit back by introducing double-height community spaces on alternate floors. Instead of limiting social life to the ground level, these shared spaces become an extension of everyday living, making them easily accessible to residents of all ages."+
"Located just a short walk from every home, these spaces encourage children to play close to their families while providing comfortable areas for conversations, relaxation, and informal gatherings. By bringing people together within the residential floors, the design creates a safer, more connected, and socially active living environment that reimagines the warmth of traditional street culture in a modern vertical community."

            ,

        conceptImage: [

        "assets/images/featured project/Group Housing/Group Housing Concept.jpg"

        ],

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
            "This commercial building is designed to be more than just an office. " +
"Instead of becoming inactive after working hours, it brings together retail, dining, entertainment, and workspaces to create a lively destination throughout the day. " +
"Retail shops on the ground and first floors activate the street, while a semi-open restaurant with outdoor terraces on the upper level provides a place to relax and socialize. " +
"Two cinema auditoriums at the rear further attract visitors, creating a vibrant mix of people and activities." +

"The second design idea celebrates movement through the building. " +
"Instead of hiding the staircases in corners as a fire safety requirement, they are placed prominently on the front façade. " +
"This encourages people to choose the stairs, discover different levels, and experience the building in a more engaging way. " +
"The staircases become a defining architectural feature, giving the building its unique identity while promoting a more active and connected urban experience." +

"The office facade idea - " +
"Instead of a fully sealed glass façade, this office is designed to work with the local climate. " +
"Every workspace is planned with cross ventilation, allowing fresh air to reduce the dependence on air conditioning during comfortable months." +
"The façade is divided into three parts—a glazed middle section with chajjas for daylight and shading, and perforated MS panels at the top and bottom that allow natural airflow. " +
"This simple climate-responsive approach can significantly reduce cooling demand compared to conventional all-glass office buildings while creating a healthier and more comfortable workplace.",
       

        conceptImage: [

        "assets/images/featured project/Commercial/Commercial Building Concept.jpg"

        ],

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
            
        "This school is designed around the idea that education should extend beyond textbooks and technology. " +
"A dedicated nursery and farming area allows students to learn how food is grown, helping them develop a stronger connection with nature and the environment." +

"The classrooms are arranged in a zigzag layout, creating shared green spaces while maintaining visual privacy for each class. " +
"A central courtyard, along with a second-skin façade and roof, provides shade, reduces heat gain, and keeps the learning spaces naturally cool, minimizing the need for mechanical air conditioning.",


        conceptImage: [

        "assets/images/featured project/School/School Concept.jpg"

        ],

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
            
        "Designed for a rural setting, this villa combines modern architecture with the openness of traditional community living. " +
"Instead of turning away from the neighborhood, the house features multiple outdoor spaces that maintain a direct visual connection with the street, encouraging interaction while preserving comfort." +

"Terraces, sit-outs, and open spaces are thoughtfully placed around the home, allowing residents to enjoy the outdoors as part of everyday life. " +
"The result is a contemporary villa that respects the closely connected social culture of its surroundings while offering a clean, modern living experience.",


        conceptImage: [

        "assets/images/featured project/Modern Villa/Villa Layouts.jpg"

        ],

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
        
        "This hillside resort features eight independent villas, each designed to make the most of its natural surroundings. " +
"The original layout placed the access road along the front of the site, blocking the best views and reducing the quality of the outdoor spaces." +

"The master plan was redesigned by moving the road to the rear of the villas, freeing the front edge for living areas, bedrooms, terraces, and private decks. " +
"This simple planning change allows every villa to enjoy uninterrupted views of the hills and forest while creating a quieter, more private, and immersive stay for guests.",
        

        conceptImage: [

        "assets/images/featured project/Bhowali/Bhowali Concept.jpg"

        ],

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
          "This urban design proposal transforms a business-focused CBD into a lively public destination that remains active throughout the day. " +
"Recreational spaces, open cafés, diverse retail, and dedicated areas for street vendors attract people before and after business hours, creating a safer and more vibrant environment for all, especially women." +

"The second focus is seamless movement across the district. " +
"A continuous 20-foot-wide circulation loop with ramps and gentle curves connects the entire marketplace, making it easy to navigate on foot, by bicycle, or by golf cart. " +
"The result is a more accessible, inclusive, and people-friendly urban center.",

        conceptImage: [

        "assets/images/featured project/Urban_Design/Urban Design cover.png"

        ],

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
   GET SELECTED PROJECT FROM URL
=========================================== */

function getSelectedProject() {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("project");

    if (key && projects[key]) {
        return key;
    }

    return "farmhouse"; // fallback if no/invalid param
}

const initialProject = getSelectedProject();



/* ===========================================
   2. PROJECT HERO SLIDER
=========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const slidesContainer = document.querySelector(".pd-slides");
    const dotsContainer = document.getElementById("pdDots");

    const prevBtn = document.getElementById("pdPrevBtn");
    const nextBtn = document.getElementById("pdNextBtn");

    let currentProject = initialProject;
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

     loadHeroSlider(initialProject);

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

       if (key === initialProject) {
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
       - Update Concept Image
       - Active Project
       - Smooth Scroll
    ========================================================== */


    /*====================================
        ELEMENTS
    ====================================*/

    const title = document.getElementById("pdTitle");

    const description = document.getElementById("pdDescription");

    /* NOTE: pdMap is now expected to be an <img> tag, not an <iframe> */
    const conceptImage = document.getElementById("pdMap");


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
            Concept Image
        ---------------------------*/

        conceptImage.style.opacity = 0;

        setTimeout(()=>{

            title.textContent = project.title;

            description.textContent = project.description;

            conceptImage.src =
                (project.conceptImage && project.conceptImage[0]) ||
                project.images[0];

            title.style.opacity = 1;

            description.style.opacity = 1;

            conceptImage.style.opacity = 1;

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

     loadProject(initialProject);

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
        conceptImage.style.transition = ".35s";

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