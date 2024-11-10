<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
/*
session_save_path('../../phpsessions');
ini_set('session.gc_maxlifetime',1400);
ini_set('session.gc_probability',2);
ini_set('session.gc_divisor',100);
ini_set("session. cookie_httponly", True);*/
session_start();

session_regenerate_id(true);
require_once '../vendor/autoload.php';

// Get $id_token via HTTPS POST.
$CLIENT_ID="178162283929-6mlrvp7umfsalqsbqe0vjr7dk56937k9.apps.googleusercontent.com";
$id_token=urldecode($_POST['idtoken']);
$client = new Google_Client(['client_id' => $CLIENT_ID]);  // Specify the CLIENT_ID of the app that accesses the backend
$payload = $client->verifyIdToken($id_token);
if ($payload) {
  $userid = $payload['sub'];

  $_SESSION['auth']='yes';
  $_SESSION['name']=$payload['name'];
  $_SESSION['email']=$payload['email'];
  $_SESSION['email_verified']=$payload['email_verified'];
  $_SESSION['locale']=$payload['locale'];
  $_SESSION['picture']=$payload['picture'];
 

  echo "<div id='id'>".$payload['sub']."</div>";
 echo "<div id='name'>".$payload['name']."</div>";
 echo "<div id='email'>".$payload['email']."</div>";
 echo "<div id='email_verified'>".$payload['email_verified']."</div>";
 echo "<div id='locale'>".$payload['locale']."</div>";
 echo "<div id='picture'>".$payload['picture']."</div>";
} else {
  echo "invalid";

  $_SESSION['auth']='no';
}
?>