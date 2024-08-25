import express from "express";
import CartController from "./cartItem.controller.js";

const cartRoutes=express.Router();
const cartController= new CartController();

cartRoutes.get("/",cartController.getCart);
cartRoutes.post("/",cartController.addToCart);

export default cartRoutes;