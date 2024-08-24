import {Bot, Context, InlineKeyboard, session} from "grammy";
import {getUser} from "@src/services";
import { conversations, createConversation,} from "@grammyjs/conversations";
import { dialogueFindTicket } from '@src/conversations/find_ticket'





export default (bot: any): void => {
  bot.api.setMyCommands([
    {command: 'start', description: 'Запуск бота'},
    {command: 'find_ticket', description: 'Поиск билетов'}
  ]);

  bot.use(session({initial: () => ({})}));
  bot.use(conversations());
  bot.use(createConversation(dialogueFindTicket));


  bot.command("find_ticket", async (ctx: any) => {
    const msg: boolean = await getUser(ctx.from);
    await ctx.reply(msg);
    await ctx.conversation.enter("dialogueFindTicket");

  });


  bot.command("start", async (ctx: any) => {
    const keyboard = new InlineKeyboard()
        .text("Поиск билетов", "find_ticket");
    ctx.session.user_exist = await getUser(ctx.from);
    const masseg = ctx.session.user_exist ? `С возвращением ${ctx.from.first_name}! Выбери нужное действие.`
        : `Добро пожаловать  ${ctx.from.first_name}!Выбери нужное действие.`;
    await ctx.reply(masseg, {reply_markup: keyboard});
  });


  bot.on("callback_query:data", async (ctx: any) => {
    const selectButton = ctx.callbackQuery.data
    if (selectButton == "find_ticket") {
      await ctx.conversation.enter("dialogueFindTicket");
    }      // await ctx.answerCallbackQuery() удаление индикатора загрузки
  })
};









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
