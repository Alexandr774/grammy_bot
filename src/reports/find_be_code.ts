import {db} from "@main./storage/db";

export async function findCity(code_city: string){
  const nameCity: object = await db("code_country").where({
    city_code: code_city
  }).first()
  console.log(nameCity)
  // return nameCity;
}

export async function findAirport(code_airport: string){
  const nameAirport: object = await db("code_airport").where({
    airport_code: code_airport
  }).first()
  return nameAirport
}

export async function findCityByCode<T = string, B = string | null>(nameCity: T): Promise<B>{
   const query = `
      SELECT *
      FROM code_country
      WHERE to_tsvector('russian', name_city_ru) @@ to_tsquery('russian', ?);
    `;

      const {rows} = await db.raw(query, [nameCity]);
      const res = rows.length > 0 ? rows[0].city_code : null
  return res
}





