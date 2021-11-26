import React, { useState, useEffect } from "react";
import Grid from "../components/Grid";
import Imgscrollbar from "../components/Imgscrollbar";
import axios from "axios";

const Order = (props) => {
  const [count, setCount] = useState(1);

  const increate = () => {
    setCount(count + 1);
    priceItem();
    priceTotal();
  };
  const decreate = () => {
    if (count > 0) setCount(count - 1);
    priceItem();
    priceTotal();
  };

  console.log("conut", count);

  const COUNT = count + 1;

  function priceItem() {
    // var price = document.getElementById("price").innerText;
    // var quantity = document.getElementById("quantity").value;
    var price = 100;
    var total = price * COUNT;
    document.getElementById("price").innerHTML = total;
    console.log("totalneodte", total);
  }

  function priceTotal() {
    // var price = document.getElementById("price").innerText;
    // var quantity = document.getElementById("quantity").value;
    var price = 130;
    var ship = 30;
    // var all = price + ship
    var total = price * COUNT - (COUNT - 1) * ship;
    document.getElementById("price1").innerHTML = total;
    console.log("totalneodte", total);
  }

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

  const come_back_cart = () => {
    props.history.push("/Cart");
  };

  return (
    <div>
      <Grid col={2} mdCol={2} smCol={1} gap={10}>
        <div className="first_order">
          <h1>Thông Tin Giao Hàng</h1>

          <div>
            <input placeholder="Họ & Tên" className="input_payment1"></input>
          </div>
          <div>
            <input placeholder="Email" className="input_payment1"></input>
          </div>
          <div>
            <input
              placeholder="Số Điện Thoại"
              className="input_payment1"
            ></input>
          </div>
          <div>
            <select className="number">
              <option value="default">Số Lượng:</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <select className="number1">
              <option value="default">Số Lượng:</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <select className="number">
              <option value="default">Số Lượng:</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div>
            <input
              placeholder="SỐ Nhà & Tên Đường"
              className="input_payment1"
            ></input>
          </div>

          <div className="title_payment">
            <h1>Phương Thức Thanh Toán</h1>
          </div>

          <div style={{ margin: "20px" }}>
            <label class="input_circle">
              Thanh Toán ThẻThẻ (ATM nội địa, Visa, MasterCard)
              <input type="radio" name="radio" />
              <span class="checkmark1"></span>
            </label>
          </div>
          <div style={{ margin: "20px" }}>
            <label class="input_circle">
              Thanh Toán Khi Nhận Hàng (CODCOD)
              <input type="radio" name="radio" />
              <span class="checkmark1"></span>
            </label>
          </div>
        </div>

        <div className="second_order">
          <div className="frame_second_element">
            <div style={{ textAlign: "center" }}>
              <h1>Đơn Hàng(map số lương)</h1>
            </div>

            <div className="scroll_bar">
              {Cartproducts.map((item, index) => (
                <Imgscrollbar
                  item={item}
                  key={index}
                  products={cartItems}
                  index={index}
                />
              ))}
            </div>

            {/* <Grid
                col={2}>
                    <div className = "frame_img_order">
                        <img className = "image_order" src = "./images/img_contact/image2_contact.jpg"></img>
                    </div>
                    <div className = "frame_infor_order">
                        <h1>Tên ÁO</h1>
                        <p>Màu</p>
                        <p>size</p>
                        <p>GIá TIền
                        <p class="total-price">
                            <span><i class="fa fa-rupee"></i></span>
                            <span id="price">100</span> VND
                        </p>
                        </p>
                        <div>
                        <button className="button_plus_order" onClick={increate} >+</button>
                        <input className ="input_number_order"   value = {count} ></input>
                       
                        <button className="button_minus_order" onClick={decreate}>-</button>


                      

                       
                        </div>

                    </div>
                </Grid> */}
            <div className="frame_voucher_order">
              <input
                className="voucher_order"
                placeholder="mã giảm giá"
              ></input>
              <button className="button_voucher">Áp Dung</button>
            </div>
            <div>
              <Grid col={2}>
                <div className="ship_cost_title_order">Phí ship : </div>
                <div className="ship_cost">
                  <p>30.000 VND</p>
                </div>
                <div className="ship_cost_title_all_order">Tổng</div>
                <div>
                  <p className="ship_cost_all_order">
                    <span id="price1">130</span> VND
                  </p>
                </div>
              </Grid>
            </div>
            <div className="frame_complete_order">
              <button className="complete_order">HOÀN TẤT ĐƠN HÀNG</button>

              <div>
                <i
                  onClick={() => come_back_cart()}
                  class="bx bx-arrow-back"
                  style={{ fontSize: "40px" }}
                ></i>
                <h4> Quay lại giỏi hàng</h4>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default Order;
