import {Bot} from "grammy";
import bot_command from "@src/commands/bot";
import dotenv from "dotenv";
import path from "node:path";
import "@src/cron-jobs/index"

dotenv.config({ path: path.join(__dirname,'../.env') });


const bot: Bot = new Bot(process.env.BOT_API_KEY!);



bot_command(bot)


bot.start()

// // Обработка сигналов завершения
// const shutdown = async () => {
//     console.log('Процесс завершения...');
//
//     // Остановка бота
//     await bot.stop();
//
//     // Очистка крон-задач, если необходимо
//     // cron.stop(); // Можно использовать этот метод для остановки всех крон-задач
//
//     console.log('Процесс завершен.');
//     process.exit();
// };
//
// // Обработка сигналов завершения процесса
// process.on('SIGINT', shutdown); // Для прерывания процесса (Ctrl+C)
// process.on('SIGTERM', shutdown);