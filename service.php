<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <link rel="stylesheet" href="assets/css/style.css">
        <link rel="stylesheet" href="assets/css/service.css">
    <link rel="stylesheet" href="assets/css/header.css">
    <link rel="stylesheet" href="assets/css/home.css">
    <link rel="stylesheet" href="assets/css/footer.css">

</head>

<body>
<?php include 'includes/header.php'; ?>


 <!-- ==========================================
     PROVID SERVICES
========================================== -->

<section class="provid_services">
<div class="service_section_heading">
    <h2>SERVICES</h2>
    <span></span>
</div>
    <!-- Architectural Design -->
    <div id="architectural-design" class="service-card architectural-design">
        <div class="service-image">
            <img src="assets/images/services/Architectural Design.png" alt="Architectural Design">
        </div>

        <h3>Architectural Design</h3>
    </div>

    <!-- Landscape Design -->
    <div id="landscape-design" class="service-card landscape-design">
        <div class="service-image">
            <img src="assets/images/services/Landscape Design.png" alt="Landscape Design">
        </div>

        <h3>Landscape Design</h3>
    </div>

    <!-- Urban Design -->
    <div id="urban-design" class="service-card urban-design">
        <div class="service-image">
            <img src="assets/images/services/Urban Design.png" alt="Urban Design">
        </div>

        <h3>Urban Design</h3>
    </div>

    <!-- Towards a Sustainable Future -->
    <div id="sustainable-future" class="service-card sustainable-future">
        <div class="service-image">
            <img src="assets/images/services/Sustainable Future.png" alt="Towards a Sustainable Future">
        </div>

        <h3>Towards a Sustainable Future</h3>
    </div>

    

</section>



  <Footer>
<?php include 'includes/footer.php'; ?></Footer>
</section>



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

<script src="assets/js/script.js"></script>
</body>
</html>