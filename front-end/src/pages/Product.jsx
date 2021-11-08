import React, { useState, useEffect } from 'react'
import Helmet from '../components/Helmet'

import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import axios from 'axios'
import ProductView from '../components/ProductView'
import Section, {  SectionBody,SectionTitle } from '../components/Section'




const Product = (props) => {
  // console.log('props.product_line',props)
  const [productDetail, setProductDetail] = useState({images:[]})
  
  useEffect(()  => {
    const fetchProducts = async () => {
      const respone = await axios.get(`http://admeliora.tk/api/products/detail/${props.match.params.product_line_id}&${props.match.params.color_id}`)
      console.log('data', respone.data.data)
      setProductDetail(respone.data.data)
    }
   fetchProducts()
  }, [])
  // console.log('slug', slug)
  // axios.get(`http://54.169.130.83:9092/api/products/detail/${props.match.params.product_line_id}&${props.match.params.color_id}`)
  // .then((respone)=>{console.log("respone",respone)})
  
  // =======================================
  const [product, setProduct] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const respone = await axios.get('http://admeliora.tk/api/products/')
      // console.log('data', data)
      console.log("datapro", respone.data.data)
      setProduct(respone.data.data)
    }
    fetchProducts()
  }, [])  
  // console.log("product 2",product)
  

  const getAllProducts = () => product

  const getProducts = (count) => {
    const max = product.length - count

    const min = 0

    const start = Math.floor(Math.random() * (max - min) + min)

    return product.slice(start, start + count)
  }

  const productData = {
    getAllProducts,
    getProducts,
  }
  // console.log("productdetail",productDetail)
  return(
    <div >
    <Section style={{marginBottom:'500px'}}>
        
            <ProductView productDetail={productDetail}/>
        
    
    </Section>
    <Section >
        <h1 style ={{textAlign:"center" ,marginTop:"10%",marginBottom:"5%",textDecoration:"underline"}}>
            Khám phá thêm
        </h1>
        
              <SectionBody> 
              <Grid
                      col={4}
                      mdCol={2}
                      smCol={1}
                      gap={20}>
                          {
                            productData.getProducts(8).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    image01 = {'http://admeliora.tk/api/products/images/' + item.images[0]}
                                    image02 = { 'http://admeliora.tk/api/products/images/' + item.images[1]}
                                    name={item.name}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                    color_id={item.color_id}
                                    product_line_id={item.product_line_id}
                                />
                            ))
                        }
                    
                      
                  </Grid>
              </SectionBody>
              </Section>
    </div>
  )
}
export default Product