import React,{useEffect, useState} from 'react'

const ImageSlider = ({src,setPreviewImg}) => {


    return (
        
        <div onClick={()=> setPreviewImg(src)}> 
            <img className = "children_img"  src={src} alt="" />
                
        </div>

    )
}

export default ImageSlider
