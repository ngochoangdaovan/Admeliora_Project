import React, { useEffect, useState} from 'react'
import axios from 'axios'


const Cart = () => {
 
  const [cartItems, setcartItems]=useState([])
  let token = localStorage.getItem("accessToken" )
  useEffect(() => {
    const fetchProducts = async () => {
      const respone = await axios(({
        method: 'get',
        url: 'http://admeliora.tk/api/user/cart/',
        headers:{authorization: "token: " + token},
        }))
      console.log('cartItems', respone.data)
      // setcartItems(respone.data.accessToken)

    }
    fetchProducts()
  }, [])
  
  const [totalProducts, settotalProducts] = useState(0)
  useEffect(()=>{
    
  })

  return (
    <div>
      <p></p>
    </div>
  )
  
}

export default Cart