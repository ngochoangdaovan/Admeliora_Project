
module.exports = ()=>{

    const Information = require('./Information')();
    const CartAndOrders = require('./Cart&Orders')();

    return {...Information, ...CartAndOrders};
}