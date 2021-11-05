import React, { useState, useEffect } from 'react'
import Helmet from '../components/Helmet'
import Section, {SectionBody} from '../components/Section'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import axios from 'axios'
// import PropTypes from 'prop-types'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



const Product = (props) => {
  // console.log('props.product_line',props)
  const [slug, setslug] = useState([])
  console.log('props', props)
  useEffect(() => {
    const fetchProducts = async () => {
      const respone = await axios.get(`http://54.169.130.83:9092/api/products/detail/${props.match.params.product_line_id}&${props.match.params.color_id}`)
      // console.log('data', data)
      
      setslug(respone.data.data)
    }
    fetchProducts()
  }, [])
  // =======================================
  const [product, setProduct] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const respone = await axios.get('http://54.169.130.83:9092/api/products/')
      // console.log('data', data)
      setProduct(respone.data.data)
    }
    fetchProducts()
  }, [])  
  

  useEffect(() => {
    console.log(product)
  }, [product])


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


//   const handleDragStart = (e) => e.preventDefault();

// const items = [
//   <img src="./image/products/product-01a.jpg" onDragStart={handleDragStart} />,
//   <img src="" onDragStart={handleDragStart} />,
//   <img src="" onDragStart={handleDragStart} />,
// ];


  return(
    <Helmet title= {slug.name}>

    <section>

    {/* <AliceCarousel mouseTracking items={items} /> */}
      
    </section>

  <Section>
         <h1 style = {{textAlign:"center", margin:"40px"}}>Khám phá thêm</h1>
         
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
                                    image01 = {'http://54.169.130.83:9092/api/products/images/' + item.images[0]}
                                    image02 = { 'http://54.169.130.83:9092/api/products/images/' + item.images[1]}
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
    </Helmet>
  )
}
export default Product