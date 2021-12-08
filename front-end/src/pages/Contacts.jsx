// // import React from 'react'
// import React, { useCallback, useState, useEffect, useRef } from 'react'
// import emailjs from "emailjs-com"

// import Helmet from '../components/Helmet'
// // import Section, {  SectionBody } from '../components/Section'

// import { Link } from 'react-router-dom'
// import axios from "axios"


// import Grid from '../components/Grid'

// const Contacts = () => {


//   function submit(e){
//     e.preventDefault();
//     emailjs.sendForm("service_0xj83er","template_miid4ez",e.target,"user_l1Rc4dzYn9uLhwGRrOWny"
    
//     ).then(res => {
//       console.log(res);
//     }).catch(err => console.log(err));

//     document.getElementById("create-course-form").reset()
    
//   }

//   // function clearInputField(){
//   //   document.getElementById("name1").value = " ";
//   //   document.getElementById("name2").value = " ";
//   //   document.getElementById("name3").value = " ";
//   //   document.getElementById("name4").value = " ";
//   // }

//   // const url = "http://localhost:5000/api/feedback"
//   // const [data,setData] = useState({
//   //   name1: "",
//   //   name2: "",
//   //   name3: "",
//   //   name4: "",
//   // })

//   // function handle(e){
//   //   const newData = {...data}
//   //   newData[e.target.id] = e.target.value
//   //   setData(newData)
//   //   console.log(newData)

//   // }

//   // function submit(e){
//   //   e.preventDefault();
//   //   axios.post(url,{
//   //     name1: data.name1,
//   //     name2: data.name2,
//   //     name3: data.name3,
//   //     name4: data.name4,
//   //   })
//     // .then(res => {
//     //   console.log(res.data)
//     // })
//   // }


//   return (


//     <Helmet  title = "Liên Hệ">
//       <section className = "TOP">

//       <Grid
//         col={2}
//         mdCol={2}
//         smCol={1}
//         gap={25}>

//           <div  className = "left_First">
//           <img  className = "IMGA"  src = "./images/img_contact/image_contact.jpg" /></div>

//           <div  className = "right_First">
//             <h4 className = "one">Contact</h4>
//             <h4 className = "two">With</h4>
//             <h4 className = "three">Us</h4>
           
            
//           </div>



//         </Grid>
//       </section>


//        <section style = {{marginTop:"50px"}}>
//       <Grid
//         col={2}
//         mdCol={2}
//         smCol={1}
//         gap={20}>

//           <div  className = "left_Second">
//             <h1 className = "Title">Giới Thiệu</h1>
//             <h4 className = "introduction1">ADMELORIA xuất hiện
//              trên thị trường từ đầu năm 2017,
//              ADMELORIA mang sức mạnh của một thương hiệu
//              local brand đầy cá tính với những sản
//               phẩm thời trang hàng đầu xu thế. ADMELORIA
//                thực chất là một cách lồng ghép khéo léo về
//                sự ra đời của thương hiệu. Chữ Y trên đồng
//                 tiền tượng trưng cho tiền thân của ADMELORIA, The Yars Shop.</h4>

