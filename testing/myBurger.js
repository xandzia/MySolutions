class Burger{
    constructor(size, topping){
        
        this.sizeList = {
            "big": { price: 100, kcal: 40 },
            "small": { price: 50, kcal: 20 }
        };
        
        this.toppingList = {
            "cheese" : {price: 10, kcal: 20},
            "salad" : {price: 20, kcal: 5},
            "mayo" : {price: 30, kcal: 30},   
        };
        
        this._setSize(size);
        this._setTopping(topping);
        
        this._toppings = [];
        
    }
    _setSize(size){
        this._size = this.sizeList[size];            
    }
    
    _setTopping(topping){
        this._topping = this.toppingList[topping];
    }
    
    addTopping(topping){
        this._toppings.push(this.toppingList[topping]);
    }
    
    calcPrice(){ 
        let sum = this._size.price + this._topping.price;
        if(this._toppings.length != 0){
            for(let topping in this._toppings){
                sum += this._toppings[topping].price;               
            }
        }
        return "Burger's prise: "+sum;
    }
    
    calcKcal(){ 
        let sum = this._size.kcal + this._topping.kcal;
        if(this._toppings.length != 0){
            for(let topping in this._toppings){
                sum += this._toppings[topping].kcal;               
            }
        }
        return "Burger's kcal: "+sum;
    }
    
}

let burger = new Burger("small", "cheese");
burger.addTopping("cheese");
burger.addTopping("salad");
console.log(burger.calcPrice());
console.log(burger.calcKcal());
console.log(burger);
