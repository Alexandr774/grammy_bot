import type {Conversation, ConversationFlavor} from "@grammyjs/conversations";
import {Context} from "grammy";
import {findCity} from "@src/services/find_city_by_code";
import {findCityByCode} from "@src/reports/find_be_code";


//@ts-ignore
interface MyContext extends Context, ConversationFlavor {
  session: {
    name?: string;
    age?: number;
    user_exist?: boolean
  };
}

type cityCode = {
  nameCity: string,
  fromCodeCity: string
}


export async function dialogueFindTicket(conversation: Conversation<MyContext>, ctx: MyContext) {

  let fromCodeCity = await requestCity(conversation, ctx,
      "Введи город из которого летишь?"
  )

  let toCodeCity = await requestCity(
      conversation,
      ctx,
      "Введи город в который летишь?"
  )

  await ctx.reply(await conversation.external(() => findCity(fromCodeCity, toCodeCity)),
      {parse_mode: 'Markdown'})
}

async function requestCity(conversation: any, ctx: any, promptMsg: string) {
  await ctx.reply(promptMsg)

  while (true) {
    const {message: {text: nameCity}} = await conversation.waitFor("message:text")
    const codeCity: any = await conversation.external(() => findCityByCode(nameCity));
    if (codeCity) {
      return {nameCity: nameCity, codeCity: codeCity}
    }

    await ctx.reply(`Города с названием ${nameCity} не найдено.\n` +
        `Попробуй ввести город из которого летишь еще раз.`), {parse_mode: 'Markdown'}
  }
}