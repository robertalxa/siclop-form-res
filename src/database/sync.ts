import connection from './connection';

const dbSync = () => {
  connection.sync({ alter: true });
};

export default dbSync;