//             <h4 className = "introduction2">Bắt nguồn từ Yars,
//              ADMELORIA trân trọng giá trị của đồng tiền xương máu,
//              thành quả lao động đầy mồ hôi, bụi bẩn và nước mắt.
//              Với sức hút của mình, Dirty Coins trở thành biểu 
//              tượng cho phong cách thời trang mạnh mẽ, táo bạo,
//              và được ưa chuộng rộng rãi. ADMELORIA mang đến một
//               cái góc độ độc đáo không những về phong cách sống mà
//              còn về gout ăn mặc hiện đại. ADMELORIA nhận thức được
//              nhu cầu đang phát triển của thị trường Streetwear Việt Nam.
//              Những mặt hàng thời trang tại ADMELORIA được thiết kế với sự
//              kết hợp văn hoá Châu Á và Châu Âu, tạo ra phong cách độc đáo và
//              mới mẻ. Bên cạnh đó ,với sự phá cách từ tông màu trắng đen, tông
//              màu chủ đạo của đa số dòng thời trang Streetwear, 
//             các mẫu thời trang tại ADMELORIA mang nhiều màu sắc 
//             phong phú. Đây là cách ADMELORIA mang đến giá trị cho
//             cộng đồng trẻ yêu thích Streetwear, khuyến khích họ mạo
//            hiểm trong gu ăn mặc của mình. Với tính cách mạo hiểm, không
//            ngại rủi ro, ADMELORIA dần mở rộng thị trường trong suốt quá
//            trình phát triển các chi nhánh trên toàn quốc, đem tới một nền
//             văn hoá rất riêng của ADMELORIA.</h4>
//           </div>
//           <div  className = "right_Second">
//           <img  className = "IMGB"  src = "./images/img_contact/image2_contact.jpg" />
//           </div>

//         </Grid>
//       </section>

//        <section style = {{marginTop:"50px"}}>

//       <Grid
//         col={2}
//         mdCol={2}
//         smCol={1}
//         gap={20}>

//           <div  className = "left_third">
//           <h1 style = {{marginLeft:"50px"}} className = "CONTENT_TITLE">Thông Tin Liên Hệ</h1>

//           <p className = "ICON">
//                 <i className="bx bxs-phone" style={{ marginRight: '10px' }}></i>{' '}
//                 số điện thoại:{' '}
//                 <Link
//                   to={{ pathname: 'tel:+0326626065' }}
//                   target="_blank"
//                   rel="noreferrer"
//                   style={{
//                     color: 'red',
//                     textDecoration: 'none',
//                     textAlign: 'center',
//                   }}
//                 >
//                   0326626065
//                 </Link>
//               </p>

//               <p className = "ICON">
//                 <i
//                   className="bx bx-mail-send"
//                   style={{ marginRight: '10px' }}
//                 ></i>{' '}
//                 <Link
//                   to={{ pathname: 'mailto:admeloria@gmail.com' }}
//                   target="_blank"
//                   rel="noreferrer"
//                   style={{ textDecoration: 'none' }}
//                 >
//                   admeloria1829@gmail.com
//                 </Link>
//               </p>
//               <p className = "ICON">
//                 <i className="bx bxs-map" style={{ marginRight: '10px' }}></i>
//                 <a
//                   href="https://www.google.com/maps/place/211%2F2A+G%C3%B2+Xo%C3%A0i,+B%C3%ACnh+H%C6%B0ng+Ho%C3%A0+A,
//                              +B%C3%ACnh+T%C3%A2n,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,
//                              +Vi%E1%BB%87t+Nam/@10.7876523,106.6021503,17z/data=!3m1!4b1!4m9!1m2!2m1!
//                             1zMjExLzJiIMSRxrDhu51uZyBHw7IgWG_DoGksICAgICAgICAgICAgICAgICAgICAgICAgIC
//                              AgICAgcGjGsOG7nW5nIELDrG5oIEjGsG5nIEhvw6AgQSwgcXXhuq1uIELDrG5oIFTDom4!3m5
//                              !1s0x31752c734099bfe7:0x174708c675c7955!8m2!3d10.787647!4d106.604339!15sCmgyMTEvMmIgxJHGsOG7nW5nIEfDsiB
//                              Yb8OgaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaMaw4budbmcgQsOsbmggSMawbmcgSG_DoCBBLCBxdeG6rW4gQ
//                             sOsbmggVMOibpIBEGdlb2NvZGVkX2FkZHJlc3M"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   211/2b đường Gò Xoài, phường Bình Hưng Hoà A, quận Bình Tân
//                 </a>
//               </p>

