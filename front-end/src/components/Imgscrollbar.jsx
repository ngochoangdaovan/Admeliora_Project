

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Grid from "./Grid";

const Imgscrollbar = (props) => {
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



  return (
    
        <div>
            <Grid col={2}
            gap={20}>
             <div className="scroll_image">
                <img className="img_scroll_size" src={api + props.item.image} />
            </div>

            <div className = "frame_containt_infor_scroll">
            <di><h6 className ="infor_item_scroll1">{props.item.name}</h6></di>
            <di><h6  className ="infor_item_scroll">{props.item.size}</h6></di>
           
            <div><h6 className ="infor_item_scroll">{props.item.quantity}</h6></div>
            <div><h6  className ="infor_item_scroll">{props.item.price}</h6></div>

    
           

            </div>
            </Grid>
          
        </div>
         
  );
};
Imgscrollbar.protoTypes = {
  item: PropTypes.object,
  products: PropTypes.object,
  index: PropTypes.number,
};


export default Imgscrollbar ;
