import express from "express";
import {
  addUser,
  getUsers,
  getUserById,
  deleteUserById,
  updateUserById,
} from "../Controller/UserController.js";

let userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", getUserById);

userRouter.post("/", addUser);

userRouter.put("/:id", updateUserById);
userRouter.delete("/:id", deleteUserById);

export default userRouter;
