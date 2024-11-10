<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require "../CS/Cs.php";


  $say = htmlspecialchars($_POST['say']);
  
 
  $to  = htmlspecialchars($_POST['to']);
  

  echo  $say, ' ', $to;
  
?>