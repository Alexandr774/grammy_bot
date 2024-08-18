// Интерфейс для структуры name_translations
interface NameTranslations {
  en: string;
}

// Интерфейс для структуры cases (падежи)
interface Cases {
  da: string;
  pr: string;
  ro: string;
  su: string;
  tv: string;
  vi: string;
}

// Интерфейс для структуры coordinates (координаты)
interface Coordinates {
  lat: number;
  lon: number;
}

// Интерфейс для одного объекта из массива
export type codeCountryT = {
  name_translations: NameTranslations;
  cases: Cases;
  country_code: string;
  code: string;
  time_zone: string;
  name: string;
  coordinates: Coordinates;
}

// Тип для массива объектов
// export type LocationsArrayT = Location[];