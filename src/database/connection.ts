import { ipcMain } from 'electron';
import { Dialect, Sequelize } from 'sequelize';

require('dotenv/config');

const dbName: string = process.env.DB_NAME!;
const dbUser: string = process.env.DB_USER!;
const dbHost: string = process.env.DB_HOST!;
const dbDriver: Dialect = 'mysql';
const dbPassword: string = process.env.DB_PASS!;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver,
  // eslint-disable-next-line global-require
  dialectModule: require('mysql2'),
});

ipcMain.handle('get-connection-status', async (event, args) => {
  try {
    await sequelize.authenticate();
    return 'Conectado ao banco';
  } catch (ex) {
    return `Erro ao se conectar ${ex}`;
  }
});

export default sequelize;
