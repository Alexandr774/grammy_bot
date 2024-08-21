import {userT} from '@src/tvs'
import {createUser} from '@src/reports'


export async function getUser(ctx: userT): Promise<boolean> {
  const {id, is_bot, first_name, username} = ctx
  const user_id: number | undefined = await createUser(id, is_bot, first_name, username)

  return !user_id;

}