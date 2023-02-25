<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'src/exporters/resources/ResourcesList.php';

$requestData = new ResourcesList();
$arrayResources = $requestData->getResourcesByType("hijashjkahjkshjkl");

header('Content-type: application/json');
echo json_encode($arrayResources);

