<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Services - DraftingBoard</title>
    <!-- Core layout stylesheets -->
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/header.css">
    <link rel="stylesheet" href="assets/css/footer.css">
    <!-- Page-specific stylesheet -->
    <link rel="stylesheet" href="assets/css/about.css">
</head>
<body>
<script src="assets/js/service.js"></script>
<?php include 'includes/header.php'; ?>


  <!-- 1. Full-Width Hero Section -->
<section class="dynamic-hero" id="project-hero" style="background-image: url('assets/images/Commercial_Cover.png');">
  <div class="hero-overlay"></div>
</section>

<!-- 2. Dynamic Content Area (Title, Paragraph, Map) -->
<section class="dynamic-content-section">
  <div class="content-container">
    
   <section class="founder-section">

    <div class="bg-circle circle1"></div>
    <div class="bg-circle circle2"></div>

    <div class="founder-grid">

        <div class="founder-image reveal">

            <img src="images/founder.jpg" alt="R.D. Sen">

        </div>

        <div class="founder-content reveal">

            <span class="section-title">
                Founder
            </span>

            <h2>
                R.D. Sen
            </h2>

            <h4>
                Architect • Designer • Visionary
            </h4>

            <div class="line"></div>

            <p>

                I believe architecture should create experiences rather than
                simply occupy land. Every project begins by understanding
                how people interact with space, light, nature, and one
                another.

            </p>

            <p>

                My approach combines timeless aesthetics with practical
                functionality, resulting in buildings that remain relevant,
                efficient, and inspiring for generations.

            </p>

            <a href="contact.html" class="btn-outline">

                Let's Talk

            </a>

        </div>

    </div>

</section>



<section class="vision-section">

    <span class="section-title reveal">

        My Vision

    </span>

    <h2 class="reveal">

        Designing spaces that
        improve everyday life.

    </h2>

    <p class="reveal">

        Great architecture should make life simpler,
        healthier and more meaningful. My vision is to
        create timeless buildings where natural light,
        sustainability and thoughtful planning come
        together to enrich everyday living.

    </p>

</section>

  

  </div>
</section>



<!-- GLOBAL SITE FOOTER -->
<?php include 'includes/footer.php'; ?>

<!-- Back to Top System Button -->
<button id="backToTop" aria-label="Back To Top">
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 19V5"/>
        <path d="M5 12l7-7 7 7"/>
    </svg>
</button>

<script src="assets/js/script.js"></script>
</body>
</html>