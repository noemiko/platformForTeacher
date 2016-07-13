<?php 
require_once('connect.php');


$_POST = json_decode(file_get_contents('php://input'), true);

$dateActual = date('Y-m-d H:i:s');
$fileName=$_POST['fileName'];
$groupLecturerSubjectID=$_POST['idGrupSubjectLecturer'];

$sql = "INSERT INTO `materialy_dla_studentow` 
		(`data_wprowadzenia`,
		 `nazwa_materialu`, 
		 `idGrupy_wykladowca_przedmioty`) 
		VALUES ('$dateActual', 
				'$fileName', 
				'$groupLecturerSubjectID')";

$wynik_wyslij = mysqli_query($db, $sql);
echo $wynik_wyslij;

?>