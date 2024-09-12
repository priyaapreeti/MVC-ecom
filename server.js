import express from "express";
import productRoutes from "./src/features/product/product.routes.js";
import bodyParser from "body-parser";
import userRoutes from "./src/features/users/user.routes.js";
import jwtAuth from "./src/middlewares/jwtAuth.middleware.js";
import cartRoutes from "./src/features/cart/cartItem.routes.js";
// import basicAuth from "./src/middlewares/basicAuth.middleware.js";
import swagger from "swagger-ui-express";
import loggerMiddleware from "./src/middlewares/logger.middleware.js";
// import mydoc from "./swagger.json" assert { type: "json" };
// import swag from "./swagger-autogen.js";
const app = express();

// app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use("/api-docs", swagger.serve, swagger.setup(mydoc));
// app.use("/api-docs", swagger.serve, swagger.setup(swag));

app.use(loggerMiddleware);

app.use("/api/v1/products", jwtAuth, productRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/cartItem", jwtAuth, cartRoutes);

app.get("/", (req, res) => {
  res.status(200).send("home screen here");
});
app.use((req,res)=>{
  res.send(404).send("page-not-found");
})
app.listen(1234, () => {
  console.log("server started at 1234");
});
