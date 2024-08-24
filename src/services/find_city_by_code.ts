import {findCityByCode} from "@src/reports/find_be_code";
import axios from "axios";
import url from "@main./config/local.config";
import * as process from "node:process";

interface FlightInfo {
    flight_number: string;
    link: string;
    origin_airport: string;
    destination_airport: string;
    departure_at: string; // Можно также использовать Date, если предполагается работа с объектами Date
    airline: string;
    destination: string;
    origin: string;
    price: number;
    return_transfers: number;
    duration: number;
    duration_to: number;
    duration_back: number;
    transfers: number;
}


export async function findCity(fromCodeCity: any, toCodeCity: any): Promise<string> {
  console.log( fromCodeCity, toCodeCity)
  const {data: res} = await axios.get(`${url.url_find_for_period}origin=${fromCodeCity.codeCity}&destination=${toCodeCity.codeCity}&token=${'14ff332f7b8e4564ac46beb4fc15a2f9'}`)
  const data: FlightInfo = res.data[0]

  return  `*Номер рейса:* ${data.flight_number}\n` +
           `*Отправление:* город ${fromCodeCity.nameCity}\n` +
           `*Прибытие:* город ${toCodeCity.nameCity}\n` +
           `*Стоимость билета:* ${data.price} руб.`;
}