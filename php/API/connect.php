<?php
	/*Definiowanie zmiennych z danymi niezbędnymi do połączenia z bazą danych*/
	$serwer = 'localhost';
	$user = 'root';
	$pass = 'sasa';
	$db = 'mydb';
  
	
	$db = mysqli_connect($serwer, $user, $pass, $db);
 
	
	if (mysqli_connect_errno()!=0) 
	{
		echo 'Błąd';
		exit;   
	}


?>
	
 