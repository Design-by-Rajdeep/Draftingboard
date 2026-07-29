<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/header.css">
    <link rel="stylesheet" href="assets/css/about.css">
    <link rel="stylesheet" href="assets/css/footer.css">

</head>

<body>
<?php include 'includes/header.php'; ?>

<!-- ================= ABOUT ================= -->

<section id="about_section">

    <div class="about-grid">

        <!-- ===========================================
             ABOUT CONTENT
        =========================================== -->

        <div class="about-content">

            <span class="about-eyebrow">About</span>

            <h1 class="about-name">Sachin Goyal</h1>

            <p class="about-role">Architect &nbsp;|&nbsp; Urbanist &nbsp;|&nbsp; Sustainability Consultant</p>

            <!-- <span class="about-badge">Independent Practice · One Architect, Every Project</span> -->

            <div class="about-story">

                <h3>Story of Drafting Board &nbsp;—</h3>

                <p>
                    "Drafting Board" is a name that is both intriguing and playful.
                    Architects and planners have historically spent much of their time at
                    the drafting board, whether it's the traditional physical board or
                    modern digital platforms like CAD and Rhino. Regardless of the medium,
                    the essence remains the same: ideas are translated onto a flat surface,
                    sketched out with lines and curves. It's a creative space where concepts
                    take form, evolving from mere thoughts into tangible designs.
                </p>

                <!-- <p>
                    I run Drafting Board as a solo practice by choice. Every project that
                    comes through this studio is designed, developed, and detailed by me
                    directly — there's no hand-off between a "senior architect" and a team
                    of juniors along the way. From the first sketch to the final drawing set,
                    you're working with the same person throughout, which means fewer
                    miscommunications, more accountability, and a design that stays true to
                    the idea it started as.
                </p> -->

            </div>

        </div>


        <!-- ===========================================
             PHOTO
        =========================================== -->

        <div class="about-image-wrap">

            <img
                src="assets/images/Sachin Goyal.jpg"
                alt="Sachin Goyal, Architect at Drafting Board"
                class="about-photo"
                loading="lazy">

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

<script src="assets/js/about.js"></script>
</body>
</html>