import React, {useState} from 'react'
import AliceCarousel from 'react-alice-carousel';

const ProductView = (props) => {
    let api = 'http://54.169.130.83:9092/api/products/images/'
    const slug = props.slug
    const [previewImg, setpreviewImg] = useState(api+slug.images[0])
    
    return (
        <div className="product">
            <div className="product__images">
                <div className="product__images__list">
                    {/* <div className="product__images__list__item" onClick={() => setpreviewImg(api+slug.images[0])}>
                        <img src={api+slug.images[0]} alt="" />
                  
                    </div>
                    <div className="product__images__list__item" onClick={() => setpreviewImg(api+slug.images[0])}>
                        <img src={api+slug.images[1]} alt="" />
                    </div>
                    <div className="product__images__list__item"> 
                    <img src={api+slug.images[2]} alt="" />
                    </div>
                    <div className="product__images__list__item"> 
                    <img src={api+slug.images[3]} alt="" />
                    </div> */}
                    
                </div>
            </div>
        </div>
    )
}

// ProductView.propTypes = {
//     slug: PropTypes.array.isRequired
// }

export default ProductView
