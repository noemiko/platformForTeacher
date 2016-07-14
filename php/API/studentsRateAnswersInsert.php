<?php 
require_once('connect.php');
$_POST = json_decode(file_get_contents('php://input'), true);

$idAnswer=$_POST['idAnswer'];
$points=$_POST['numberOfPoints'];

$sql = "UPDATE `odpowiedzi` SET `Punkty`='$points' WHERE `idOdpowiedzi`='$idAnswer'";
$wynik_wyslij = mysqli_query($db, $sql);
echo $wynik_wyslij;
?>