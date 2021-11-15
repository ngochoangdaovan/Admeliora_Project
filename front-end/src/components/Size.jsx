import React from 'react'
import PropTypes from 'prop-types'
const Size = (props) => {

    
    return (
        <div>   
            {props.product_detail_id}

            {props.quantity}

            {props.size_infor}
            <div>
                
                {props.size_name}, 
            </div>
                   
        </div>
    )
}

export default Size
