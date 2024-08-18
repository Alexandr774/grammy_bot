import cron from "node-cron";
import * as addCode from './task/add_code_bd'
import * as console from "node:console";
cron.schedule('* * * * *', () => {
    addCode.addCodeAirport().then(r => console.log('успешно'))
    addCode.addCodeCity().then(r => console.log('успешно'))
    console.log('Задача выполняется каждые 5 минут');

});
