import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const connectMySQL = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });
    console.log("MySQL connected successfully");
    return connection;
  } catch (e) {
    console.log("MySQL connection failed", e.message);
    process.exit(1);
  }
};
export default connectMySQL;
