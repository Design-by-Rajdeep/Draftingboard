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
    <link rel="stylesheet" href="assets/css/service.css">
</head>
<body>

<?php include 'includes/header.php'; ?>

<!-- MAIN SERVICES VIEW AREA -->
<main class="services-section">

  <!-- 1. Full-Width Hero Section -->
<section class="dynamic-hero" id="project-hero" style="background-image: url('assets/images/Commercial_Cover.png');">
  <div class="hero-overlay"></div>
</section>

<!-- 2. Dynamic Content Area (Title, Paragraph, Map) -->
<section class="dynamic-content-section">
  <div class="content-container">
    
    <h2 class="dynamic-title" id="project-title">EXPERIENCE DISTRICTS ARE WHERE THE ORDINARY BECOMES REMARKABLE —</h2>
    
    <p class="dynamic-desc" id="project-desc">
      The Marvila Masterplan covers approximately 28 hectares between Marvila and Beato on Lisbon's riverfront. Developed by MVRDV and OODA, in collaboration with LOLA Landscape Architects and Thornton Tomasetti, the plan defines a new urban and landscape framework for one of the largest regeneration projects currently under development in the city.
    </p>

    <!-- Google Map Wrapper -->
    <div class="map-wrapper">
      <iframe 
        id="project-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12453.563820235339!2d-9.108603685957194!3d38.73177651817454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19339003666d9b%3A0x500eae2a6b3bc40!2sMarvila%2C%20Lisbon%2C%20Portugal!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s" 
        width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy">
      </iframe>
    </div>

  </div>
</section>

<!-- 3. Related Projects Carousel Section -->
<section class="related-section">
  <div class="content-container">
    <div class="section-heading">
      <h2>Other Related Projects</h2>
      <span></span>
    </div>

    <!-- Carousel Track -->
    <div id="related_project" class="carousel-track">
      
      <!-- Project Item 1 (Active by default) -->
      <div class="carousel-card active" 
           data-hero="assets/images/Commercial_Cover.png"
           data-title="EXPERIENCE DISTRICTS ARE WHERE THE ORDINARY BECOMES REMARKABLE —"
           data-desc="The Marvila Masterplan covers approximately 28 hectares between Marvila and Beato on Lisbon's riverfront. Developed by MVRDV and OODA, in collaboration with LOLA Landscape Architects and Thornton Tomasetti, the plan defines a new urban and landscape framework."
           data-map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12453.563820235339!2d-9.108603685957194!3d38.73177651817454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19339003666d9b%3A0x500eae2a6b3bc40!2sMarvila%2C%20Lisbon%2C%20Portugal!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s">
        <img src="assets/images/Commercial_Cover.png" alt="Marvila Masterplan">
        <h3>Marvila Masterplan</h3>
        <button class="carousel-cta">Explore Project ↗</button>
      </div>

      <!-- Project Item 2 -->
      <div class="carousel-card" 
           data-hero="assets/images/Bhowali_Cover.png"
           data-title="BHOWALI ECO RESORT: CONNECTING NATURE AND DESIGN —"
           data-desc="Nestled amidst the hills, the Bhowali Eco Resort balances structural precision with vernacular landscape methods. This project introduces sustainable holiday cabins designed with natural timber accents, open terraces, and premium spatial orientation facing the deep valley layout views."
           data-map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.2458428100586!2d79.51356077626081!3d29.377759575165992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0a16fc4159501%3A0x6b77cd5d5ec36318!2sBhowali%2C%20Uttarakhand!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s">
        <img src="assets/images/Bhowali_Cover.png" alt="Bhowali Project">
        <h3>Bhowali Eco Resort</h3>
        <button class="carousel-cta">Explore Project ↗</button>
      </div>

      <!-- Project Item 3 -->
      <div class="carousel-card" 
           data-hero="assets/images/hero-3.jpg"
           data-title="SILIGURI URBAN OFFICE STACK ELEMENTS —"
           data-desc="A commercial intervention designed to deliver high-performance workspace design models into tightly packed urban settings. Features smart lightwells, energy-efficient louvers, and functional fluid layouts for interior offices."
           data-map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57007.41113264426!2d88.39487404179374!3d26.74159154738596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4412351ea2e33%3A0xf6cb8447edfbdf90!2sSiliguri%2C%20West%20Bengal!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s">
        <img src="assets/images/hero-3.jpg" alt="Siliguri Project">
        <h3>Siliguri Urban Stack</h3>
        <button class="carousel-cta">Explore Project ↗</button>
      </div>

    </div>
  </div>
</section>
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