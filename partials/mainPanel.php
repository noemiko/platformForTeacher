<?php
session_start();
if(!isset($_SESSION['ID_user'])) {
	header('Location: ../index.php');
}
?>
<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Strona dla wykładowcy</title>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>
	<script src="../js/app.js"></script>
	<script src="../js/menu/menuController.js"></script>

    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
    <link href="../css/dashboard.css" rel="stylesheet">

  </head>
  <body ng-app="myApp">
		<nav class="navbar navbar-inverse navbar-fixed-top">
		  <div class="container-fluid">
			<div style=" height:80px"  class="navbar-header">
			  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			  </button>
			  
			</div>
			<div id="navbar" class="navbar-collapse collapse">
			  <ul class="nav navbar-nav navbar-right">
				<li><a id='changePass' href="#">Zmiana hasła</a></li>
				<li><a  href="../php/logOut.php">Wyloguj</a></li>
			  </ul>
			</div>
		  </div>
		</nav>

		<div class="container-fluid">

		  <div class="row">
		  
				<div class="sidebar" style="top:100px;width:250px">
				
				<div ng-include="'menu.html'">
					
				</div>
					
			</div>

			<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main ">
			<!--Zawartość strony -->
		
			  <div class="jumbotron" >
						<ul class="nav nav-tabs" id="AllTopTab">
						  <li class="topTab active" data-id="Pytania"><a  data-toggle="tab">Zadawanie Pytań</a></li>
						  <li class="topTab" data-id="Historia"><a  data-toggle="tab">Punkty studentów</a></li>
						  <li class="topTab" data-id="Plik"><a  data-toggle="tab">Wysłanie pliku</a></li>
						  <li class="topTab" data-id="OdpowiedziOtwarte"><a  data-toggle="tab">Sprawdzanie pytań otwartych</a></li>
						</ul>
						<div id="content_all">
							  <h1 id="content-header"></h1>
							  <p id="content"></p>
						</div>
				</div>
			  
			  </div>
			</div>
		  </div>
		</div>
  </body>
</html>
