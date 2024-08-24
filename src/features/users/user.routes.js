import express from "express";
import UserController from "./user.controller.js";

const userRoutes= express.Router();

const userController= new UserController();

userRoutes.get("/",userController.getAll);
userRoutes.post("/signup",userController.signup);
userRoutes.post("/signin",userController.signin);

export default userRoutes;