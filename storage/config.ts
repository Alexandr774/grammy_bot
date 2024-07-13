import dotenv from "dotenv";
import path from "node:path";

dotenv.config({ path: path.join(__dirname,'../.env') });


type connectionT = {
  host: string,
  port: string,
  database: string;
  user: string;
  password: string;
}

type configT = {
  client: string;
  connection: connectionT;
  migrations: {
    tableName: string;
    directory: string;
  }
}

type connectionConfigT ={
  development: configT
}
export const config: connectionConfigT= {

  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST!,
      port: process.env.DB_PORT!,
      database: process.env.DB_DATABASE!,
      user:     process.env.DB_USER!,
      password: process.env.DB_PASSWORD!
    },
    migrations: {
      directory: './storage/migrations',
      tableName: 'knex_migrations'
    }
  },
};
