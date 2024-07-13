import {db} from "../../storage/db";
import * as console from "node:console";

export async function createUser(id: number, is_bot: boolean, first_name: string, username: string) {

    const userData  = await db('users').where('user_id', id).first()

    if (!userData) {
        const [user_id] = await db('users').insert({
            user_id: id,
            user_name: username,
            first_name: first_name,
            is_bot: is_bot
        }).returning('id');
        return user_id;
    }}


