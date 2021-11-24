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
        
            

        <Grid   col = {2}
                mdCol={2}
                smCol={1}
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

                    <div className ="content_thanks" ><p>cảm ơn bạn đã quây lại với chúng tôi </p></div>
                    
                    <div className ="frame_input_and_label" >
                    <label className = "label_input">Email : </label>
                    <input className = "input_email_login " type = "Gmail" name ="" id = "Gmail" placeholder = "Email của bạn...."></input>
                    </div>
                    <div>
                    <label className = "label_input">PassWord : </label>
                    <input className = "input_pass_login" type = "password" name ="" id = "pass" placeholder = "Mật khẩu của bạn...."></input>
                    </div>
                    <div className="forgot_pass" >
                    <Link to="">

                    <p>Quên Mật KHẩu</p>
               
                    </Link>
                  
                    </div>


                    <div className = "frame_button_login">

                    <button onClick={()=>login()}  value="Submit" className ="button_login">Submit</button>


                    </div>
                    <div className ="sigup_user_account" >
                    <Link to="/SigUp">
                    <p>Đăng Kí Tài Khoản</p>
                    </Link>

                    </div>


                </div>

            </Grid>
            
            
           
            
        
    )
}

export default Login
