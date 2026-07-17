/* ==========================================================
   PROJECT DETAIL
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



    // part 2 // part 2 // part 2 // part 2
    
    // part 2 // part 2 // part 2 // part 2

    
    // part 2 // part 2 // part 2 // part 2
    
    // part 2 // part 2 // part 2 // part 2


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

loadProject("villa");

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