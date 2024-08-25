import CartModel from "./cartItem.model.js";
export default class cartController {
  addToCart(req, res) {
    const { prodId, prodQuan } = req.query;
    const userId = req.userId;
    const added = CartModel.addToCart(prodId, userId, prodQuan);
    return res.send(201).send("Item added to cart" + added);
  }
  getCart(req, res) {
    const userId = req.userId;
    const hisCart = CartModel.get(userId);
    return res.status(200).send(hisCart);
  }
  removeFromCart(req, res) {
    //todo
  }
}
