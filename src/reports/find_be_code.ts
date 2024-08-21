import {db} from "@main./storage/db";

export async function findCity(code_city: string){
  const nameCity: object = await db("code_country").where({
    city_code: code_city
  }).first()
  return nameCity;
}

export async function findAirport(code_airport: string){
  const nameAirport: object = await db("code_airport").where({
    airport_code: code_airport
  }).first()
  return nameAirport
}
