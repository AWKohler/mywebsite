<?php
// Set the content type to JSON
header('Content-Type: application/json');

// 1. Include your database connection
include 'connect.php';

// 2. Get the data sent from the JavaScript fetch()
// php://input reads the raw JSON data sent from the body
$data = json_decode(file_get_contents('php://input'), true);

// 3. Assign variables from the data
$name = $data['name'];
$email = $data['email'];
$phone = $data['phone'];
$location = $data['location'];

// 4. Check for duplicates (email OR phone)
// We use prepared statements to prevent SQL injection
$stmt = $conn->prepare("SELECT id FROM signups WHERE email = ? OR phone = ?");
$stmt->bind_param("ss", $email, $phone);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // 5. Found a duplicate - send an error message back to JavaScript
    echo json_encode(['success' => false, 'message' => 'This email or phone number is already registered.']);
} else {
    // 6. No duplicate - insert the new user
    $stmt_insert = $conn->prepare("INSERT INTO signups (full_name, email, phone, location) VALUES (?, ?, ?, ?)");
    $stmt_insert->bind_param("ssss", $name, $email, $phone, $location);
    
    if ($stmt_insert->execute()) {
        // 7. Success - send a success message back
        echo json_encode(['success' => true, 'message' => 'Success! Your information has been saved. We\'ll contact you soon!']);
    } else {
        // 8. Failed to insert - send a generic error
        echo json_encode(['success' => false, 'message' => 'Error: Could not save your information.']);
    }
    $stmt_insert->close();
}

// 9. Close all connections
$stmt->close();
$conn->close();
?>