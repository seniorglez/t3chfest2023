<?php
require 'src/exporters/resources/ResourcesList.php';

$requestData = new ResourcesList();
$arrayResources = $requestData->getResourcesByType("hijashjkahjkshjkl");

header('Content-type: application/json');
echo json_encode($arrayResources);

