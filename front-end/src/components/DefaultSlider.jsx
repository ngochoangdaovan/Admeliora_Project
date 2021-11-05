import React,{useEffect, useState} from 'react'

const DefaultSlider = ({src}) => {

  const [soucre, setSource] = useState([])
    useEffect(()=>{
        setSource(soucre)
    },[src])
    

    return (
        <div> 

            <div>
                <img style={{height: '400px',width:'400px'}} src={src} alt="" />
                
            </div>
        </div>

    )
}

export default DefaultSlider
