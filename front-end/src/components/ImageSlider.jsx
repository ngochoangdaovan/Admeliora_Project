import React,{useEffect, useState} from 'react'

const ImageSlider = ({src}) => {
    const [soucre, setSource] = useState([])
    useEffect(()=>{
        setSource(soucre)
    },[src])
    

    return (
        <div> 

            <div>
                <img style={{height: '50px',width:'50px'}} src={src} alt="" />
                
            </div>
        </div>

    )
}

export default ImageSlider
