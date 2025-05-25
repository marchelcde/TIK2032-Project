<?php
include 'service/db_conf.php';
?>

<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email']?? '';
    $message = $_POST['message']?? '';


    $sql = "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)";
    $stmt = $db->prepare($sql);
    $stmt->bind_param("sss", $name, $email, $message);

    if ($stmt->execute() === FALSE) {
        echo "Terjadi kesalahan: " . $stmt->error;;
    } else {
        header("Location: template/contact.html");
    }

    $stmt->close();
    $db->close();
} else {
    echo "Invalid request method.";
    exit;
}
?>
