import { userT } from '@src/tvs'
import { createUser } from '@src/reports'
import * as console from "node:console";


export async function getUser( ctx: userT) {
    const { id, is_bot, first_name, username} = ctx

    const user_id: number | undefined = await createUser(id, is_bot, first_name, username)

    if ( user_id ) {
        return `Приветствую тебя ${first_name}!`
    }
    return `С возвращением ${first_name}!`
}