<?php
$host = "localhost";
$user = "root";
$password = "";
$dbname = "contact_form";

$db = mysqli_connect($host, $user, $password, $dbname);


if ($db->connect_error) {
    echo "Koneksi Gagal";
    die("Error!");
}
