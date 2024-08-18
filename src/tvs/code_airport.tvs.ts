interface NameTranslations{
    en: string
}

interface Coordinates{
    lat: number;
    lon: number
}

export type CodeAirportT = {
    "name_translations": NameTranslations;
        city_code: string;
        country_code: string;
        time_zone: string;
        code: string;
        iata_type: string;
        name: string;
        coordinates: Coordinates
        flightable: boolean;
}