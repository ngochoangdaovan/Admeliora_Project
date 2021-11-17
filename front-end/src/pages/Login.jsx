import React from 'react'
import axios from 'axios'
import Grid from '../components/Grid'
import { Link, useLocation } from 'react-router-dom'
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
            

            <Grid col = {2}
                gap = {10}>

                <div className = "frame_img_login">
                    <img className ="img_login" src ="./images/img_home/imghome1.jpg"> 
                    </img>
                </div>


                <div className = "frame_infor_login">
                    <div style ={{textAlign:"center"}}>
                    <Link to="/">
                        <img className ="logo_login" src = "./images/LOGOLOGIN.jpg"></img>
                    </Link> 
                      
                    </div>

                    <div style ={{textAlign:"center"}}><p>cảm ơn bạn đã quây lại với chúng tôi </p></div>
                    
                    <div style = {{paddingTop:"80px",paddingBottom:"60px"}}>
                    <label style ={{fontSize:"20px" ,marginLeft:"20px"}}>Email : </label>
                    <input className = "input_email_login " type = "Gmail" name ="" id = "Gmail" placeholder = "Email của bạn...."></input>
                    </div>
                    <div>
                    <label style ={{fontSize:"20px" ,marginLeft:"20px"}}>PassWord : </label>
                    <input className = "input_pass_login" type = "password" name ="" id = "pass" placeholder = "Mật khẩu của bạn...."></input>
                    </div>
                    <div style ={{marginTop:"30px",textAlign:"right",textDecoration:"underline"}}>
                    <Link to="">

                    <p>Quên Mật KHẩu</p>
               
                    </Link>
                  
                    </div>


                    <div className = "frame_button_login">

                    <button onClick={()=>login()}  value="Submit" className ="button_login">Submit</button>

                    </div>
                    <div style ={{marginTop:"30px",textAlign:"center",textDecoration:"underline"}}>
                    <Link to="/SigUp">
                    <p>Đăng Kí Tài Khoản</p>
                    </Link>

                    </div>


                </div>

            </Grid>
            
            
           
            
        </div>
    )
}

export default Login
