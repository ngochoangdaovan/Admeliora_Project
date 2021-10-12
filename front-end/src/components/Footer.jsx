
import React from 'react'

import { Link } from 'react-router-dom'

import Grid from './Grid'

import logo from '../assets/images/logo.jpg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { faEnvelope,faMapMarkerAlt,faGlobe,faStopwatch, faPhone } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook,faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons' 


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid
                    col={3}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div>
                        <div className="footer__title">
                            Liên hệ
                        </div>
                        <div className="footer__content">
                            <p>
                            <i class='bx bxs-phone' style={{marginRight :"10px"}}></i> Hỗ trợ / Mua hàng: <a 
                            href="tel:+0326626065"
                            target = '_blank'
                            rel="noreferrer"
                            style={{color: 'red',textDecoration: 'none',textAlign: 'center',}}>
                                0326626065</a>
                            </p>
                                
                            
                            <p>
                            <i class='bx bx-mail-send' style={{marginRight :"10px"}} ></i> <a
                                href="mailto:admeloria@gmail.com"
                                target = '_blank'
                                rel="noreferrer"
                                style={{ textDecoration: 'none' }}>
                                    admeloria1829@gmail.com
                            </a> 
                            </p>
                            <p>
                           
                            <i class='bx bxs-map'  style={{marginRight :"10px"}} ></i>
                             <a href="https://www.google.com/maps/place/211%2F2A+G%C3%B2+Xo%C3%A0i,+B%C3%ACnh+H%C6%B0ng+Ho%C3%A0+A,
                             +B%C3%ACnh+T%C3%A2n,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,
                             +Vi%E1%BB%87t+Nam/@10.7876523,106.6021503,17z/data=!3m1!4b1!4m9!1m2!2m1!
                            1zMjExLzJiIMSRxrDhu51uZyBHw7IgWG_DoGksICAgICAgICAgICAgICAgICAgICAgICAgIC
                             AgICAgcGjGsOG7nW5nIELDrG5oIEjGsG5nIEhvw6AgQSwgcXXhuq1uIELDrG5oIFTDom4!3m5
                             !1s0x31752c734099bfe7:0x174708c675c7955!8m2!3d10.787647!4d106.604339!15sCmgyMTEvMmIgxJHGsOG7nW5nIEfDsiB
                             Yb8OgaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaMaw4budbmcgQsOsbmggSMawbmcgSG_DoCBBLCBxdeG6rW4gQ
                            sOsbmggVMOibpIBEGdlb2NvZGVkX2FkZHJlc3M" 
                            target = '_blank'
                            rel="noreferrer"
                            >211/2b đường Gò Xoài,
                              phường Bình Hưng Hoà A, quận Bình Tân</a> 
                              
        
                            </p>

                            <p>
                            <i class='bx bx-globe'  style={{marginRight :"10px"}} ></i>  <a
                                href="mailto:admeloria@gmail.com"
                                style={{ textDecoration: 'none' }}>
                                admeloria.com
                            </a>
                            </p>
                            <p>
                            <i class='bx bx-time' style={{marginRight :"10px"}} ></i> thứ 2 đến chủ nhật từ 9h đến 21h 
                            
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title1" > 
                             Follow us
                        </div>
                        
                        <div className="footer__content1" >                            
                          <div style = {{display:"flex",  justifyContent:"center" }}>
                              <div>
                              <p>
                                     <a
                                    href="https://www.facebook.com/chau.hoaivu.75"
                                    target = '_blank'
                                    rel="noreferrer"
                                    style={{
                                        
                                        textDecoration: 'none',
                                        
                                        color:"black",
                                        fontSize:"30px",
                                        marginRight: "10px"
                                        
                                        
                                    }}
                                    > <i class='bx bxl-facebook-circle'></i>

                                    
                                    </a>
                                </p>
                              </div>
                                <div>
                                    <p>
                                        <a
                                        href="https://www.facebook.com/chau.hoaivu.75"
                                        target = '_blank'
                                        rel="noreferrer"
                                        style={{
                                        
                                            color:"black",
                                            fontSize:"30px",
                                            marginRight: "10px"
                                        }}
                                        >
                                        <i class='bx bxl-instagram-alt' ></i>

                                        </a>
                                    </p>
                                </div> 
                                <div>
                                    <p>
                                    <a
                                        href="https://www.facebook.com/chau.hoaivu.75"
                                        target = '_blank'
                                        rel="noreferrer"
                                        style={{
                                            
                                            textDecoration: 'none',
                                            textAlign: 'center',
                                            color:"black",
                                            fontSize:"30px"
                                        }}
                                        >
                                        <i class='bx bxl-twitter' ></i>
                                        </a>
                                        </p>
                                </div>
                        </div>
                    </div>
                    </div>
                    
 
                    <div className="footer__about">
                        <p>
                            <Link to="/">
                                <img src={logo} className="footer__logo" alt="" />
                            </Link>
                        </p>
                        <p>
                            Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng triệu người tiêu dùng Việt. Hãy cùng Yolo hướng đến một cuộc sống năng động, tích cực hơn.
                        </p>
                    </div>
                </Grid>
              <Grid
                    col={1}
                    mdCol={2}
                    smCol={1}>
        
                        <div className = 'footer__underline'>
                            <hr/>
                            <p>Copyright © 2020 ADMELORIA Studio. Powered by Sapo</p>
                        </div>
                    

                </Grid>
            </div>
        </footer>
    )
}

export default Footer






