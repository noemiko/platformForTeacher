<?php 
session_start();
if ((!isset($_POST['email'])) || (!isset($_POST['password'])))
{
    header('Location: ../index.php');
    exit();
}
else {
	$email = $_POST['email'];
	$password = $_POST['password'];	
	$conn = new mysqli('localhost', 'root', 'sasa', 'mydb');
	if($result = $conn -> query("SELECT * FROM 
								wykladowcy 
								WHERE email='$email'
								AND Haslo='$password'")) 
	{
		$num_users = $result -> num_rows;
		if($num_users == 1) {
			$row = $result->fetch_assoc();
			$_SESSION['ID_user'] = $row['idWykladowcy'];
			header('Location: ../partials/mainPanel.php');
			
		}
		else {
			$_SESSION['blad'] = 'Nieprawidłowe dane!';
			echo $_SESSION['blad'];
				header("Refresh: 1,'../index.php'");
		}
	}
}