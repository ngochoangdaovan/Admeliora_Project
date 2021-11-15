import React, { useEffect, useState} from 'react'
import axios from 'axios'
import Cartitems from '../components/Cartitems'
import Helmet from '../components/Helmet'
import Grid from '../components/Grid'

const Cart = () => {
 
  const [cartItems, setcartItems]=useState({data: []})
  let token = localStorage.getItem("accessToken" )
  useEffect(() => {
    const fetchProducts = async () => {
      const respone = await axios(({
        method: 'get',
        url: 'http://admeliora.tk/api/user/cart/',
        headers:{authorization: "token: " + token},
        }))
      console.log('cartItems', respone.data)
      setcartItems(respone.data)

    }
    fetchProducts()
  }, [])
  
  const [Cartproducts, setCardproducts] = useState([])
  useEffect(()=>{
    if  (cartItems.data ===undefined){
        setCardproducts([])
    }
  
    else {setCardproducts(cartItems.data)}
    
},[cartItems])
console.log("cartproducts", Cartproducts)

  const [totalPrice, settotalPrice] = useState(0)
  useEffect(()=>{
    settotalPrice(cartItems.data.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
  })


  return (
    <Helmet title="Giỏ hàng">
             
    <div className="cart">
      <h1>GIỎ HÀNG</h1>
        <div className="cart_info">
            
          <div className="total_price">
              <span>Thành tiền:</span> <span>{Number(totalPrice)}</span>
          </div>
          <div>
            <button className="cart_info_btn">Thanh toán</button>
          </div>
                  
        </div>
      </div>
    
      <div>
          <Grid 
            col={2}
            gap={80}>
          <div style ={{height:"50px",width:"900px",backgroundColor:"#F0F0F0F0"}} className = "title_cart_1">

          <div style={{display:"flex"}}>
            <p style ={{padding:"15px" }}>Sản Phẩm</p> 
            <p style ={{padding:"15px",marginLeft:"300px"}}>Số Lượng</p> 
            <p style ={{padding:"15px",marginLeft:"150px"}}>Tổng Tiền</p> 
            <p style ={{padding:"15px",marginLeft:"100px"}}>Xóa</p> 
            
          </div>

      </div>
          <div style ={{height:"50px",backgroundColor:"#F0F0F0F0"}} className = "title_cart_2">

            <div style={{display:"flex"}}>
              <p style ={{padding:"15px" }}>Tổng Tiền</p> 
              <p style ={{padding:"15px",marginLeft:"200px"}}>Map Tiền vô đây</p> 
            </div>

          </div>
      </Grid>

      <Grid 
        col={2}
        gap={80}>

          <div style ={{minHeight:"50px",width:"900px",backgroundColor:"#F0F0F0F0" , marginTop:"20px"}} >
             
              {
                Cartproducts.map((item,index) =>(
                  <Cartitems item={item} key={index}/>
              ))
              }   
          </div>

      </Grid>    
    </div>

   </Helmet>
  )
  
}

export default Cart