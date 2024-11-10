<?php

header("Access-Control-Allow-Origin: http://localhost:3000");

require "../../CS/Cs.php";

$LetsGo=mysqli_query($conn,"SELECT * FROM watch LIMIT 20 OFFSET $_GET[VideosRightNow] ");
$VideosRightNow=$_GET['VideosRightNow'];
$CheckHowMany=mysqli_num_rows($LetsGo);

$data=array();
if ($LetsGo->num_rows>0){


while ($Go=mysqli_fetch_array($LetsGo,MYSQLI_ASSOC) ) {


if (file_exists("../".$Go['VideoPic'])){
	$Pic=$Go['VideoPic'];
	}else if (file_exists("../videos/NoImage.png")){
	$Pic="./videos/NoImage.png";
	}else{
	$Pic="noPicPaths";
	}


if (file_exists("../".$Go['VideoGif'])){
$Gif=$Go['VideoGif'];
}else if (file_exists("../videos/NoImage.png")){
$Gif="./videos/NoImage.png";
}else{
$Gif="noGifPaths";
}


$data[]=array(
	"id"=>$Go['id'],
	"VideoPath"=>$Go['VideoPath'],
	"VideoGif"=>$Gif,
	"VideoPic"=>$Pic,
	"VideoTitle"=>$Go['VideoTitle'],
	"VideoDescription"=>$Go['VideoDescription'],
	"Views"=>$Go['Views'],
	"Likes"=>$Go['Likes'],
	"Dislikes"=>$Go['Dislikes'],
	"UploadDate"=>$Go['UploadDate'],
	"Uploader"=>$Go['Uploader'],
);



}
echo json_encode($data);
}
?>