import {Bot} from "grammy";
import bot_command from "@src/commands/bot";
import dotenv from "dotenv";
import path from "node:path";
import "@src/cron-jobs/index"
import {conversations} from "@grammyjs/conversations";

dotenv.config({ path: path.join(__dirname,'../.env') });


const bot: Bot = new Bot(process.env.BOT_API_KEY!);

// bot.use(conversations())


bot_command(bot)


bot.start()

