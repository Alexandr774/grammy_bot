import { getUser } from "@src/services";


export default (bot: any): void => {
   bot.command('start', async ( ctx: any ) => {
       const msg: string = await getUser(ctx.from)
        await ctx.reply(msg)

   })

}




