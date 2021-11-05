import React, {useEffect, useState} from 'react'
import DefaultSlider from './DefaultSlider'
import ImageSlider from './ImageSlider'



const ProductView = (props) => {

    let right_arrow = '../assets/images/rigt-arrow.svg'
    let left_arrow = '../assets/images/left-arrow.svg'

    const [productDetail, setProductDetail] = useState({images:[],defaultImage: null})
    useEffect(()=>{
        setProductDetail(props.productDetail)
    },[props])

    console.log("ProductView props", props)
    console.log("product detail", productDetail)
    let api = 'http://54.169.130.83:9092/api/products/images/'


    return (
        <div className="slider">
               
            <div style={{}}>               
                <i class='bx bxs-left-arrow' ></i>                               
                <DefaultSlider 
                    src={api+productDetail.defaultImage}>
                    
                </DefaultSlider>
                <i class='bx bxs-right-arrow'></i>
                
            </div>
            <div>
                {productDetail.images.map((item,index)=>(                 
                <ImageSlider 
                key={index}
                src={api+item}  className ="image"> 
                
                </ImageSlider>  
                  
                ))}        
            </div>  

        </div>
            
    )
} 


export default ProductView
