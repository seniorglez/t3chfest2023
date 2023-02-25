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
            "name" => 'Citroen C15 2010',
            "type" => 'Vehiculo',
            "subtype" => 'Vehiculo 4x4',
            "observations" => 'La furgoneta de los panaderos',
            "image" => '',
            "cords" => '1231,63353',
            "owner" => [
                "name" => 'Olegario Ruperez',
                "phone" => '1231123131'
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
                        "name" => 'Citroen C15 2010',
                        "type" => 'Vehiculo',
                        "subtype" => 'Vehiculo 4x4',
                        "observations" => 'La furgoneta de los panaderos',
                        "image" => '',
                        "cords" => '1231,63353',
                        "owner" => [
                            "name" => 'Olegario Ruperez',
                            "phone" => '1231123131'
                                    ]
                    ],
                    [
                        "name" => 'Honda 4x4',
                        "type" => 'Vehiculo',
                        "subtype" => 'Vehiculo 4x4',
                        "observations" => '',
                        "image" => '',
                        "cords" => '1231,63353',
                        "owner" => [
                            "name" => 'Benita Villar',
                            "phone" => '123112313'
                                    ]
                        ],
                        [
                            "name" => 'UAZ-469',
                            "type" => 'Vehiculo',
                            "subtype" => 'Vehiculo 4x4',
                            "observations" => 'Este vehículo todoterreno fue producido por la fábrica de automóviles UAZ (Ulyanovsk Automobile Plant) desde 1971 hasta 2003. Fue utilizado ampliamente por el ejército soviético y también se vendió en el mercado civil.',
                            "image" => '',
                            "cords" => '1231,63353',
                            "owner" => [
                                "name" => 'Paca Fernandez de Aguilar',
                                "phone" => '123112313'
                                        ]
                            ],
                            [
                                "name" => 'GAZ-69',
                                "type" => 'Vehiculo',
                                "subtype" => 'Vehiculo 4x4',
                                "observations" => 'ste vehículo todoterreno fue producido por la fábrica de automóviles GAZ (Gorky Automobile Plant) desde 1953 hasta 1972. Fue utilizado por el ejército soviético y también se vendió en el mercado civil.',
                                "image" => '',
                                "cords" => '1231,63353',
                                "owner" => [
                                    "name" => 'Paca Fernandez de Aguilar',
                                    "phone" => '123112313'
                                            ]
                                ],
                                [
                                    "name" => 'Lada Niva',
                                    "type" => 'Vehiculo',
                                    "subtype" => 'Vehiculo 4x4',
                                    "observations" => 'Este vehículo todoterreno fue producido por la fábrica de automóviles VAZ (Volzhsky Automobile Plant) desde 1977 hasta la actualidad. Aunque técnicamente no es un vehículo soviético, ya que se produjo después de la disolución de la Unión Soviética, se diseñó en la época soviética y ha sido muy popular en Rusia y otros países de la antigua Unión Soviética.',
                                    "cords" => '1231,63353',
                                    "owner" => [
                                        "name" => 'Luis Fernandez Ruiz',
                                        "phone" => '123112313'
                                                ]
                                    ],
                                    [
                                        "name" => 'ZIL-131',
                                        "type" => 'Vehiculo',
                                        "subtype" => 'Vehiculo 4x4',
                                        "observations" => 'Este camión todoterreno fue producido por la fábrica de automóviles ZIL (Zavod Imeni Likhacheva) desde 1966 hasta 1994. Fue utilizado por el ejército soviético y también se vendió en el mercado civil.',
                                        "cords" => '1231,63353',
                                        "owner" => [
                                            "name" => 'Luis Fernandez Ruiz',
                                            "phone" => '123112313'
                                                    ]
                                        ],
                                        [
                                            "name" => 'KamAZ-4310',
                                            "type" => 'Vehiculo',
                                            "subtype" => 'Vehiculo 4x4',
                                            "observations" => 'Este camión todoterreno fue producido por la fábrica de automóviles KamAZ (Kama Automobile Plant) desde 1980 hasta la actualidad. Fue utilizado por el ejército soviético y también se vendió en el mercado civil.',
                                            "cords" => '1231,63353',
                                            "owner" => [
                                                "name" => 'Luis Fernandez Ruiz',
                                                "phone" => '123112313'
                                                        ]
                                            ],
                                        
        ];
    }


}