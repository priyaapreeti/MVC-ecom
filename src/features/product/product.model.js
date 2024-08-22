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
  static add(product){
    product.id=products.length+1;
    products.push(product);
    return product;
  }
  static GetAll(){
    return products;
  }
}

var products = [
  new productModel(
    1,
    "shoes",
    "nike shoes",
    "bohot pyare shoes",
    200,
    "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/b00277c3-a26b-4d49-bb4d-96745e07f4ee/WMNS+NIKE+AIR+MAX+SC.png",
    "footwear",
    "s"
  ),
  new productModel(
    2,
    "frock",
    "doll dress",
    "beautiful frock",
    500,
    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRh9Njaf-xK6KUtnHttoB7zYQpsJENw0YhShKXzjk7DvN0kOt1B1tnPTJJicyOus9gtrk-JdSwdn_Y-6kZbp3m-iLW39wqJK3104kl4kmYy",
    "dress",
    ["s","m","l"]
  ),
];
