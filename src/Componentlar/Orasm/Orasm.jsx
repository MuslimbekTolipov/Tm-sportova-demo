import React from 'react'
import "./Orasm.css"
function Orasm({img,nomi,narxi}) {
  return (
    <div className='Orasm'>
        <img src={img} alt="" />
        <h3>{nomi}</h3>
         <h4>{narxi}</h4>
    </div>
  )
}

export default Orasm