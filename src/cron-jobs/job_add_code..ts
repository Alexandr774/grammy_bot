import cron from "node-cron";
import * as addCode from './task/add_code_bd'
import * as console from "node:console";
import time from '@main./config/local.config'


cron.schedule(time.time_task_city_and_airport, () => {
    addCode.addCodeAirport().then(r => console.log('Обновление кода Аэропортов успешно'))
    addCode.addCodeCity().then(r => console.log('Обновление кодов Города успешно'))
});
