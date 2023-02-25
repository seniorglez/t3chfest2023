<?php
/**
 * Class SqlResourcesReader
 */
class SqlResourcesReader implements ResourcesReader
{
    /**
     * @return array
     */
    public function getAllResources(): array
    {
        return array("type" => "tractor");
    }

    /**
     * @return array
     */
    public function getResourcesWithParams(): array
    {
        // TODO: Implement getResourcesWithParams() method.
    }

    /**
     * @return array
     */
    public function getDetailResource(): array
    {
        // TODO: Implement getDetailResource() method.
    }
}