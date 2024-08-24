import express from "express";
import productRoutes from "./src/features/product/product.routes.js";
import bodyParser from "body-parser";
import userRoutes from "./src/features/users/user.routes.js";
const app = express();

// app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/v1/products", productRoutes);
app.use("/api/v1/users", userRoutes);

app.listen(1234, () => {
  console.log("server started at 1234");
});
