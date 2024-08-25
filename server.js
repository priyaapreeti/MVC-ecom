import express from "express";
import productRoutes from "./src/features/product/product.routes.js";
import bodyParser from "body-parser";
import userRoutes from "./src/features/users/user.routes.js";
import jwtAuth from "./src/middlewares/jwtAuth.middleware.js";
import cartRoutes from "./src/features/cart/cartItem.routes.js";
// import basicAuth from "./src/middlewares/basicAuth.middleware.js";
const app = express();

// app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/v1/products",jwtAuth, productRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/cartItem",jwtAuth, cartRoutes);

app.listen(1234, () => {
  console.log("server started at 1234");
});
