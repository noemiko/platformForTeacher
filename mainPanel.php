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
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.1/angular.min.js"></script>
	<script src="https://code.angularjs.org/1.5.1/angular-route.min.js"></script>
	<script src="js/app.js"></script>
	<script src="js/menu/services.js"></script>

	<script src="js/menu/menuController.js"></script>

    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
    <link href="css/dashboard.css" rel="stylesheet">

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
				
				<div ng-include="'partials/menu.html'">
					
				</div>
					
			</div>

			<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main ">
		
			  <div class="jumbotron" >
				   <div ng-view="">

					</div>
						
				</div>
			  
			  </div>
			</div>
		  </div>
		</div>
  </body>
</html>
