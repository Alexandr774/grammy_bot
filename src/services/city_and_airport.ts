import url from "@main./config/local.config"
import axios from "axios";


export async function findFlight() {
  const {data: flight} = await axios.get(`${url.url_find_for_period}origin=${'MOW'}&destination=${'SVX'}&token=${'14ff332f7b8e4564ac46beb4fc15a2f9'}`)
  console.log(flight)
}

findFlight()