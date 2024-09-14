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
  rateProduct(req,res) {
    const userId=req.query.userId;
    const prodId=req.query.prodId;
    const rating=req.query.rating;
    const rate="";
    try {
      rate=productModel.rateProduct(userId,prodId,rating);
    } catch (error) {
      console.log(error)
    }

    if(rate){
      res.send(rate);
    }
  }
  getOneProduct(req,res) {
    const id=req.params.id;
    const product=productModel.GetOne(id);
    if(!product){
      res.status(404).send('Product not found');
    }
    return res.status(200).send(product);
  }
  getFilteredProds(req,res){
    console.log(req.query);
    const minp=req.query.minp;
    const maxp=req.query.maxp;
    const cat=req.query.cat;
    const product=productModel.getFiltered(minp,maxp,cat);
    if(!product){
      res.status(404).send('Product not found');
    }
    return res.status(200).send(product);
  }
}
