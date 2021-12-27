import React, { useState, useEffect } from 'react'
import Grid from '../components/Grid'
import Imgscrollbar from '../components/Imgscrollbar'
import Location from '../components/Location'
import axios from 'axios'

const Order = (props) => {
  const [cartItems, setcartItems] = useState({ data: [] })
  let token = localStorage.getItem('accessToken')
  useEffect(() => {
    const fetchProducts = async () => {
      const respone = await axios({
        method: 'get',
        url: 'http://admeliora.tk/api/user/cart/',
        headers: { authorization: 'token: ' + token },
      })
      setcartItems(respone.data)
    }
    fetchProducts()
  }, [token])

  const [Cartproducts, setCardproducts] = useState([])
  useEffect(() => {
    if (cartItems.data === undefined) {
      setCardproducts([])
    } else {
      setCardproducts(cartItems.data)
    }
  }, [cartItems])

  const come_back_cart = () => {
    props.history.push('/Cart')
  }

  const [totalnumber, settotalnumber] = useState(0)
  useEffect(() => {
    settotalnumber(
      cartItems.data.reduce((total, item) => total + Number(item.quantity), 0)
    )
  }, [cartItems.data])

  const [totalPrice, settotalPrice] = useState(30)
  useEffect(() => {
    settotalPrice(
      cartItems.data.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    )
  }, [cartItems.data])


  const Complete = () => {
    props.history.push('/Complete_order')
  }

  return (
    <div>
      <Grid col={2} mdCol={1} smCol={1} gap={10}>
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
            <Location />
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

          <div style={{ margin: '20px' }}>
            <label class="input_circle">
              Thanh Toán ThẻThẻ (ATM nội địa, Visa, MasterCard)
              <input type="radio" name="radio" />
              <span class="checkmark1"></span>
            </label>
          </div>
          <div style={{ margin: '20px' }}>
            <label class="input_circle">
              Thanh Toán Khi Nhận Hàng (CODCOD)
              <input type="radio" name="radio" />
              <span class="checkmark1"></span>
            </label>
          </div>
        </div>

        <div className="second_order">
          <div className="frame_second_element">
            <div style={{ textAlign: 'center' }}>
              <h1 className="total_item_payment">
                Đơn Hàng({Number(totalnumber)} sản phẩm)
              </h1>
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
                    <span id="price1">{Number(totalPrice + 30000)}</span> VND
                  </p>
                </div>
              </Grid>
            </div>
            <div className="frame_complete_order">
              <button className="complete_order"  onClick={() => Complete()}>HOÀN TẤT ĐƠN HÀNG</button>

              <div>
                <i
                  onClick={() => come_back_cart()}
                  class="bx bx-arrow-back"
                  style={{ fontSize: '40px',cursor:"pointer" }}
                ></i>
                <h4> Quay lại giỏi hàng</h4>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </div>
  )
}

export default Order
