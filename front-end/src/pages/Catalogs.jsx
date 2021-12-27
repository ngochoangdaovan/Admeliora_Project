import React, { useCallback, useState, useEffect, useRef } from 'react'

import Helmet from '../components/Helmet'

import InfinityList from '../components/InfinityList'
import axios from 'axios'

import Grid from '../components/Grid'

const Catalog = () => {
  const initFilter = {
    category: [],
    color: [],
    size: [],
  }

  const [product, setProduct] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const respone = await axios.get('http://admeliora.tk/api/products/')
      console.log('products', respone.data.data)
      setProduct(respone.data.data)
     
    }
    fetchProducts()
  }, [])
  console.log('product2', product)
  //   =============================================

  const getAllProducts = () => product

  const getProducts = (count) => {
    const max = products.length - count

    const min = 0

    const start = Math.floor(Math.random() * (max - min) + min)

    return products.slice(start, start + count)
  }

  const productData = {
    getAllProducts,
    getProducts,
  }

  //   =============================================

  const productList = productData.getAllProducts()

  const [products, setProducts] = useState(productList)

  const [filter, setFilter] = useState(initFilter)

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case 'CATEGORY':
          setFilter({
            ...filter,
            category: [...filter.category, item.categorySlug],
          })
          break
        case 'COLOR':
          setFilter({ ...filter, color: [...filter.color, item.color] })
          break
        case 'SIZE':
          setFilter({ ...filter, size: [...filter.size, item.size] })
          break
        default:
      }
    } else {
      switch (type) {
        case 'CATEGORY':
          const newCategory = filter.category.filter(
            (e) => e !== item.categorySlug
          )
          setFilter({ ...filter, category: newCategory })
          break
        case 'COLOR':
          const newColor = filter.color.filter((e) => e !== item.color)
          setFilter({ ...filter, color: newColor })
          break
        case 'SIZE':
          const newSize = filter.size.filter((e) => e !== item.size)
          setFilter({ ...filter, size: newSize })
          break
        default:
      }
    }
  }

  const clearFilter = () => setFilter(initFilter)

  const updateProducts = useCallback(() => {
    let temp = productList

    if (filter.category.length > 0) {
      temp = temp.filter((e) => filter.category.includes(e.categorySlug))
    }

    if (filter.color.length > 0) {
      temp = temp.filter((e) => {
        const check = e.colors.find((color) => filter.color.includes(color))
        return check !== undefined
      })
    }

    if (filter.size.length > 0) {
      temp = temp.filter((e) => {
        const check = e.size.find((size) => filter.size.includes(size))
        return check !== undefined
      })
    }

    setProducts(temp)
  }, [filter, productList])

  useEffect(() => {
    updateProducts()
  }, [updateProducts])

  const filterRef = useRef(null)

  return (
    <Helmet title="Sản phẩm">
      <Grid col={1}>
        <div className="frame_img_catalog">
          <img
            className="main_img_catalog"
            src="./images/img_catalog/main_catalog.jpg"
            alt=""
          />
        </div>
      </Grid>

      <div style={{ marginTop: '100px', marginBottom: '100px' }}>
        {/* <Grid col={2} mdCol={2} smCol={1} gap={10}>
          <div className="frame_main_select_option">
            <Grid col={4}>
              <div className="underline_select_option1">
                <select name="cars" id="cars" className="select_option">
                  <option hidden="hidden">Kích Thước</option>
                  <option value="saab">M</option>
                  <option value="mercedes">L</option>
                  <option value="saab">XL</option>
                  <option value="mercedes">XXL</option>
                </select>
              </div>

              <div className="underline_select_option">
                <select name="cars" id="cars" className="select_option">
                  <option value="saab">Xanh</option>
                  <option value="mercedes">Trắng</option>
                  <option value="saab">Đen</option>
                  <option value="mercedes">Hồng</option>
                </select>
              </div>

              <div className="underline_select_option">
                <select name="cars" id="cars" className="select_option3">
                  <option hidden="hidden">Kích Thước</option>
                  <option value="saab">M</option>
                  <option value="mercedes">L</option>
                  <option value="saab">XL</option>
                  <option value="mercedes">XXL</option>
                </select>
              </div>

              <div className="underline_select_option4">
                <select name="cars" id="cars" className="select_option4">
                  <option value="saab">Xanh</option>
                  <option value="mercedes">Trắng</option>
                  <option value="saab">Đen</option>
                  <option value="mercedes">Hồng</option>
                </select>
              </div>
            </Grid>
          </div>

          <div></div>
        </Grid> */}
      </div>

      <div className="catalog__content">
        <InfinityList data={products} />
      </div>
    </Helmet>
  )
}

export default Catalog
