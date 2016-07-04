<?php 
header('Content-type: application/json');

require_once('connect.php');
 session_start();
 $idLecturer=$_SESSION['ID_user'];
$sql = "SELECT
						p.Nazwa nazwa_przedmiotu, 
						g.Nazwa nazwa_grupy, 
						wp.rodzaj rodzaj_przedmiotu, 
						k.nazwa nazwa_kierunku,
						t.Nazwa nazwa_trybu,
						g.rok_akademicki,
						g.idGrupy,
						wp.idWykladowcy_przedmioty,
						gwp.idGrupy_wykladowca_przedmioty
						FROM grupy_wykladowca_przedmioty gwp 
						join grupy g on gwp.Grupy_idGrupy=g.idGrupy 
						join Wykladowcy_przedmioty wp on gwp.idWykladowcy_przedmioty=wp.idWykladowcy_przedmioty 
						join wykladowcy w on wp.Wykladowcy_idWykladowcy=w.idWykladowcy 
						join przedmioty p on p.idPrzedmiotu=wp.Przedmioty_idPrzedmiotu 
						join kierunki k on k.idKierunku=g.Kierunki_idKierunku 
						join tryby t on t.idTrybu=g.Tryby_idTrybu 
						where w.idWykladowcy='$idLecturer' ";  

$result = mysqli_query($db, $sql);

$resultInArray = array();
 
while ($row = mysqli_fetch_row($result)) 
{
  $resultInArray[] = $row;
}
 
echo json_encode($resultInArray);
 
?>
