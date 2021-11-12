import React from 'react'
import PropTypes from 'prop-types'
const Size = (props) => {
    const getinfor = (quantity,size_name) =>{
        console.log("infor", quantity,size_name)
    }
    return (
        <div onClick={() => getinfor(props.quantity,props.size_name)}>    
            {props.product_detail_id}

            {props.quantity}

            {props.size_infor}

            {props.size_name}        
        </div>
    )
}

export default Size
