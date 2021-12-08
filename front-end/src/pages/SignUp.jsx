import React , {useEffect, useState} from 'react'
import axios from 'axios'
import Grid from '../components/Grid'
import { Link, useLocation } from 'react-router-dom'




const SignUp = (props) => {

    const [username, SetUserName] = useState("")
    const [password, SetPassword] = useState("")
    const [email, SetEmail] = useState("")

    const [fname, SetFname] = useState("")
    const [lname, SetLname] = useState("")
    const [dob, SetDob] = useState("")
    const [gender, SetGender] = useState("")
    




  const signup = async () => {
    console.log(username,password,email)
    let token = await axios({
      method: 'post',
      url: 'http://admeliora.tk/api/user/register',
      data: { user_name:  username , password:  password , email: email , first_name: fname , last_name:lname, gender:gender , dob:dob},
      // headers: { authorization: 'token: ' + token },

   
    
    })

    
   let astc = localStorage.setItem('accessToken', token.data.accessToken)
    // console.log(localStorage.getItem('accessToken'))



    // if (token.data.accessToken = true){
        
    
    // props.history.push("/");
    // }

    if ( astc = true ){
        
        props.history.push("/Login");
    }
    
  } 


    return (
        <div className ="frame_k">

            <Grid col = {2}
                mdCol={2}
                 smCol={1}
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

                    <div className ="content_thanks"><p>cảm ơn bạn đã quây lại với chúng tôi </p></div>

                    
                    
                    <div className ="frame_input_and_label_sigup" style ={{marginTop:"50px"}} >
                    <label className ="label_sigup" >Tên Đăng Nhập : </label>
                    <input className = "input_Name_sigup " onChange ={(e) => SetUserName(e.target.value)} placeholder = "Tên Đăng Nhập của bạn...."></input>
                    </div>

                    <div  className ="frame_input_and_label_sigup" >
                    <label className ="label_sigup" >Mật Khẩu : </label>
                    <input className = "input_pass_sigup" onChange ={(e) => SetPassword(e.target.value)} type = "password" name ="" id = "pass" placeholder = "Mật khẩu của bạn...."></input>
                    </div>
                    <div className ="frame_input_and_label_sigup" >
                    <label className ="label_sigup" >Tên của bạn : </label>
                    <input className = "input_fname_sigup" onChange ={(e) => SetFname(e.target.value)}  name ="" id = "pass" placeholder = "Tên của bạn...."></input>
                    </div>
                    <div className ="frame_input_and_label_sigup" >
                    <label className ="label_sigup" >Họ của bạn : </label>
                    <input className = "input_lname_sigup" onChange ={(e) => SetLname(e.target.value)}  name ="" id = "pass" placeholder = "Họ của bạn...."></input>
                    </div>
                    <div className ="frame_input_and_label_sigup" >
                    <label className ="label_sigup" >Ngày Sinh Bạn  : </label>
                    <input className = "input_Phone_sigup" onChange ={(e) => SetDob(e.target.value)}  name ="" id = "pass" placeholder = "vd: 22-05-2001"></input>
                    </div>
                    <div className ="frame_input_and_label_sigup" >
                    <label className ="label_sigup" > Giới Tính : </label>
                    <input className = "input_gender_sigup" onChange ={(e) => SetGender(e.target.value)}  name ="" id = "pass" placeholder = "Giới tính của bạn...."></input>
                    </div>

                    <div className ="frame_input_and_label_sigup" >
                    <label className ="label_sigup" >Email : </label>
                    <input className = "input_Email_sigup" onChange ={(e) => SetEmail(e.target.value)} type = "Email" name ="" id = "pass" placeholder = "Email của bạn...."></input>
                    </div>
                   
                  
                


                    <div className = "frame_button_sigup">

                    <button  className ="button_sigup"  onClick={() => signup()}
                        value="Submit">Sign Up</button>

                    </div>
                   


                </div>

            </Grid>
            
            
           
            
        </div>
    )
}

export default SignUp
