<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/header.css">
    <link rel="stylesheet" href="assets/css/contact.css">
    <link rel="stylesheet" href="assets/css/footer.css">

</head>

<body>
<?php

/* ===========================================
   BASIC FORM HANDLING (server side)
   Swap the mail() block for your SMTP/mailer
   of choice once you're ready to go live.
=========================================== */

$contact_status = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['contact_submit'])) {

    $name    = trim($_POST['contact_name'] ?? '');
    $email   = trim($_POST['contact_email'] ?? '');
    $phone   = trim($_POST['contact_phone'] ?? '');
    $subject = trim($_POST['contact_subject'] ?? '');
    $message = trim($_POST['contact_message'] ?? '');

    if ($name === '' || $email === '' || $message === '') {

        $contact_status = "error";

    } else {

        $to      = "s.goyal31197@gmail.com";
        $mailSubject = "New enquiry: " . ($subject !== '' ? $subject : "Website Contact Form");
        $body    = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";
        $headers = "From: $email";

        mail($to, $mailSubject, $body, $headers);

        $contact_status = "success";

    }

}

?>

<?php include 'includes/header.php'; ?>

<!-- ================= CONTACT ================= -->

<section id="contact_section">

    <div class="contact-heading">
        <h2>GET IN TOUCH</h2>
        <span class="contact-underline"></span>
        <p class="contact-subtext">
            Have a project in mind? Tell us a little about it and we'll get back to you shortly.
        </p>
    </div>

    <div class="contact-grid">

        <!-- ===========================================
             CONTACT FORM
        =========================================== -->

        <div class="contact-form-panel">

            <?php if ($contact_status === "success"): ?>

                <div class="contact-alert contact-alert-success">
                    Thanks for reaching out — your message has been sent. We'll be in touch soon.
                </div>

            <?php elseif ($contact_status === "error"): ?>

                <div class="contact-alert contact-alert-error">
                    Please fill in your name, email, and message before sending.
                </div>

            <?php endif; ?>

            <form class="contact-form" method="POST" action="contact.php" novalidate>

                <div class="contact-field-row">

                    <div class="contact-field">
                        <label for="contact_name">Name</label>
                        <input type="text" id="contact_name" name="contact_name" placeholder="Your full name" required>
                    </div>

                    <div class="contact-field">
                        <label for="contact_email">Email</label>
                        <input type="email" id="contact_email" name="contact_email" placeholder="you@example.com" required>
                    </div>

                </div>

                <div class="contact-field-row">

                    <div class="contact-field">
                        <label for="contact_phone">Phone <span class="contact-optional">(optional)</span></label>
                        <input type="tel" id="contact_phone" name="contact_phone" placeholder="+91 00000 00000">
                    </div>

                    <div class="contact-field">
                        <label for="contact_subject">Subject</label>
                        <input type="text" id="contact_subject" name="contact_subject" placeholder="What's this about?">
                    </div>

                </div>

                <div class="contact-field">
                    <label for="contact_message">Message</label>
                    <textarea id="contact_message" name="contact_message" rows="6" placeholder="Tell us about your project..." required></textarea>
                </div>

                <button type="submit" name="contact_submit" class="contact-submit-btn">
                    Send Message <span class="contact-arrow"></span>
                </button>

            </form>

        </div>


        <!-- ===========================================
             CONTACT INFO
        =========================================== -->

        <div class="contact-info-panel">

            <div class="contact-info-item">
                <span class="contact-info-label">Studio</span>
                <p>123 Design Avenue,<br>Siliguri, West Bengal, India</p>
            </div>

            <div class="contact-info-item">
                <span class="contact-info-label">Email</span>
                <p><a href="mailto:hello@example.com">hello@example.com</a></p>
            </div>

            <div class="contact-info-item">
                <span class="contact-info-label">Phone</span>
                <p><a href="tel:+910000000000">+91 00000 00000</a></p>
            </div>

            <div class="contact-info-item">
                <span class="contact-info-label">Hours</span>
                <p>Mon – Sat, 10:00 AM – 6:30 PM</p>
            </div>

            <div class="contact-social">

                <a href="#" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                </a>

                <a href="#" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <rect x="2" y="9" width="4" height="12"/>
                        <circle cx="4" cy="4" r="2"/>
                    </svg>
                </a>

                <a href="#" aria-label="Behance">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M2 7h7"/>
                        <path d="M2 7v11h5.5a3.5 3.5 0 0 0 0-7H2"/>
                        <path d="M2 12h5"/>
                        <path d="M14 15.5a4 4 0 0 0 8 0"/>
                        <path d="M14 14a4 4 0 0 1 8 0z"/>
                        <path d="M15 8h6"/>
                    </svg>
                </a>

            </div>

        </div>

    </div>


    <!-- ===========================================
         MAP
    =========================================== -->

    <div class="contact-map-wrapper">

        <iframe
            class="contact-map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3533.9131470783122!2d77.27276207550068!3d28.629943975666073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM3JzQ3LjgiTiA3N8KwMTYnMzEuMiJF!5e1!3m2!1sen!2sin!4v1784975675444!5m2!1sen!2sin"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin">
        </iframe>

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

<script src="assets/js/contact.js"></script>
</body>
</html>