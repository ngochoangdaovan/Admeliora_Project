import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Grid from '../components/Grid'
import { Link, useLocation } from 'react-router-dom'
import data from '../content/contactContent'

const Login = (props) => {
  const [username, SetUserName] = useState('')
  const [password, SetPassword] = useState('')

  const login = async () => {
    console.log(username, password)
    let token = await axios({
      method: 'post',
      url: 'http://admeliora.tk/api/user/login',
      data: { user_name: username, password: password },
      // headers: { authorization: 'token: ' + token },
    })

    localStorage.setItem('accessToken', token.data.accessToken)
    // console.log(localStorage.getItem('accessToken'))

    // if (token.data.accessToken = true){

    // props.history.push("/");
    // }

    if ((token.data.accessToken = true)) {
      props.history.push('/')
    }
  }

  return (
    <Grid col={2} mdCol={2} smCol={1} gap={10}>
      <div className="frame_img_login">
        <img
          className="img_login"
          src="./images/img_home/imghome1.jpg"
          alt=""
        />
      </div>

      <div className="frame_infor_login">
        <div style={{ textAlign: 'center' }}>
          <Link to="/">
            <img className="logo_login" src="./images/LOGOLOGIN.jpg" alt="" />
          </Link>
        </div>

        <div className="content_thanks">
          <p>cảm ơn bạn đã quây lại với chúng tôi </p>
        </div>

        <div className="frame_input_and_label">
          <label className="label_input">Email : </label>
          <input
            className="input_email_login "
            type="Gmail"
            name=""
            id="Gmail"
            placeholder="Email của bạn...."
            onChange={(e) => SetUserName(e.target.value)}
          ></input>
        </div>
        <div>
          <label className="label_input">PassWord : </label>
          <input
            className="input_pass_login"
            type="password"
            name=""
            id="pass"
            placeholder="Mật khẩu của bạn...."
            onChange={(e) => SetPassword(e.target.value)}
          ></input>
        </div>
        <div className="forgot_pass">
          <Link to="">
            <p>Quên Mật KHẩu</p>
          </Link>
        </div>

        <div className="frame_button_login">
          <button
            onClick={() => login()}
            value="Submit"
            className="button_login"
          >
            Submit
          </button>
        </div>
        <div className="sigup_user_account">
          <Link to="/SignUp">
            <p>Đăng Kí Tài Khoản</p>
          </Link>
        </div>
      </div>
    </Grid>
  )
}

export default Login
