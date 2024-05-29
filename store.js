class Product {
    constructor(id,name,price){
        this.id=id;
        this.name=name;
        this.price=price;
    }
}
class ShoppingCartitems {
    constructor(product,quantity){
        this.product=product;
        this.quantity=quantity;
    }
    caluculatetotalprice(){
       return this.quantity*this.price
    }
}
class ShoppingCart {
    constructor(item){
       this.items=[];
        
    }
    totalItems(items){  return this.items.length}
    addItem(item){   return this.items.push(item) }
    removeItem(item){ return this.items.filter(i=>{
          return  i.Product != item.Product
    })}
    displayItems(items){  return console.log(items);}
    
}

var product1 = new Product('001','product_1','45£');
var product2 = new Product('002','product_2','50£');

var item1=new ShoppingCartitems(product1,4);
var item2=new ShoppingCartitems(product2,3);

var cart1 = new ShoppingCart(item1);
var cart2 = new ShoppingCart(item2);

cart1.addItem(item1);
cart2.addItem(item2);

var items=[item1,item2];
cart1.removeItem(cart1);

console.log(cart2.totalItems(items));