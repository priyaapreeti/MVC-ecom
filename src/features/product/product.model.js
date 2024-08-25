import userModel from "../users/user.model.js";

export default class productModel {
  constructor(id, name, desc, price, img, category, size) {
    [
      (this.id = id),
      (this.name = name),
      (this.desc = desc),
      (this.price = price),
      (this.img = img),
      (this.category = category),
      (this.size = size),
    ];
  }
  static add(product) {
    product.id = products.length + 1;
    products.push(product);
    return product;
  }
  static GetAll() {
    return products;
  }
  static GetOne(id) {
    return products.find((prod) => prod.id == id);
  }
  static getFiltered(minP, maxP, cat) {
    return products.filter(
      (prod) =>
        (prod.price >= minP && prod.price <= maxP) || prod.category == cat
    );
  }
  static rateProduct(userId, productId, rating) {
    const user = userModel.getAll().find((us) => us.id == userId);
    if (!user) {
      return "user not found!";
    }
    const product = products.find((prod) => prod.id == productId);
    if (!product) {
      return "product not found!";
    }
    if (!product.ratings) {
      product.ratings = [];
      product.ratings.push({
        userId: userId,
        rating: rating,
      });
    } else {
      //product rating by user already exists
      const idx = product.ratings.findIndex((us) => us.userId == userId);
      if (idx != -1) {
        // update the rating by this user duh
        product.ratings[idx] = {
          userId: userId,
          rating: rating,
        };
      }
      // rating by the user does not exist
      product.ratings.push({
        userId: userId,
        rating: rating,
      });
    }
  }
}

var products = [
  new productModel(
    1,
    "shoes",
    "nike shoes",
    200,
    "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/b00277c3-a26b-4d49-bb4d-96745e07f4ee/WMNS+NIKE+AIR+MAX+SC.png",
    "footwear",
    "s"
  ),
  new productModel(
    2,
    "frock",
    "doll dress",
    500,
    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRh9Njaf-xK6KUtnHttoB7zYQpsJENw0YhShKXzjk7DvN0kOt1B1tnPTJJicyOus9gtrk-JdSwdn_Y-6kZbp3m-iLW39wqJK3104kl4kmYy",
    "dress",
    ["s", "m", "l"]
  ),
];
