<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST,GET');
header('Access-Control-Allow-Credentials:true'); 
header("Content-Type: application/json;charset=utf-8"); 


$item = array
	(
		array("sun" => "29.8","carbonD" => "10.5","air1Degree" => "30.5","air1Percent" => "76","air2Degree" => "29.8","air2Percent" => "70","air3Degree" => "30.9","air3Percent" => "78","air4Degree" => "28.4","air4Percent" => "67","soil1Degree" => "29.5","soil1Percent" => "77","soil2Degree" => "30.4","soil2Percent" => "79","other11" => "w","other12" => "g","other13" => "g","other14" => "q","other21" => "q","other22" => "w","other31" => "w","other32" => "w","other41" => "q")
	);

if($_SERVER["REQUEST_METHOD"] == "GET"){
	refresh();
}

function refresh(){
	global $item;

	foreach ($item as $value){
		$result = '{"success":true,
					"msg":"' . $value["sun"] . ',' . $value["carbonD"] . ',' . $value["air1Degree"] . ',' . $value["air1Percent"] . ',' . $value["air2Degree"] . ',' . $value["air2Percent"] . ',' . $value["air3Degree"] . ',' . $value["air3Percent"] . ',' . $value["air4Degree"] . ',' . $value["air4Percent"] . ',' . $value["soil1Degree"] . ',' . $value["soil1Percent"] . ',' . $value["soil2Degree"] . ',' . $value["soil2Percent"] . ',' . $value["other11"] . ',' . $value["other12"] . ',' . $value["other13"] . ',' . $value["other14"] . ',' . $value["other21"] . ',' . $value["other22"] . ',' . $value["other31"] . ',' . $value["other32"] . ',' . $value["other41"] . '"}';
	}
	echo $result;
}

?>