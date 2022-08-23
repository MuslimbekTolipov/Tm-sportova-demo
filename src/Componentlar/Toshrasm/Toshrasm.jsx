import React from 'react'
import "./Toshrasm.css"
function Toshrasm({img,nomi,narxi}) {
  return (
    <div className='Toshrasm'>
      <img src={img} alt="" />
      <h3>{nomi}</h3>
      <h4>{narxi}</h4>
    </div>
  )
}

export default Toshrasm