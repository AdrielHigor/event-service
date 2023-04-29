import { Options } from "sequelize";

export default class Constants {
  static port = "3002";
  static database: Options = {
    database: 'event',
    username: 'admin',
    password: 'admin123',
    host: '172.17.0.1',
    port: 8001,
    dialect: 'postgres',
    logging: console.log,
  }
}