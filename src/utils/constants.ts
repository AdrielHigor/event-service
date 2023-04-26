import { Options } from "sequelize";

export default class Constants {
  static port = "3002";
  static database: Options = {
    database: 'postgres',
    username: 'postgres',
    password: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
    logging: console.log,
  }
}