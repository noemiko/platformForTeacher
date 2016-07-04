<?php
require_once '../partials/logInForm.html';
if (isset($_SESSION['ID_user']))
{
	header('Location: ../partials/mainPanel.php');
	exit();
}
else {
	header ('Location : ../index.php');
}