//               <p className = "ICON">
//                 <i className="bx bx-globe" style={{ marginRight: '10px' }}></i>{' '}
//                 <Link
//                   to={{ pathname: 'mailto:admeloria@gmail.com' }}
//                   style={{ textDecoration: 'none' }}
//                 >
//                   admeloria.com
//                 </Link>
//               </p>
//               <p className = "ICON">
//                 <i className="bx bx-time" style={{ marginRight: '10px' }}></i>{' '}
//                 thứ 2 đến chủ nhật từ 9h đến 21h
//               </p>

//           </div>


//           <div  className = "right_third">

//             <h1 className = "FEEDBACK_TITLE">Gửi thắc mắc cho chúng tôi</h1>
//             <h4 className = "FEEDBACK_CONTENT">Nếu bạn có thắc mắc gì, có thể gửi
//               yêu cầu cho chúng tôi, và chúng tôi sẽ liên lạc lại với bạn sớm nhất có thể </h4>

//               {/* onChange ={(e) => handle(e)} */}
//             <form onSubmit  = {submit}  id = "create-course-form">

//             <div style = {{marginTop:"20px"}}>
//               <input  id = "name1"   className = "input1" placeholder ="Tên Của Bạn ....." type = "text" name = "name"></input>
//             </div>
//             <div style = {{marginTop:"20px"}}>
//               <input  id = "name2"  className = "input2" placeholder = "Số Điện Thoại Của Bạn...." type = "text" name = "phone"></input>
//               <input id = "name3" className = "input3" placeholder = "Gmail Của Bạn...." type = "text" name = "gmail"></input>  
//             </div>
//             <div style = {{marginTop:"20px"}} >
//               <input className = "input4"  id = "name4"  placeholder = "Nội Dung...." type = "text" name = "message"></input>
             
//             </div>

//             <div style = {{marginTop:"20px"}}>
//               <button className = "BUTTON" >Gửi Cho Chúng Tôi</button>
//             </div>

//             </form>

          
//           </div>
          
//         </Grid>

//       </section>
//       <section style = {{marginTop:"80px"}}>
//         <Grid col={1}>
//           <div>
//           <img  className = "IMGC"  src = "./images/img_contact/img1_end.jpg" />
//           <img  className = "IMGD"  src = "./images/img_contact/img2_end.jpg" />
//           </div>

//         </Grid>
        
//       </section>

      


//     </Helmet>
  

//   )
// }

// export default Contacts








import React, { useState } from 'react'
import emailjs from 'emailjs-com'

import Helmet from '../components/Helmet'

import { Link } from 'react-router-dom'

import Grid from '../components/Grid'
import contactContent from '../content/contactContent'

