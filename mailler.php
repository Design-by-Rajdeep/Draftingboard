<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// ----------------------
// Honeypot Spam Check
// ----------------------
if (!empty($_POST['website'])) {
    exit();
}

// ----------------------
// Only Allow POST
// ----------------------
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    header("Location: contact.html");
    exit();
}

// ----------------------
// Sanitize Input
// ----------------------
$name = htmlspecialchars(trim($_POST['name'] ?? ''));
$email = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$mobile = htmlspecialchars(trim($_POST['mobile'] ?? ''));
$message = htmlspecialchars(trim($_POST['message'] ?? ''));

// ----------------------
// Validate
// ----------------------
if (
    empty($name) ||
    empty($email) ||
    empty($mobile) ||
    empty($message)
) {
    die("Please fill in all required fields.");
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Invalid email address.");
}

// ----------------------
// PHPMailer
// ----------------------
$mail = new PHPMailer(true);

try {

    // SMTP Configuration
    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com';
    $mail->SMTPAuth   = true;

    $mail->Username   = 'contact@draftingboard.com';
    $mail->Password   = 'YOUR_HOSTINGER_EMAIL_PASSWORD';

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Sender
    $mail->setFrom(
        'contact@draftingboard.com',
        'Drafting Board Website'
    );

    // Recipient
    $mail->addAddress('rdsen74@gmail.com');

    // Reply directly to visitor
    $mail->addReplyTo($email, $name);

    // Email Content
    $mail->isHTML(true);

    $mail->Subject = "New Contact Form Submission";

    $mail->Body = "

    <div style='font-family:Arial,sans-serif;max-width:650px;margin:auto;border:1px solid #ddd;padding:30px;'>

        <h2 style='margin-top:0;color:#222;'>
            New Contact Form Submission
        </h2>

        <table cellpadding='10' cellspacing='0' width='100%' style='border-collapse:collapse;'>

            <tr>
                <td><strong>Name</strong></td>
                <td>{$name}</td>
            </tr>

            <tr>
                <td><strong>Email</strong></td>
                <td>{$email}</td>
            </tr>

            <tr>
                <td><strong>Mobile</strong></td>
                <td>{$mobile}</td>
            </tr>

            <tr>
                <td><strong>Message</strong></td>
                <td>" . nl2br($message) . "</td>
            </tr>

            <tr>
                <td><strong>Date</strong></td>
                <td>" . date("d M Y h:i A") . "</td>
            </tr>

            <tr>
                <td><strong>IP Address</strong></td>
                <td>" . $_SERVER['REMOTE_ADDR'] . "</td>
            </tr>

        </table>

    </div>

    ";

    $mail->AltBody = "
New Contact Form Submission

Name: $name

Email: $email

Mobile: $mobile

Message:
$message

Date: " . date("d M Y h:i A");

    $mail->send();

    echo "
    <!DOCTYPE html>
    <html>
    <head>
        <title>Success</title>
        <meta http-equiv='refresh' content='3;url=contact.html'>
        <style>
            body{
                font-family:Arial;
                display:flex;
                justify-content:center;
                align-items:center;
                height:100vh;
                background:#f4f4f4;
            }
            .box{
                background:#fff;
                padding:40px;
                border-radius:12px;
                box-shadow:0 10px 25px rgba(0,0,0,.1);
                text-align:center;
            }
            h2{
                color:#16a34a;
            }
        </style>
    </head>
    <body>

        <div class='box'>
            <h2>✓ Message Sent Successfully</h2>
            <p>Thank you for contacting us.</p>
            <p>Redirecting...</p>
        </div>

    </body>
    </html>
    ";

} catch (Exception $e) {

    echo "
    <h2>Message could not be sent.</h2>
    <p>{$mail->ErrorInfo}</p>
    ";

}
?>