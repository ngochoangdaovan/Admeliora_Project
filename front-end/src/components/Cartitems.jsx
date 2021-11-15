import React,{ useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Grid from './Grid'

const Cartitems = (props) => {
    // console.log("props",props)
    let api ="http://admeliora.tk/api/products/images/"

    const [totalPrice, settotalPrice] = useState(0)
    useEffect(() => {
        settotalPrice(Number(props.item.quantity) * Number(props.item.price))
    })
    return (
        <div className="cart_item">

            <div className="cart_image-infor">
                <div className="cart_image">
                    <img src={api+props.item.image}/>
                </div>

                <div className="cart_info">
                    <div className="cart_name">
                        <h6>{props.item.name}</h6>
                    </div>
                    <div className="cart_size">
                        <h6>{props.item.size}</h6>
                    </div>
                    <div className="cart_price">
                        <h6>{props.item.price}</h6>
                    </div>
                    
                </div>
               
              
            </div>

            <div className="total_price_item">
                    <h6>{totalPrice}</h6>
            </div>

            <div>
                    <h6>{props.item.quantity}</h6>
            </div>
                                
        </div>
  
      


      
    )
}
Cartitems.protoTypes ={
    item: PropTypes.object
}

export default Cartitems
