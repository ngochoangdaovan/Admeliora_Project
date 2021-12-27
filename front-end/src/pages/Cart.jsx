import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cartitems from '../components/Cartitems'
import Helmet from '../components/Helmet'
import Grid from '../components/Grid'
import Imgscrollbar from '../components/Imgscrollbar'

const Cart = (props) => {
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
  // console.log("cartproduct", Cartproducts);

  const [totalPrice, settotalPrice] = useState(0)
  useEffect(() => {
    settotalPrice(
      cartItems.data.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    )
  }, [cartItems.data])

  const order_detail = () => {
    props.history.push('/order')
  }

  return (
    <Helmet title="Giỏ hàng">
      <div className="cart">
        <h1>GIỎ HÀNG</h1>
        {/* <div className="cart_info"></div> */}
      </div>

      <div>
        <Grid col={2} mdCol={1} smCol={1} gap={80}>
          <div className="title_cart_1">
            <div className="title_first_frame_cart">
              <Grid col={4}>
                <div className="title_item">Sản Phẩm</div>
                <div className="title_quatity">Số Lượng</div>
                <div className="title_total_price_cart">Tổng Tiền</div>
                <div className="title_delete_cart">Xóa</div>
              </Grid>
            </div>

            <div className="scroll_bar1">
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
            <div style={{ display: 'flex' }}>
              <p
                style={{ padding: '12px', marginRight: '50px', width: '100px' }}
              >
                Tổng Tiền
              </p>
              <p className="total_price_cart">
                <span>{Number(totalPrice) + 'VND'}</span>
              </p>
            </div>
            <div style={{ marginTop: '100px', textAlign: 'center' }}>
              <button className="btn-order" onClick={() => order_detail()}>
                Tiến hành thanh toán
              </button>
            </div>
          </div>
        </Grid>
      </div>
    </Helmet>
  )
}

export default Cart
