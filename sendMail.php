<?php
if (isset($_POST['name'], $_POST['email'], $_POST['phone'], $_POST['company'], $_POST['quantity'], $_POST['message'], $_POST['products'])) {
    $to = "info@sunrisegold-tr.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $message = "Name: " . $_POST['name'] . "\n" .
        "Email: " . $_POST['email'] . "\n" .
        "Phone: " . $_POST['phone'] . "\n" .
        "Company: " . $_POST['company'] . "\n" .
        "Quantity: " . $_POST['quantity'] . "\n" .
        "Message: " . $_POST['message'] . "\n" .
        "Products: " . $_POST['products'];
    $headers = "From: no-reply@yourdomain.com" . "\r\n" .
        "Reply-To: " . $_POST['email'];

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false]);
    }
} else {
    echo json_encode(["success" => false]);
}
