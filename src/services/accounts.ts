import { userT } from '@src/tvs'
import { createUser } from '@src/reports'


export async function getUser( ctx: userT): Promise<string> {
    const { id, is_bot, first_name, username} = ctx
    const user_id: number | undefined = await createUser(id, is_bot, first_name, username)

    if ( user_id ) {
        return `Приветствую тебя!!! ${first_name}!`
    }
    return `С возвращением ${first_name}!`
}