// import React from 'react'
import Grid from '../components/Grid'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'

// import axios from 'axios'

const News = (props) => {
  // const [NewData, setsNew] = useState([])
  //   useEffect(() => {
  //     const fetchProducts = async () => {
  //       const { data } = await axios.get('http://54.169.130.83:9092/api/banner/all')
  //       console.log('data', data)
  //       setsNew(data.data)
  //     }
  //     fetchProducts()
  //   }, [])

  //   useEffect(() => {
  //     console.log(NewData)
  //   }, [NewData])

  const refund_policy = () => {
    props.history.push('/Refund_policy')
  }
  return (
    <Helmet title="News">
      <div className="title_new">
        <h1>NEWS</h1>
      </div>

      <section>
        <Grid col={2} mdCol={2} smCol={1} gap={20}>
          <div className="frame_img">
            <img
              className="imgg"
              src="./images/img_news/img_New_1.jpg"
              alt=""
            />
            <div className="container_new">
              <p className="content_new">summer sale up to 50%</p>
              <p
                className="content_new"
                style={{ paddingTop: '5px', paddingBottom: '5px' }}
              >
                thời gian: từ ngày 27/6-07/07
              </p>
              <p className="content_new">
                {' '}
                link shope :{' '}
                <Link
                  className="content_new"
                  to={{ pathname: ' https://shopee.vn/admeliora' }}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none', color: 'blue' }}
                >
                  https://shopee.vn/admeliora
                </Link>
              </p>
            </div>
            <div>
              <button className="button_new">Xem Thêm</button>
            </div>
          </div>

          <div className="frame_img">
            <img
              className="imgg"
              src="./images/img_news/img_New_2.jpg"
              alt=""
            />

            <div className="container_new">
              <p className="content_new1">
                Cùng tham gia mini game ngay hôm nay với Admeloria để nhận được
                nhiều phần quà giá trị.{' '}
              </p>
            </div>
            <div>
              <button className="button_new">Xem Thêm</button>
            </div>
          </div>

          <div className="frame_img">
            <img
              className="imgg"
              src="./images/img_news/img_New_3.jpg"
              alt=""
            />
            <div>
              <button
                className="button_new"
                style={{ marginTop: '50px', marginBottom: '50px' }}
                onClick={() => refund_policy()}
              >
                Xem Thêm
              </button>
            </div>
          </div>

          <div className="frame_img">
            <img
              className="imgg"
              src="./images/img_news/img_New_4.jpg"
              alt=""
            />
            <div>
              <button
                className="button_new"
                style={{ marginTop: '50px', marginBottom: '50px' }}
              >
                Xem Thêm
              </button>
            </div>
          </div>
        </Grid>
      </section>
    </Helmet>
  )
}

// const NewItem = props => (

//       <div className="Newtem">
//          <div>
//           <img style = {{height:"100px",width:"100px"}} src={props.item} alt="" />
//           </div>
//       </div>
// )

// const NewItem1 = props => (

//   <div className="Newtem">
//      <div>
//       <img style = {{height:"100px",width:"100px"}} src={props.item} alt="" />
//       </div>
//   </div>
// )

export default News
