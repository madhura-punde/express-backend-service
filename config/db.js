import connectMongoDB from "./mongoDB.js";
import connectMySQL from "./mysqlDB.js";

const connectDB = async () => {
  await connectMongoDB();
  // await connectMySQL();
};

export default connectDB;
