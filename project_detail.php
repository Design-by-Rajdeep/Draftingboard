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

    </div>

    <!-- Buttons over image -->
    <button id="pdPrevBtn" class="pd-arrow">&#10094;</button>
    <button id="pdNextBtn" class="pd-arrow">&#10095;</button>

</div>

<!-- Dots stay below -->
<div class="pd-slider-nav">
    <div id="pdDots"></div>
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

<!-- <div class="pd-map">
<div class="Concept_image">
    <h4>Concept Image</h4>

    <img
        id="pdMap"
        class="pd-concept-img"
        src=""
        alt="Concept Image"
        loading="lazy">
</div>
</div> -->

<!-- Concept Image -->
<div class="pd-map">
    <div class="Concept_image">
        <h4>Concept Image</h4>

       <img
    id="pdMap"
    class="pd-concept-img"
    src=""
    alt="Concept Image">
    </div>
</div>



   <div class="related-projects">

    <div class="section-heading">
        <h2>RELATED PROJECTS</h2>
        <span></span>
    </div>

    <div class="related-slider">

        <div id="relatedTrack" class="related-track">

            <!-- CARD 1 - VILLA -->

            <a href="#" class="related-card active-project"
               data-project="villa">

                <img src="assets/images/featured_project/villa/00_villa_cover.jpg"
                     alt="Villa">

                <div class="related-content">
                    <h3>Villa</h3>

                    <p>
                        Modern living, rooted in community.
                    </p>

                    <span>Know More ↗</span>
                </div>

            </a>


            <!-- CARD 2 - COMMERCIAL -->

            <a href="#" class="related-card"
               data-project="commercial">

                <img src="assets/images/featured_project/commercial/00_commercial_cover.jpg"
                     alt="Commercial Building">

                <div class="related-content">
                    <h3>Commercial Building</h3>

                    <p>
                        Reimagining the urban workplace.
                    </p>

                    <span>Know More ↗</span>
                </div>

            </a>


            <!-- CARD 3 - SCHOOL -->

            <a href="#" class="related-card"
               data-project="school">

                <img src="assets/images/featured_project/school/00_school_cover.jpg"
                     alt="Primary School">

                <div class="related-content">
                    <h3>Primary School</h3>

                    <p>
                        Learning beyond the classroom.
                    </p>

                    <span>Know More ↗</span>
                </div>

            </a>


            <!-- CARD 4 - FARMHOUSE -->

            <a href="#" class="related-card"
               data-project="farmhouse">

                <img src="assets/images/featured_project/farmhouse/00_farmhouse_cover.jpg"
                     alt="Farmhouse">

                <div class="related-content">
                    <h3>Farmhouse</h3>

                    <p>
                        A countryside retreat.
                    </p>

                    <span>Know More ↗</span>
                </div>

            </a>


            <!-- CARD 5 - GROUP HOUSING -->

            <a href="#" class="related-card"
               data-project="group_housing">

                <img src="assets/images/featured_project/group_housing/00_group_housing_cover.jpg"
                     alt="Group Housing">

                <div class="related-content">
                    <h3>Group Housing</h3>

                    <p>
                        Reviving community living.
                    </p>

                    <span>Know More ↗</span>
                </div>

            </a>


            <!-- CARD 6 - URBAN DESIGN -->

            <a href="#" class="related-card"
               data-project="urban_design">

                <img src="assets/images/featured_project/urban_design/00_ud_cover.jpg"
                     alt="Urban Design">

                <div class="related-content">
                    <h3>Urban Design</h3>

                    <p>
                        Reimagining the urban marketplace.
                    </p>

                    <span>Know More ↗</span>
                </div>

            </a>


            <!-- CARD 7 - BHOWALI RESORT -->

            <a href="#" class="related-card"
               data-project="bhowali">

                <img src="assets/images/featured_project/bhowali/00_bhowali_cover.jpg"
                     alt="Bhowali Resort">

                <div class="related-content">
                    <h3>Bhowali Resort</h3>

                    <p>
                        Designing around the view.
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
<script src="assets/js/project.js?v=3"></script>
<!-- <script src="assets/js/project.js"></script> -->
</body>
</html>