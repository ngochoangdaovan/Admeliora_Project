import React, { useEffect, useState } from "react";
import axios from "axios";
import Cartitems from "../components/Cartitems";
import Helmet from "../components/Helmet";
import Grid from "../components/Grid";

const Cart = (props) => {
  const [cartItems, setcartItems] = useState({ data: [] });
  let token = localStorage.getItem("accessToken");
  useEffect(() => {
    const fetchProducts = async () => {
      const respone = await axios({
        method: "get",
        url: "http://admeliora.tk/api/user/cart/",
        headers: { authorization: "token: " + token },
      });
      setcartItems(respone.data);
    };
    fetchProducts();
  }, []);

  const [Cartproducts, setCardproducts] = useState([]);
  useEffect(() => {
    if (cartItems.data === undefined) {
      setCardproducts([]);
    } else {
      setCardproducts(cartItems.data);
    }
  }, [cartItems]);
  // console.log("cartproduct", Cartproducts);

  const [totalPrice, settotalPrice] = useState(0);
  useEffect(() => {
    settotalPrice(
      cartItems.data.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
  });


  

  const order_detail = () => {
    props.history.push("/order");
  };

  return (
    <Helmet title="Giỏ hàng">
      <div className="cart">
        <h1>GIỎ HÀNG</h1>
        <div className="cart_info"></div>
      </div>

      <div>
        <Grid col={2} mdCol={2} smCol={1} gap={80}>
          <div className="title_cart_1">
            <div className="title_first_frame_cart">
              <Grid col={4}>
                <p className="title_item">Sản Phẩm</p>
                <p className="title_quatity">Số Lượng</p>
                <p className="title_total_price_cart">Tổng Tiền</p>
                <p className="title_delete_cart">Xóa</p>
              </Grid>
            </div>
            <div className="frame_map_product">
              {Cartproducts.map((item, index) => (
                <Cartitems
                  item={item}
                  key={index}
                  products={cartItems}
                  index={index}
                />
              ))}
            </div>
          </div>
          <div className="title_cart_2">
            <div style={{ display: "flex" }}>
              <p style={{ padding: "12px" }}>Tổng Tiền</p>
              <p style={{ padding: "12px", marginLeft: "200px" }}>
                <span>{Number(totalPrice) + "VND"}</span>
              </p>
            </div>
            <div style={{ marginTop: "100px", textAlign: "center" }}>
              <button className="btn-order" onClick={() => order_detail()}>
                Tiến hành thanh toán
              </button>
            </div>
          </div>
        </Grid>

       
      </div>
    </Helmet>
  );
};

export default Cart;
