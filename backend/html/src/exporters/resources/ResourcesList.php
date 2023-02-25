<?php

/**
 * Class ResourcesList
 */
class ResourcesList
{
    /**
     * @return string[]
     */
    public function getResourceByHash(string $resourceHash): array
    {
        return [
            "Name" => 'Citroen C15 2010',
            "type" => 'Vehiculo',
            "Subtype" => 'Vehiculo 4x4',
            "Observations" => 'La furgoneta de los panaderos',
            "image" => '',
            "cords" => '1231,63353',
            "owner" => [
                "Name" => 'Olegario Ruperez',
                "Phone" => '1231123131'
                        ]
        ];
    }

     /**
     * @return string[]
     */
    public function getResourcesByType(string $typeHash): array
    {
        return [
                    [
                        "Name" => 'Citroen C15 2010',
                        "type" => 'Vehiculo',
                        "Subtype" => 'Vehiculo 4x4',
                        "Observations" => 'La furgoneta de los panaderos',
                        "image" => '',
                        "cords" => '1231,63353',
                        "owner" => [
                            "Name" => 'Olegario Ruperez',
                            "Phone" => '1231123131'
                                    ]
                    ],
                    [
                        "Name" => 'Honda 4x4',
                        "type" => 'Vehiculo',
                        "Subtype" => 'Vehiculo 4x4',
                        "Observations" => '',
                        "image" => '',
                        "cords" => '1231,63353',
                        "owner" => [
                            "Name" => 'Benita Villar',
                            "Phone" => '123112313'
                                    ]
                        ],
                        [
                            "Name" => 'UAZ-469',
                            "type" => 'Vehiculo',
                            "Subtype" => 'Vehiculo 4x4',
                            "Observations" => 'Este vehículo todoterreno fue producido por la fábrica de automóviles UAZ (Ulyanovsk Automobile Plant) desde 1971 hasta 2003. Fue utilizado ampliamente por el ejército soviético y también se vendió en el mercado civil.',
                            "image" => '',
                            "cords" => '1231,63353',
                            "owner" => [
                                "Name" => 'Paca Fernandez de Aguilar',
                                "Phone" => '123112313'
                                        ]
                            ],
                            [
                                "Name" => 'GAZ-69',
                                "type" => 'Vehiculo',
                                "Subtype" => 'Vehiculo 4x4',
                                "Observations" => 'ste vehículo todoterreno fue producido por la fábrica de automóviles GAZ (Gorky Automobile Plant) desde 1953 hasta 1972. Fue utilizado por el ejército soviético y también se vendió en el mercado civil.',
                                "image" => '',
                                "cords" => '1231,63353',
                                "owner" => [
                                    "Name" => 'Paca Fernandez de Aguilar',
                                    "Phone" => '123112313'
                                            ]
                                ],
                                [
                                    "Name" => 'Lada Niva',
                                    "type" => 'Vehiculo',
                                    "Subtype" => 'Vehiculo 4x4',
                                    "Observations" => 'Este vehículo todoterreno fue producido por la fábrica de automóviles VAZ (Volzhsky Automobile Plant) desde 1977 hasta la actualidad. Aunque técnicamente no es un vehículo soviético, ya que se produjo después de la disolución de la Unión Soviética, se diseñó en la época soviética y ha sido muy popular en Rusia y otros países de la antigua Unión Soviética.',
                                    "cords" => '1231,63353',
                                    "owner" => [
                                        "Name" => 'Luis Fernandez Ruiz',
                                        "Phone" => '123112313'
                                                ]
                                    ],
                                    [
                                        "Name" => 'ZIL-131',
                                        "type" => 'Vehiculo',
                                        "Subtype" => 'Vehiculo 4x4',
                                        "Observations" => 'Este camión todoterreno fue producido por la fábrica de automóviles ZIL (Zavod Imeni Likhacheva) desde 1966 hasta 1994. Fue utilizado por el ejército soviético y también se vendió en el mercado civil.',
                                        "cords" => '1231,63353',
                                        "owner" => [
                                            "Name" => 'Luis Fernandez Ruiz',
                                            "Phone" => '123112313'
                                                    ]
                                        ],
                                        [
                                            "Name" => 'KamAZ-4310',
                                            "type" => 'Vehiculo',
                                            "Subtype" => 'Vehiculo 4x4',
                                            "Observations" => 'Este camión todoterreno fue producido por la fábrica de automóviles KamAZ (Kama Automobile Plant) desde 1980 hasta la actualidad. Fue utilizado por el ejército soviético y también se vendió en el mercado civil.',
                                            "cords" => '1231,63353',
                                            "owner" => [
                                                "Name" => 'Luis Fernandez Ruiz',
                                                "Phone" => '123112313'
                                                        ]
                                            ],
                                        
        ];
    }


}