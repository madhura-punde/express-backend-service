import express from "express";
import dotenv from "dotenv";

import userRouter from "./Routes/usersRoutes.js";
// import productRouters from "./routes/productsRoutes.js";

import connectDB from "./config/db.js";

dotenv.config({ path: "./.env" });
let app = express();
let PORT = process.env.PORT;
connectDB();

// middleware
app.use(express.json());

// Routes
app.use("/api/users", userRouter);
// app.use("/api/products", productRouters);

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
