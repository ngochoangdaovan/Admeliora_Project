const db = require('../../../models')();
const CartModel = db.Cart;


module.exports = new class CartQueries {

    /* ----------------------------------------------CREATE FUNCTIONS---------------------------------------*/  
        
    async addProduct(user_id, product_detail_id, quantity, price){ 
        await CartModel.create ({
            user_id, 
            product_detail_id,
            quantity,
            price
        })
    }   
        
        
    /* ----------------------------------------------GET FUNCTIONS------------------------------------------*/  
    /* ----------------------------------------------UPDATE FUNCTIONS---------------------------------------*/  
    /* ----------------------------------------------DELETE FUNCTIONS---------------------------------------*/  


};

