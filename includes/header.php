
<?php
$currentPage = basename($_SERVER['PHP_SELF']);
?>
<header class="site-header">
  <div class="navbar">
    <!-- Left Side Logo -->
    <a href="index.php" class="logo">DraftingBoard</a>

    <!-- Mobile Hamburger Toggle Controls (Must be directly inside .navbar) -->
    <input type="checkbox" id="menu-toggle">
    <label for="menu-toggle" class="menu-icon">
      <span></span>
      <span></span>
      <span></span>
    </label>

    <!-- Center Menu Links -->
    <!-- <ul class="nav-links">
      <li><a href="index.php">Portfolio</a></li>
      <li><a href="project.php">Services</a></li>
      <li><a href="service.php">Services</a></li>
      <li><a href="about.php">About</a></li>
      <li><a href="contact.php">Contact</a></li>
      <li class="mobile-cta-li"><a href="contact.php" class="nav-cta-btn">Connect Me</a></li>
    </ul> -->


    <ul class="nav-links">
    <li>
        <a href="index.php" class="<?= $currentPage == 'index.php' ? 'active' : '' ?>">
            Home
        </a>
    </li>

    <li>
    <a href="<?= $currentPage == 'index.php'
        ? '#f-projects_section'
        : 'index.php#f-projects_section'; ?>"
       class="<?= $currentPage == 'index.php' ? 'inactive' : '' ?>">
        Projects
    </a>
</li>

    <li>
       <a href="<?= $currentPage == 'index.php'
        ? '#services_section'
        : 'index.php#services_section'; ?>"
       class="<?= $currentPage == 'index.php' ? 'inactive' : '' ?>">
        Services
    </a>
    </li>

    <li>
        <a href="about.php" class="<?= $currentPage == 'about.php' ? 'active' : '' ?>">
            About
        </a>
    </li>

    <li>
        <a href="contact.php" class="<?= $currentPage == 'contact.php' ? 'active' : '' ?>">
            Contact
        </a>
    </li>

    <li class="mobile-cta-li">
        <a href="contact.php" class="nav-cta-btn">Connect Me</a>
    </li>
</ul>





    <!-- Right Side Desktop CTA Button -->
    <a href="contact.php" class="nav-cta-btn desktop-cta">Connect Me</a>
  </div>
</header>