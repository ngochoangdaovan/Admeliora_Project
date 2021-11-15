import React from 'react'
import axios from 'axios'
const Login = () => {
    const login = async()=>{
       let token=  await axios({
            method: "post",
            url: 'http://admeliora.tk/api/user/login',
            data: {user_name: "hoangdao",
                    password: "hoangdao@236"}

        })
        localStorage.setItem("accessToken",token.data.accessToken)
        console.log(localStorage.getItem('accessToken'))
    }
    

    return (
        <div>
            
           <h1>login</h1>
           
            <button onClick={()=>login()}  value="Submit">Submit</button>
            
        </div>
    )
}

export default Login
