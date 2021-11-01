import React, { useCallback, useState, useEffect, useRef } from 'react'
import Helmet from '../components/Helmet'
import Section, { SectionBody, SectionTitle } from '../components/Section'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import ProductView from '../components/ProductView'
import axios from 'axios'

const Product = ({ data }) => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products/')
      console.log('data', data)
      setProduct(data)
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

  return (
    <Helmet title="Trang chủ">
      <Section>
        <h1 style={{ textAlign: 'center', margin: '40px' }}>Related Product</h1>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(8).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  )
}

export default Product