import { Options } from "sequelize";

export const development: Options = {
  username: "postgres",
  password: "postgres",
  database: "rentease_db",
  host: "127.0.0.1",
  dialect: "postgres",
};
