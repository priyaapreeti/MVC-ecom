import productModel from "./product.model.js";
export default class productController {
  getAllProducts(req, res) {
    const products = productModel.GetAll();
    return res.status(200).send(products);
  }
  addProduct(req, res) {
    console.log(req.body);
    const { name, price, sizes } = req.body;
    const newProd = {
      name,
      price: parseFloat(price),
      sizes: sizes.split(","),
      img: req.file.fileName,
    };
    const newData=productModel.add(newProd);
    res.status(201).send(newData);
  }
  rateProduct() {}
  getOneProduct(req,res) {
    const id=req.params.id;
    const product=productModel.GetOne(id);
    if(!product){
      res.status(404).send('Product not found');
    }
    return res.status(200).send(product);
  }
}
