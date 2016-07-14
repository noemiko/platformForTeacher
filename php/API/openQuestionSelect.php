<?php 
require_once('connect.php');
 session_start();

$_POST = json_decode(file_get_contents('php://input'), true);

$idLecturer=$_SESSION['ID_user'];
$id=$_POST['id'];
$typeOfSubject=$_POST['typeOfSubject'];
$subject=$_POST['subject'];

$sql = "SELECT 
		s.imie,
		s.Nazwisko,
		o.idOdpowiedzi,
		p.Tytul,
		p.Tresc, 
		p.Punkty,
		o.Punkty ,
		p.idPytania,
		o.Odpowiedz_otwarta
		FROM pytania p 
		join odpowiedzi o on o.Pytania_idPytania=p.idPytania
		join student_przynaleznosc sp on o.Student_przynaleznosc_idStudent_przynaleznosc=sp.idStudent_przynaleznosc
		join studenci s on sp.Studenci_idStudenta=s.idStudenta
		join grupy g on sp.idGrupy=g.idGrupy 
		join grupy_wykladowca_przedmioty gwp on gwp.idGrupy_wykladowca_przedmioty=p.idGrupy_wykladowca_przedmioty
		join Wykladowcy_przedmioty wp on gwp.idWykladowcy_przedmioty=wp.idWykladowcy_przedmioty 
		join wykladowcy w on wp.Wykladowcy_idWykladowcy=w.idWykladowcy 
		join przedmioty pr on pr.idPrzedmiotu=wp.Przedmioty_idPrzedmiotu 
		join kierunki k on k.idKierunku=g.Kierunki_idKierunku 
		where p.Czy_otwarte=true
		and w.idWykladowcy='$idLecturer'
		and g.idGrupy='$id'
		and pr.nazwa='$subject'
		and wp.rodzaj='$typeOfSubject'

	";
$result = mysqli_query($db, $sql);

$resultInArray = array();
 
while ($row = mysqli_fetch_row($result)) 
{
  $resultInArray[] = $row;
}
 
echo json_encode($resultInArray);
?>