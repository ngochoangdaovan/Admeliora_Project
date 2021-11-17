import React from 'react'
import axios from 'axios'
import Grid from '../components/Grid'
import { Link, useLocation } from 'react-router-dom'
const SigUp = () => {
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

                <div className = "frame_img_sigup">
                    <img className ="img_sigup" src ="./images/img_home/imghome1.jpg"> 
                    </img>
                </div>


                <div className = "frame_infor_sigup">
                    <div style ={{textAlign:"center"}}>
                        <Link to="/">
                            <img className ="logo_sigup" src = "./images/LOGOLOGIN.jpg"></img>
                        </Link>  
                    </div>

                    <div style ={{textAlign:"center"}}><p>cảm ơn bạn đã quây lại với chúng tôi </p></div>

                    <div><p style ={{marginLeft:"20px",marginTop:"60px",textDecoration:"underline"}}>Đăng Kí Tài Khoản</p></div>
                    
                    
                    <div style = {{paddingTop:"40px",paddingBottom:"30px"}}>
                    <label style ={{fontSize:"20px" ,marginLeft:"20px"}}>Tên Đăng Nhập : </label>
                    <input className = "input_Name_sigup "  placeholder = "Tên Đăng Nhập của bạn...."></input>
                    </div>
                    <div style ={{paddingBottom:"30px"}}>
                    <label style ={{fontSize:"20px" ,marginLeft:"20px"}}>Mật Khẩu : </label>
                    <input className = "input_pass_sigup" type = "password" name ="" id = "pass" placeholder = "Mật khẩu của bạn...."></input>
                    </div>
                    <div style ={{paddingBottom:"30px"}}>
                    <label style ={{fontSize:"20px" ,marginLeft:"20px"}}>SỐ Điện Thoại : </label>
                    <input className = "input_Phone_sigup" type = "number" name ="" id = "pass" placeholder = "Số Điện Thoại của bạn...."></input>
                    </div>
                    <div style ={{paddingBottom:"30px"}}>
                    <label style ={{fontSize:"20px" ,marginLeft:"20px"}}>Email : </label>
                    <input className = "input_Email_sigup" type = "Email" name ="" id = "pass" placeholder = "Email của bạn...."></input>
                    </div>
                   
                  
                


                    <div className = "frame_button_sigup">

                    <button  className ="button_sigup">Sig Up</button>

                    </div>
                   


                </div>

            </Grid>
            
            
           
            
        </div>
    )
}

export default SigUp
