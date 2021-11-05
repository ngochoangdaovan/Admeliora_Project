import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import { set } from '../redux/product-modal/productModalSlice'

import Button from './Button'

import numberWithCommas from '../utils/numberWithCommas'


const ProductCard = props => {

    const dispatch = useDispatch()
    // console.log('props',props)

    return (
        <div className="product-card">
            <Link to={`/Product/detail/${props.product_line_id}/${props.color_id}`}>
                <div className="product-card__image">
                    <img className = "border_radius1" src={props.image01} alt="" />
                    <img className = "border_radius2" src={props.image02} alt="" />
                </div>
                <h3 className="product-card__name">{props.name}</h3>
                <div className="product-card__price">
                    {numberWithCommas(props.price)}
                    <span className="product-card__price__old">
                        <del>{numberWithCommas(399000)}</del>
                    </span>
                </div>
            </Link>
            <div className="product-card__btn">
                <Button
                    size="sm"    
                    icon="bx bx-cart"
                    animate={true}
                    onClick={() => dispatch(set(props.slug))}
                >
                    chọn mua
                </Button>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    image01: PropTypes.string.isRequired,
    image02: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    product_line_id: PropTypes.number.isRequired,
    color_id: PropTypes.number.isRequired
}

export default ProductCard