const Contacts = () => {
  function submit(e) {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_0xj83er',
        'template_miid4ez',
        e.target,
        'user_l1Rc4dzYn9uLhwGRrOWny'
      )
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))

    document.getElementById('create-course-form').reset()
  }

  return (
    <Helmet title="Liên Hệ">
      <section>
        <Grid col={2} mdCol={2} smCol={1} gap={25}>
          <div className="support-contact__wrapper">
            <img
              className="support-contact__wrapper__img"
              src="./images/img_contact/image_contact.jpg"
              alt=""
            />
          </div>

          <div className="support-contact__title">
            <h4 className="support-contact__title__first">Contact</h4>
            <h4 className="support-contact__title__second">With</h4>
            <h4 className="support-contact__title__third">Us</h4>
          </div>
        </Grid>
      </section>

      <section style={{ marginTop: '50px' }}>
        <Grid col={2} mdCol={2} smCol={1} gap={20}>
          <div className="support-contact__content">
            {contactContent.map((item, index) => (
              <div key={index}>
                <div
                  className="support-contact__content__title"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />

                <div
                  className="support-contact__content__intro"
                  dangerouslySetInnerHTML={{ __html: item.description1 }}
                />

                <div
                  className="support-contact__content__text"
                  dangerouslySetInnerHTML={{ __html: item.description2 }}
                />
              </div>
            ))}
          </div>

          <div className="support-contact__wrapper">
            <img
              className="support-contact__wrapper__img"
              src="./images/img_contact/image2_contact.jpg"
              alt=""
            />
          </div>
        </Grid>
      </section>

      <section style={{ marginTop: '50px' }}>
        <Grid col={2} mdCol={2} smCol={1} gap={20}>
          <div className="left_third">
            <h1 style={{ marginLeft: '50px' }} className="CONTENT_TITLE">
              Thông Tin Liên Hệ
            </h1>

            <p className="ICON">
              <i className="bx bxs-phone" style={{ marginRight: '10px' }}></i>{' '}
              số điện thoại:{' '}
              <Link
                to={{ pathname: 'tel:+0326626065' }}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: 'red',
                  textDecoration: 'none',
                  textAlign: 'center',
                }}
              >
                0326626065
              </Link>
            </p>

            <p className="ICON">
              <i
                className="bx bx-mail-send"
                style={{ marginRight: '10px' }}
              ></i>{' '}
              <Link
                to={{ pathname: 'mailto:admeloria@gmail.com' }}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none' }}
              >
                admeloria1829@gmail.com
              </Link>
            </p>
            <p className="ICON">
              <i className="bx bxs-map" style={{ marginRight: '10px' }}></i>
              <a
                href="https://goo.gl/maps/qwb9h7XsBw5GXZ337"
                target="_blank"
                rel="noreferrer"
              >
                211/2b đường Gò Xoài, phường Bình Hưng Hoà A, quận Bình Tân
              </a>
            </p>

            <p className="ICON">
              <i className="bx bx-globe" style={{ marginRight: '10px' }}></i>{' '}
              <Link
                to={{ pathname: 'mailto:admeloria@gmail.com' }}
                style={{ textDecoration: 'none' }}
              >
                admeloria.com
              </Link>
            </p>
            <p className="ICON">
              <i className="bx bx-time" style={{ marginRight: '10px' }}></i> thứ
              2 đến chủ nhật từ 9h đến 21h
            </p>
          </div>

          <div className="support-contact__feedback">
            <h1 className="support-contact__feedback__title">
              Gửi thắc mắc cho chúng tôi
            </h1>
            <h4 className="support-contact__feedback__content">
              Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng
              tôi sẽ liên lạc lại với bạn sớm nhất có thể{' '}
            </h4>

            <form onSubmit={submit} id="create-course-form">
              <div style={{ marginTop: '20px' }}>
                <input
                  className="input-full-col"
                  placeholder="Tên Của Bạn ....."
                  type="text"
                  name="name"
                ></input>
              </div>
              <div style={{ marginTop: '20px' }}>
                <input
                  className="input-2-col"
                  placeholder="Số Điện Thoại Của Bạn...."
                  type="text"
                  name="phone"
                ></input>
                <input
                  className="input-2-col"
                  placeholder="Email Của Bạn...."
                  type="text"
                  name="email"                  
                ></input>
              </div>

              <div style={{ marginTop: '20px' }}>
                <input
                  id="content"
                  className="input-full-col"
                  placeholder="Nội Dung...."
                  type="text"
                  name="message"
                ></input>
              </div>

              <div style={{ marginTop: '20px' }}>
                <button className="support-contact__feedback__btn">
                  Gửi Cho Chúng Tôi
                </button>
              </div>
            </form>
          </div>
        </Grid>
      </section>
      <section style={{ marginTop: '80px' }}>
        <Grid col={1}>
          <div>
            <img
              className="background-img-a"
              src="./images/img_contact/img1_end.jpg"
              alt=""
            />
            <img
              className="background-img-b"
              src="./images/img_contact/img2_end.jpg"
              alt=""
            />
          </div>
        </Grid>
      </section>
    </Helmet>
  )
}

export default Contacts
