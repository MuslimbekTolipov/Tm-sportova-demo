import React from 'react'
import "./Krasm.css"
function Krasm({img,nomi}) {
  return (
    <div className='Krasm'>
      <img src={img} alt="" />
      <h4>{nomi}</h4>
    </div>
  )
}

export default Krasm