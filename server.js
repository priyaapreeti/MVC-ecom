import express from "express";
import productRoutes from "./src/features/product/product.routes.js"
import bodyParser from "body-parser";
const app=express();

app.use(bodyParser);
app.use("/api/v1/products",productRoutes);

app.listen(1234,()=>{
    console.log("server started at 1234")
})