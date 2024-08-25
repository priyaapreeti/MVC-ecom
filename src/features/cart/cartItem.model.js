export default class CartModel{
    constructor(productId,userId,quantity,id){
        this.productId=productId;
        this.userId=userId;
        this.quantity=quantity;
        this.id=id;
    }
    static addToCart(productId,userId,quantity){
        const cartItem= new CartModel(productId,userId,quantity, cart.length+1);
        cart.push(cartItem);
        return cartItem;
    }
    static get(userId){
        return cart.filter((cart)=>cart.userId==userId);
    }
}

const cart=[new CartModel("1","1","1","1")];