import React, { useEffect, useState} from 'react'
import axios from 'axios'
import Cartitems from '../components/Cartitems'
import Helmet from '../components/Helmet'
import Grid from '../components/Grid'

const Cart = (props) => {
 
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


  const order_detail =()=>{

    props.history.push('/order')

  }


  return (
    <Helmet title="Giỏ hàng">
             
    <div className="cart">
      <h1>GIỎ HÀNG</h1>
        <div className="cart_info">
         
                  
        </div>
      </div>
    
      <div>
          <Grid 
            col={2}
            gap={80}>
          <div  className = "title_cart_1">

          <div style={{display:"flex"}}>
            <p style ={{padding:"12px" }}>Sản Phẩm</p> 
            <p style ={{padding:"12px",marginLeft:"300px"}}>Số Lượng</p> 
            <p style ={{padding:"12px",marginLeft:"150px"}}>Tổng Tiền</p> 
            <p style ={{padding:"12px",marginLeft:"100px"}}>Xóa</p> 
            
          </div>

      </div>
          <div className = "title_cart_2">

            <div style={{display:"flex"}}>
              <p style ={{padding:"12px" }}>Tổng Tiền</p> 
              <p style ={{padding:"12px",marginLeft:"200px"}}><span>{Number(totalPrice)}</span></p> 
            </div>
            <div style = {{marginTop:"100px",textAlign:"center"}}>
            <button onClick={()=> order_detail()}>tiến hành thanh toán</button>
            </div>

          </div>
      </Grid>

      <Grid 
        col={2}
        gap={80}>

          <div className="frame_map_product" >
             
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