import express from "express";
// import productModel from "./product.model.js";
import ProductController from "./product.controller.js";
import { uploads } from "../../middlewares/fileUpload.middleware.js";

const productRoutes= express.Router();

const productController = new ProductController();

productRoutes.get('/',productController.getAllProducts);
productRoutes.post('/',uploads.single("img"),productController.addProduct);

export default productRoutes;