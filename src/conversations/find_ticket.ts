import type {Conversation, ConversationFlavor} from "@grammyjs/conversations";
import {Context} from "grammy";


//@ts-ignore
interface MyContext extends Context, ConversationFlavor {
  session: {
    name?: string;
    age?: number;
    user_exist?: boolean
  };
}
export async function findTicket(conversation: Conversation<MyContext>, ctx: MyContext) {
  await ctx.reply("Напиши город из какого летишь?")
  const {message: {text: from}} = await conversation.waitFor("message:text")

  await ctx.reply("Куды летишь?")
  const {message: {text: to}} = await conversation.waitFor("message:text")


}