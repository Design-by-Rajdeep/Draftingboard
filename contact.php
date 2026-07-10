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
    <link rel="stylesheet" href="assets/css/contact.css">
</head>
<body>
<script src="assets/js/service.js"></script>
<?php include 'includes/header.php'; ?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>

<section class="contact-section">

    <div class="contact-container">

        <div class="contact-header">
            <span>GET IN TOUCH</span>

            <h1>Let's Discuss Your Project</h1>

            <p>
                Have a project in mind or simply want to say hello?
                Fill out the form below and we'll get back to you as soon as possible.
            </p>
        </div>

        <form action="mailler.php" method="POST">
            <!-- Honeypot (Anti Spam) -->
            <input type="text" name="website" style="display:none">

            <div class="row">

                <div class="input-box">
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        required>
                </div>

                <div class="input-box">
                    <label>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        required>
                </div>

            </div>

            <div class="input-box">

                <label>Mobile Number</label>

                <input
                    type="tel"
                    name="mobile"
                    placeholder="+91 9876543210"
                    required>

            </div>

            <div class="input-box">

                <label>Your Message</label>

                <textarea
                    name="message"
                    rows="7"
                    placeholder="Tell us about your project..."
                    required></textarea>

            </div>

            <button type="submit">
                Send Message
            </button>

        </form>

    </div>

</section>

</body>
</html>

<!-- GLOBAL SITE FOOTER -->
<?php include 'includes/footer.php'; ?>



<script src="assets/js/script.js"></script>
</body>
</html>