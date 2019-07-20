<?php
$to      = 'christopherrbergstrom@gmail.com';
$subject = 'Message from ' . $_POST[name];
$message = $_POST["message"];
$headers = array(
    'From' => $_POST["email"],
    'Reply-To' => $_POST[email],
    // 'X-Mailer' => 'PHP/' . phpversion()
);
$message = wordwrap($message, 70, "\r\n");
mail($to, $subject, $message, $headers);
echo "email sent";
// header("LOCATION: http://christopherbergstrom.com/test.php");
?>