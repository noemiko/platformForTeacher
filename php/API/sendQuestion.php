<?php 
require_once('connect.php');

$_POST = json_decode(file_get_contents('php://input'), true);

$dateActual = date('Y-m-d H:i:s');
$title = $_POST['title'];
$question = $_POST['question'];
$isOpen = $_POST['type'];
$timeForAnswer = $_POST['timeForAnswer'];
$sharingTime = $_POST['sharingTime'];
if ($sharingTime =='Teraz')
{
	$sharingTime=$dateActual;
	
}
$numberOfPoints=$_POST['numberOfPoints'];
$rightAnswer=$_POST['rightAnswer'];
$B=$_POST['B'];
$C=$_POST['C'];
$D=$_POST['D'];
$group=$_POST['group'];

$deadLineForAnswer = date('Y-m-d H:i',strtotime('+'.$timeForAnswer.' minutes',strtotime($dateActual)));
$sql = "INSERT INTO `pytania` 
(`Tresc`, 
`Tytul`,
 `Poprawna`,
 `OdpowiedzB`,
 `OdpowiedzC`,
 `OdpowiedzD`,
 `Czy_otwarte`,
 `Data_wyslania`,
 `Termin_oddania`,
 `Data_udostepnienia`,
 `idGrupy_wykladowca_przedmioty`,
 `Punkty`)
 VALUES ('$question',
		'$title',
		'$rightAnswer',
		'$B',
		'$C',
		'$D',
		'$isOpen',
		'$dateActual',
		'$deadLineForAnswer', 
		'$sharingTime', 
		'$group',
		'$numberOfPoints')";
$wynik_wyslij = mysqli_query($db, $sql);
echo $wynik_wyslij;



 
?>