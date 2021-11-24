// import React,{ useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
// // import Grid from './Grid'

// const Cartitems = (props) => {
//     // console.log("props",props)
//     let api ="http://admeliora.tk/api/products/images/"

//     const [totalPrice, settotalPrice] = useState(0)
//     useEffect(() => {
//         settotalPrice(Number(props.item.quantity) * Number(props.item.price))
//     })
//     return (
//         <div className="cart_item">

//             <div className="cart_image-infor">
//                 <div className="cart_image">
//                     <img className ="img_size_cart" src={api+props.item.image}/>
//                     <div className = "cart_info">
//                     <div style ={{display:"block"}}>
//                     <div><h6 className = "size_content_cart1">{props.item.name}</h6></div>
//                     <div><h6 className = "size_content_cart">{props.item.size}</h6></div>
//                     <div><h6 className = "size_content_cart">{props.item.price}</h6></div>
//                     </div>

//                     <div><h6 className ="quantity_Cart">{props.item.quantity}</h6></div>
//                     <div><h6 className ="quantity_Cart_total_price">{totalPrice}</h6></div>
//                     <div><h6 className ="icon_trash"><i class='bx bx-trash'></i></h6></div>


                    
                   
                    
//                 </div>    
//                 </div>

//             </div>                       
//         </div>
  
      


      
//     )
// }
// Cartitems.protoTypes ={
//     item: PropTypes.object
// }

// export default Cartitems



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

        <img className="img_size_cart" src={api + props.item.image} />
        <div>
        <h6 style ={{fontSize:"15px",marginLeft:"20px",marginTop:"50%"}}>{props.item.name}</h6>
        <h6 style ={{fontSize:"15px",marginLeft:"20px"}}>{props.item.size}</h6>
        </div>
        </div>

        <div className ="frame_quantity">
        <div style={{marginTop:"10px"}}>
          <h6 style ={{fontSize:"15px",marginLeft:"20px",marginTop:"40%"}}>{props.item.quantity}</h6>
        </div>
        </div>
        <div className = "frame_price ">
        <div>
          <h6 style ={{fontSize:"15px",marginLeft:"20px",marginTop:"100px"}}>{props.item.price}</h6>
        </div>
        </div>
        <div className = "frame_trash" >
          
        <h6 onClick={() => removeCartItem()} style ={{fontSize:"15px",marginTop:"100px"}} ><i  class="bx bx-trash"></i></h6>
        </div>


      </Grid>



    </div>


    // <div className="cart_item">
    //   <div className="cart_image-infor">
        
    //       <div className="cart_image">
    //         <img className="img_size_cart" src={api + props.item.image} />
    //       </div>
    //       <div className = "llll"></div>

        

    //       <div className="cart_info">



    //         <div>
    //           <div>
    //             <h6 className="size_content_cart1">{props.item.name}</h6>
    //           </div>
    //           <div>
    //             <h6 className="size_content_cart">{props.item.size}</h6>
    //           </div>
    //           <div>
    //             <h6 className="size_content_cart">{props.item.price}</h6>
    //           </div>
    //         </div>

    //         <div>
    //           <h6 className="quantity_Cart">{props.item.quantity}</h6>
    //         </div>
    //         <div>
    //           <h6 className="quantity_Cart_total_price">{totalPrice}</h6>
    //         </div>
    //         <div>
    //           <h6 onClick={() => removeCartItem()} className="icon_trash">
    //             <i class="bx bx-trash"></i>
    //           </h6>
    //         </div>
    //       </div>
    //     </div>
    // </div>
  );
};
Cartitems.protoTypes = {
  item: PropTypes.object,
  products: PropTypes.object,
  index: PropTypes.number,
};

export default Cartitems;
