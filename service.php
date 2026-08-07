<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/header.css">
    <link rel="stylesheet" href="assets/css/service.css">
    <link rel="stylesheet" href="assets/css/footer.css">

</head>

<body>
<?php include 'includes/header.php'; ?>

<!-- ================= MY SERVICES ================= -->

<section id="my_services">

    <!-- Hero Slider -->
    <div class="ms-slider">

        <div class="ms-slides">

            <img src="https://source.unsplash.com/1600x900/?modern,architecture&sig=1" class="ms-slide active" alt="">
            <img src="https://source.unsplash.com/1600x900/?architecture,building&sig=2" class="ms-slide" alt="">
            <img src="https://source.unsplash.com/1600x900/?architecture,design&sig=3" class="ms-slide" alt="">

        </div>

    </div>

    <!-- Navigation BELOW the slider -->
    <div class="ms-slider-nav">

        <button id="msPrevBtn"></button>

        <div id="msDots"></div>

        <button id="msNextBtn"></button>

    </div>


    <!-- Service Information -->

    <div class="ms-content">

        <h2 id="msTitle">
            ARCHITECTURAL DESIGN
        </h2>

        <p id="msDescription">

            We craft architectural designs that balance form, function, and context —
            creating spaces that respond to the needs of the people who use them.

        </p>

    </div>


    <!-- ===========================================
         OUR SERVICES
    =========================================== -->

    <div class="my_services_related">

        <div class="section-heading">

            <h2>OUR SERVICES</h2>

            <span></span>

        </div>


        <div class="my_services_slider">


            <div id="serviceTrack" class="my_services_track">



                <!-- CARD 1 -->

                <a href="#" class="service-card active-service"
                   data-service="architecturaldesign">

                    <img src="https://source.unsplash.com/500x400/?modern,architecture&sig=1" alt="">

                    <div class="service-content">

                        <h3>Architectural Design</h3>

                        <p>
                            Thoughtful architectural solutions rooted in context and craft.
                        </p>

                        <span>Know More ↗</span>

                    </div>

                </a>



                <!-- CARD 2 -->

                <a href="#" class="service-card"
                   data-service="landscapedesign">

                    <img src="https://source.unsplash.com/500x400/?landscape,garden&sig=4" alt="">

                    <div class="service-content">

                        <h3>Landscape Design</h3>

                        <p>
                            Outdoor spaces designed to connect people with nature.
                        </p>

                        <span>Know More ↗</span>

                    </div>

                </a>

             <!-- CARD 5 -->

                <a href="#" class="service-card"
                   data-service="interiordesign">

                    <img src="https://source.unsplash.com/500x400/?interior,design&sig=13" alt="">

                    <div class="service-content">

                        <h3>Interior</h3>

                        <p>
                            Interiors shaped by material, light, and everyday comfort.
                        </p>

                        <span>Know More ↗</span>

                    </div>

                </a>


                <!-- CARD 3 -->

                <a href="#" class="service-card"
                   data-service="urbandesign">

                    <img src="https://source.unsplash.com/500x400/?urban,city&sig=7" alt="">

                    <div class="service-content">

                        <h3>Urban Design</h3>

                        <p>
                            Shaping public spaces and city districts for everyday life.
                        </p>

                        <span>Know More ↗</span>

                    </div>

                </a>



                <!-- CARD 4 -->

                <a href="#" class="service-card"
                   data-service="sustainablefuture">

                    <img src="https://source.unsplash.com/500x400/?sustainable,green,architecture&sig=10" alt="">

                    <div class="service-content">

                        <h3>Towards a Sustainable Future!</h3>

                        <p>
                            Climate-responsive design practices for a better tomorrow.
                        </p>

                        <span>Know More ↗</span>

                    </div>

                </a>



               


            </div>

        </div>



        <!-- Services Slider Navigation -->

        <div class="my_services_nav">

            <button id="servicePrevBtn">

                Previous

            </button>

            <div id="serviceDots"></div>

            <button id="serviceNextBtn">

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

<script src="assets/js/service.js"></script>
</body>
</html>