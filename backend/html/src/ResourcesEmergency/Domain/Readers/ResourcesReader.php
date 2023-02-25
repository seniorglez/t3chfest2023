<?php
declare(strict_types=1);

/**
 * Class ResourcesReader
 */
interface ResourcesReader
{
    /**
     * @return array
     */
    public function getAllResources(): array;

    /**
     * @return array
     */
    public function getResourcesWithParams(): array;

    /**
     * @return array
     */
    public function getDetailResource(): array;

}