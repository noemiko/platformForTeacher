<?php 
require_once('connect.php');
 session_start();

$_POST = json_decode(file_get_contents('php://input'), true);

$idLecturer=$_SESSION['ID_user'];
$idGroup=$_POST['id'];
$typeOfSubject=$_POST['typeOfSubject'];
$subject=$_POST['subject'];

$dateActual = date('Y-m-d H:i:s');
$sql = "SELECT 
		p.idPytania,
		count(o.Punkty)
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
		and g.idGrupy='$idGroup'
		and pr.nazwa='$subject'
		and wp.rodzaj='$typeOfSubject'
        and o.Punkty ='' OR o.Punkty=NULL
		
        group by p.idPytania";

$result = mysqli_query($db, $sql);

$resultInArray = array();
 
while ($row = mysqli_fetch_row($result)) 
{
  $resultInArray[] = $row;
}
 
echo json_encode($resultInArray);
 
 
?>