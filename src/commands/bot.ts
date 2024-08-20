import {Bot, Context, InlineKeyboard, session} from "grammy";
import {getUser} from "@src/services";
import {type Conversation, type ConversationFlavor, conversations, createConversation,} from "@grammyjs/conversations";
import { userT } from '@src/tvs'

interface MyContext extends Context, ConversationFlavor {
  session: {
    name?: string;
    age?: number;
  };
}

export default (bot: Bot<MyContext>): void => {
  bot.api.setMyCommands([
    {command: 'start', description: 'Запуск бота'},
    {command: 'find_ticket', description: 'Поиск билетов'}
  ]);

  bot.use(session({initial: () => ({})}));
  bot.use(conversations());

  bot.use(createConversation(askName));
  // bot.use(createConversation(askName1));

  bot.command("find_ticket", async (ctx) => {

    const msg: string = await getUser(ctx.from);
    await ctx.reply(msg);

    await ctx.conversation.enter("askName");

  });

  bot.command("start", async (ctx) => {
    const msg: string = await getUser(ctx.from);
    await ctx.reply(msg);
    // await ctx.conversation.enter("askName1");
  });
};


async function askName(conversation: Conversation<MyContext>, ctx: MyContext) {

  const keyboard = new InlineKeyboard()
      .text("Поиск билетов", "find_ticket")

  await ctx.reply("Привет! Какое действие интересует?", {reply_markup: keyboard});
  const {callbackQuery: res} = await conversation.waitFor("callback_query:data");
  console.log(res.data)

  // ctx.session.name = message?.text;


  //
  //   await ctx.reply(`Приятно познакомиться, ${ctx.session.name}! Сколько тебе лет?`, {reply_markup: keyboard});
  //
  //    // const { callbackQuery } = await conversation.waitFor("callback_query:data");
  //   // let ageGroup = callbackQuery.data
  // // console.log(ageGroup)
  //   const { message: ageMessage } = await conversation.waitFor("message:text");
  //   ctx.session.age = parseInt(ageMessage?.text || "0", 10);
  //
  //   await ctx.reply(`Тебя зовут ${ctx.session.name}, и тебе ${ctx.session.age} лет.`);
  //   // Завершаем диалог, просто заканчивая функцию
  // }
  //
  // async function askName1(conversation: Conversation<MyContext>, ctx: MyContext) {
  //   await ctx.reply("Привет! Как тебя зовут?");
  //   const { message } = await conversation.waitFor("message:text");
  //   ctx.session.name = message?.text;
  //
  //   await ctx.reply(`Приятно познакомиться, ${ctx.session.name}! Сколько тебе лет?`);
  //   const { message: ageMessage } = await conversation.waitFor("message:text");
  //   ctx.session.age = parseInt(ageMessage?.text || "0", 10);
  //
  //   await ctx.reply(`Тебя зовут ${ctx.session.name}, и тебе ${ctx.session.age} лет.`);
  // Завершаем диалог, просто заканчивая функцию
}