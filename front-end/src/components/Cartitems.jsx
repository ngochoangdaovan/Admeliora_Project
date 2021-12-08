

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Grid from "./Grid";

const Cartitems = (props) => {
  console.log("props", props);

  let api = "http://admeliora.tk/api/products/images/";

  const [totalPrice, settotalPrice] = useState(0);
  useEffect(() => {
    settotalPrice(Number(props.item.quantity) * Number(props.item.price));
  });
  console.log("props", props);

  const removeCartItem = async () => {
    let token = localStorage.getItem("accessToken");
    const respone = await axios({
      method: "delete",
      url: `http://admeliora.tk/api/user/cart/delete/${props.item.id}`,
      headers: {
        authorization: "token: " + token,
      },
    });

    if (respone.data.success === true) {
      window.location.reload(props.products.data.pop());
      console.log("props.product", props.products);
    }
  };

  console.log("lll",props)

  return (

    <div className = "frame_cart_item">
      <Grid col ={4}>
        <div className = "frame_img_cart">
          <div>
          <img className="img_size_cart" src={api + props.item.image}/>
          </div>

        
        <div>
        <h6 style ={{fontSize:"15px",marginLeft:"20px",marginTop:"45%"}}>{props.item.name}</h6>
        <h6 style ={{fontSize:"15px",marginLeft:"20px"}}>{props.item.size}</h6>
        </div>
        </div>

        <div className ="frame_quantity">
          <h6 style ={{fontSize:"15px",marginLeft:"20px",marginTop:"118px"}}>{props.item.quantity}</h6>

        </div>
        <div className = "frame_price ">
      
          <h6 style ={{fontSize:"15px",marginLeft:"20px",marginTop:"120px"}}>{props.item.price}</h6>
        </div>

        <div className = "frame_trash" >
        <h6 onClick={() => removeCartItem()} style ={{fontSize:"15px",marginTop:"120px", marginRight:"13px"}} ><i  class="bx bx-trash"></i></h6>
        </div>


      </Grid>



    </div>


    
  );
};
Cartitems.protoTypes = {
  item: PropTypes.object,
  products: PropTypes.object,
  index: PropTypes.number,
};

export default Cartitems;
