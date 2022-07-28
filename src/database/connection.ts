import { Dialect, Sequelize } from 'sequelize';

require('dotenv/config');

const dbName: string = process.env.DB_NAME!;
const dbUser: string = process.env.DB_USER!;
const dbHost: string = process.env.DB_HOST!;
const dbDriver: Dialect = 'mysql';
const dbPassword: string = process.env.DB_PASS!;

const connection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver,
});

export default connection;
