




// import React from 'react'
import Grid from '../components/Grid'
import React, {  useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'

// import axios from 'axios'

const Refund_policy = (props) => {





 
  return(
    <Helmet title="Chính Sách ">
      <div style ={{textAlign:"center"}}>
      <h1>Chính Sách Đổi Hàng</h1>
      </div>

      <section style={{marginTop:"40px"}}>

          <div style = {{display:"flex"}}>
                <i class='bx bxs-circle' style={{fontSize:"15px",marginTop:"5px",marginRight:"30px"}}></i>
                <p style ={{fontSize:"20px"}}>Đối với sản phẩm giảm giá: Quý khách vui lòng kiểm tra sản phẩm trực tiếp trước khi thanh toán,
               không hỗ trợ đổi trả bất kỳ trường hợp nào.</p>
            </div>

            <div style = {{display:"flex", marginTop:"20px"}}>
                <i class='bx bxs-circle' style={{fontSize:"15px",marginTop:"5px",marginRight:"30px"}}></i>
               <p style ={{fontSize:"20px"}}>Đối với sản phẩm được mua với giá niêm yết: Quý khách vui lòng kiểm tra trước khi thanh toán.
                Trong  trường hợp có lỗi xuất phát từ khâu sản xuất, quý khách có thể đổi size/sản phẩm khác có giá trị tương đương hoặc thấp hơn (khoản chi phí chênh
                 lệch sẽ không được hoàn lại).Trong trường hợp sản phẩm giá cao hơn, quý khách chỉ cần thanh toán thêm giá trị chênh lệch.</p>
            </div>

            <div style = {{display:"flex", marginTop:"20px"}}>
                <i class='bx bxs-circle' style={{fontSize:"15px",marginTop:"5px",marginRight:"30px"}}></i>
               <p style ={{fontSize:"20px"}}>Đối với sản phẩm có lỗi bắt nguồn từ phía khách hàng: chúng tôi sẽ không hỗ trợ đổi hàng</p>
            </div>

            <div style = {{display:"flex", marginTop:"20px"}}>
                <i class='bx bxs-circle' style={{fontSize:"15px",marginTop:"5px",marginRight:"30px"}}></i>
               <p style ={{fontSize:"20px"}}>Chính sách đổi hàng có hiệu lực trong vòng 48 giờ kể từ khi thanh
                toán với điều kiện sản phẩm còn đầy đủ hóa đơn, nhãn mác, sản phẩm không có dấu hiệu đã sử dụng hoặc tác động từ phía khách hàng.</p>
            </div>
      </section>


      <div style ={{textAlign:"center", marginTop:"30px"}}>
      <h1>Liên Hệ</h1>
      </div>

      <section>


          <p  style={{fontSize:"20px",marginTop:"20px",marginLeft:"30px"}}>Nếu Quý khách chưa thấy hài lòng hoặc có thắc mắc khiếu nại
            gì về vấn đề bảo hành, xin Quý khách vui lòng liên hệ tới ADMELORIA
         tại địa chỉ 43 Huỳnh Văn Bánh P.17 Q.Phú Nhuận, TP.HCM, Điện thoại: <span style ={{color:"red"}}> 033.63.1111.7 </span>hoặc địa chỉ email: <span style ={{color:"red"}}>admeloria@gmail.com </span></p>

        <p  style={{fontSize:"20px",marginTop:"20px",marginLeft:"30px"}}>Toàn thể nhân viên ADMELORIA  xin chân thành cám ơn Quý khách hàng đã mua hàng của ADMELORIA.
             Chắc chắn Quý khách hàng sẽ hài lòng về chất lượng dịch vụ và thái độ phục vụ tốt nhất từ ADMELORIA.</p>

      </section>
      <div style={{textAlign:"center", marginTop:"50px"}}>
      <hr style ={{margin:"auto", width:"300px", height:"3px", backgroundColor:"black"}}></hr>
    </div>

    </Helmet>

  ) 
}







export default Refund_policy