<?php
/**
 *
 */
class GetAllResources
{

    private ResourcesReader $resourcesReader;

    /**
     * @param ResourcesReader $resourcesReader
     */
    public function __construct(ResourcesReader $resourcesReader)
    {
        $this->resourcesReader = $resourcesReader;
    }

    /**
     * @return array
     */
    public function __invoke(): array
    {
        return $this->resourcesReader->getAllResources();
    }

}