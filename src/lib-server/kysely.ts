import { createPool } from "mysql2"; // do not use 'mysql2/promises'!
import { Kysely, MysqlDialect } from "kysely";
import { DB } from "./types";
import { parseDbUrl } from "./utils";

const dbInfo = parseDbUrl(process.env.DATABASE_URL as string);

console.log(dbInfo);

const dialect = new MysqlDialect({
  pool: createPool({
    database: dbInfo.db,
    host: dbInfo.host,
    user: dbInfo.username,
    password: dbInfo.password,
    port: +dbInfo.port,
    connectionLimit: 10,
  }),
});

export const db = new Kysely<DB>({
  dialect,
});
