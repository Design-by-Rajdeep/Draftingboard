<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/header.css">
    <link rel="stylesheet" href="assets/css/project_detail.css">
    <link rel="stylesheet" href="assets/css/footer.css">

</head>

<body>
<?php include 'includes/header.php'; ?>

<!-- ================= PROJECT DETAIL ================= -->

<section id="project_detail">

    <!-- Hero Slider -->
    <div class="pd-slider">

        <div class="pd-slides">

            <img src="https://picsum.photos/seed/villa1/1200/700" class="pd-slide active" alt="">
            <img src="https://picsum.photos/seed/villa2/1200/700" class="pd-slide" alt="">
            <img src="https://picsum.photos/seed/villa3/1200/700" class="pd-slide" alt="">
            <img src="https://picsum.photos/seed/villa4/1200/700" class="pd-slide" alt="">
            <img src="https://picsum.photos/seed/villa5/1200/700" class="pd-slide" alt="">
            <img src="https://picsum.photos/seed/villa6/1200/700" class="pd-slide" alt="">
            <img src="https://picsum.photos/seed/villa6/1200/700" class="pd-slide" alt="">

        </div>

    </div>

    <!-- Navigation BELOW the slider -->
    <div class="pd-slider-nav">

        <button id="pdPrevBtn">Previous</button>

        <div id="pdDots"></div>

        <button id="pdNextBtn">Next</button>

    </div>


    <!-- Project Information -->

    <div class="pd-content">

        <h2 id="pdTitle">
            EXPERIENCE DISTRICTS ARE WHERE THE ORDINARY BECOMES REMARKABLE
        </h2>

        <p id="pdDescription">

            The Marvila Masterplan covers approximately 28 hectares between Marvila and Beato
            on Lisbon's riverfront. Developed by MVRDV and OODA, in collaboration with
            local landscape architects and Thornton Tomasetti, the plan defines a new urban
            and landscape framework for one of the largest regeneration projects currently
            under development in the city.

        </p>

    </div>


    
<!-- Concept Image -->

<div class="pd-map">

    <h4>Concept Image</h4>

    <img
        id="pdMap"
        class="pd-concept-img"
        src=""
        alt="Concept Image"
        loading="lazy">

</div>



    <!-- ===========================================
         RELATED PROJECTS
    =========================================== -->

    <div class="related-projects">

        <div class="section-heading">

            <h2>RELATED PROJECTS</h2>

            <span></span>

        </div>


        <div class="related-slider">


            <div id="relatedTrack" class="related-track">



                <!-- CARD 1 -->

                <a href="#" class="related-card active-project"
                   data-project="villa">

                    <img src="https://picsum.photos/seed/villa1/500/400" alt="">

                    <div class="related-content">

                        <h3>Luxury Villa</h3>

                        <p>
                            Modern luxury villa with breathtaking mountain views.
                        </p>

                        <span>Know More ↗</span>

                    </div>

                </a>



                <!-- CARD 2 -->

                <a href="#" class="related-card"
                   data-project="commercial">

                    <img src="https://picsum.photos/seed/commercial1/500/400" alt="">

                    <div class="related-content">

                        <h3>Commercial</h3>

                        <p>
                            Contemporary commercial development.
                        </p>

                        <span>Know More ↗</span>

                    </div>

                </a>



                <!-- CARD 3 -->

                <a href="#" class="related-card"
                   data-project="school">

                    <img src="https://picsum.photos/seed/school1/500/400" alt="">

                    <div class="related-content">

                        <h3>School</h3>

                        <p>
                            Educational campus with sustainable design.
                        </p>

                        <span>Know More ↗</span>

                    </div>

                </a>



                <!-- CARD 4 -->

                <a href="#" class="related-card"
                   data-project="university">

                    <img src="https://picsum.photos/seed/university1/500/400" alt="">

                    <div class="related-content">

                        <h3>University</h3>

                        <p>
                            Large university master planning project.
                        </p>

                        <span>Know More ↗</span>

                    </div>

                </a>



                <!-- CARD 5 -->

                <a href="#" class="related-card"
                   data-project="farmhouse">

                    <img src="https://picsum.photos/seed/farmhouse1/500/400" alt="">

                    <div class="related-content">

                        <h3>Farm House</h3>

                        <p>
                            Premium farmhouse amidst nature.
                        </p>

                        <span>Know More ↗</span>

                    </div>

                </a>



                <!-- CARD 6 -->

                <a href="#" class="related-card"
                   data-project="grouphousing">

                    <img src="https://picsum.photos/seed/grouphousing1/500/400" alt="">

                    <div class="related-content">

                        <h3>Group Housing</h3>

                        <p>
                            High-density residential development.
                        </p>

                        <span>Know More ↗</span>

                    </div>

                </a>



                <!-- CARD 7 -->

                <a href="#" class="related-card"
                   data-project="interior">


                    <img src="https://picsum.photos/seed/grouphousing1/500/400" alt="">

                    <div class="related-content">

                        <h3>Interior</h3>

                        <p>
                            Elegant interior architecture project.
                        </p>

                        <span>Know More ↗</span>

                    </div>

                </a>



            </div>

        </div>



        <!-- Related Slider Navigation -->

        <div class="related-nav">

            <button id="relatedPrevBtn">

                Previous

            </button>

            <div id="relatedDots"></div>

            <button id="relatedNextBtn">

                Next

            </button>

        </div>

    </div>

</section>


<footer>
<?php include 'includes/footer.php'; ?>
</footer>


<button id="backToTop" aria-label="Back To Top">
    <svg xmlns="http://www.w3.org/2000/svg"
         width="22"
         height="22"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         stroke-width="2">
        <path d="M12 19V5"/>
        <path d="M5 12l7-7 7 7"/>
    </svg>
</button>

<script src="assets/js/project.js"></script>
</body>
</html>