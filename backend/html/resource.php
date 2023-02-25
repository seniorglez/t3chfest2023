<?php
require 'src/exporters/resources/ResourcesList.php';

$requestData = new ResourcesList();
$arrayResources = $requestData->getResourceByHash("hijashjkahjkshjkl");

header('Content-type: application/json');
echo json_encode($arrayResources);

