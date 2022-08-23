import React from 'react'
import "./Rasm.css"
function Rasm({img,nomi,narxi}) {
  return (
    <div className='Ustun'>
        <img src={img} alt="" />
        <h3>{nomi}</h3>
        <h4 className='price'>{narxi}</h4>
    </div>
  )
}

export default Rasm;