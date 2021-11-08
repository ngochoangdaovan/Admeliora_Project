import React, {useEffect, useState} from 'react'
import Grid from '../components/Grid'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import ImageSlider from './ImageSlider';


const ProductView = (props) => {
    let imageApi = 'http://admeliora.tk/api/products/images/'
  

    const options = [
        'XL', '2XL', '3XL'
      ];
      const numbers = [
        '1', '2', '3', '4','5','6','7','8','9'
      ];

    const [productDetail, setProductDetail] = useState({images:[],defaultImage: null})
    useEffect(()=>{
        setProductDetail(props.productDetail)
    },[props])

    console.log("props", props)
    
    const [previewImg, setPreviewImg] = useState(imageApi+props.productDetail.defaultImage)
    // console.log('previewimg',props.productDetail.defaultImage)

    useEffect(()=>{
        setPreviewImg(imageApi+props.productDetail.defaultImage)
    },[imageApi+props.productDetail.defaultImage])
   
    return (
        <div className="products">               
           
                <Grid   col={2}
                      mdCol={2} 
                      smCol={1}
                      gap={10}
                    >
                <div>
                    <div className="product_images_main">
                    < img className ="main_img" src={previewImg} alt=""/>
                    </div>
                     <div className="list_images">
                         <img  className = "children_img"  onClick={()=> setPreviewImg(imageApi+props.productDetail.defaultImage)} src={imageApi+props.productDetail.defaultImage} alt=""/>
                        {productDetail.images.map((item,index)=>(                 
                            <ImageSlider 
                                key={index}
                                src={imageApi+item} setPreviewImg={setPreviewImg} className ="image">                         
                            </ImageSlider>                      
                        ))}        
                    </div>  

                </div>


                <div className = "second_frame">
                    <div className="product_infor">
                    <div className="product_infor_title">
                        <h1>{productDetail.name}</h1>
                    </div>
                    <div className="product_infor_category">
                        <p>{productDetail.category}</p>
                    </div>


                    <div className = "dropdown_frame">
                    <Dropdown  options={options} placeholder="Size"  className ="dropdown_size" >
                    </Dropdown>
                    <Dropdown  options={numbers} placeholder="Số lượng" className ="dropdown_number" >
                    </Dropdown>
                    </div>
                    
                        
                    <div className="product_infor_price">
                        {productDetail.price + " " + "VND"}
                    </div>
                    <div className = "button_frame">
                    <button className = "button_enter">Thêm Vào Giỏ Hàng</button>
                    </div>

                    <div className="description">
                        <h3 className = "font_size_description">Mô tả</h3>
                        <p className = "font_size_description">{"Dòng áo"+" : "+ productDetail.product_line}</p>
                        <p className = "font_size_description"> 
                            {"Color"+" : "+productDetail.color}
                        </p>
                        <p className = "font_size_description">Size: S, M, L, XL</p>
                        <h3 className = "font_size_description">Thông điệp : </h3>
                        <p className = "font_size_description">“Do what you want while you can“ đây
                             là cụm từ các bạn đã quá quen
                              rồi đúng không nào. Trên Dreamer
                            Tee season 2 lần này, AD để dòng
                            chữ này cùng với những hình bộ
                                xương mang ý nghĩa chúng ta hãy
                                làm những điều mính thích trước
                                khi quá trễ, và hãy cháy hết mình
                                 với tuổi trẻ này. “Dreammer“ là người
                                 hay mơ mộng, nhưng đừng suốt ngày cứ 
                                mơ mộng hãy biến giấc mơ của mình thành
                             hiện thực. Thêm nữa, làm gì cũng sẽ có khó
                              khăn với thử thách nên cứ “I don’t give
                               a fuck“ và bước tiếp. 𝙂</p>
                    </div>                   
        
                </div>  
                </div>               
            </Grid>    
        </div>           
    )
} 


export default ProductView