import axios, {AxiosResponse} from "axios";
import * as console from "node:console";
import {db} from "./storage/db";
import {CodeAirportT, codeCountryT} from "@src/tvs";


async function getCodeCity(): Promise<codeCountryT[]> {
  const url = 'https://api.travelpayouts.com/data/ru/cities.json?_gl=1*ze14qx*_ga*MjA5MzQwNjM5MC4xNzIzODk1MjM1*_ga_1WLL0NEBEH*MTcyMzkxNTk1My4yLjEuMTcyMzkxNjk0NC42MC4wLjA.'
  const {data: city} = await axios.get(url)
  return city
}

async function addCodeCity() {
  const cityes: codeCountryT[] = await getCodeCity();
  try {
    for (const city of cityes) {
      const existingCiry = await db("code_country").where({city_code: city.code}).first();

      if (!existingCiry) {
        await db("code_country").insert({
              country_code: city.country_code,
              city_code: city.code,
              name_city_ru: city.name,
              name_city_en: city.name_translations.en,
            }
        )
      }
    }
  } catch
      (error) {
    console.error("Ошибка при добавлении города:", error)
  }
}

async function getCodeAirport(): Promise<CodeAirportT[]> {
  const url: string = 'https://api.travelpayouts.com/data/ru/airports.json?_gl=1*1t6b4h9*_ga*MjA5MzQwNjM5MC4xNzIzODk1MjM1*_ga_1WLL0NEBEH*MTcyMzkxNTk1My4yLjEuMTcyMzkxNjk0NC42MC4wLjA.'

  const {data: airportCode} = await axios.get(url)
  return airportCode
}


async function addCodeAirport() {
  const airports: CodeAirportT[] = await getCodeAirport();
  try {
    for (const airport of airports) {
      const existingAirort = await db("code_airport").where({airport_code: airport.code}).first();

      if (!existingAirort) {
        await db("code_airport").insert({
          city_code: airport.city_code,
          country_code: airport.country_code,
          airport_code: airport.code,
          name_airport_en: airport.name_translations.en,
          name_airport_ru: airport.name,
          iata_type: airport.iata_type,
        })
      }
    }
  } catch (error) {
    console.error("Ошибка при добавлении города:", error)
  }
}

addCodeAirport()

