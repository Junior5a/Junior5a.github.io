<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Send the email
  $to = 'junior_duck@hotmail.co.uk';  // Update with your email address
  $subject = 'New Message from Your Website';
  $headers = "From: $name <$email>";
  $success = mail($to, $subject, $message, $headers);

  // Return success status
  if ($success) {
    echo json_encode(['success' => true]);
  } else {
    echo json_encode(['success' => false]);
  }
}
?>
