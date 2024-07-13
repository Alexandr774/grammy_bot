import {Bot} from "grammy";
import bot_command from "@src/commands/bot";
import dotenv from "dotenv";
import * as path from "node:path";
import * as process from "node:process";

dotenv.config({ path: path.join(__dirname,'../.env') });

const bot: Bot = new Bot(process.env.BOT_API_KEY!);


bot_command(bot)

bot.start()