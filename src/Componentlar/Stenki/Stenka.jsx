import React from 'react'
import "./Stenka.css"
import {Ustunlar} from "../Matn.js"
import Rasm from "../Rasm/Rasm"
function Stenka() {
  return (
    <div>
      <h2>Шведские стенки</h2>
      <div className='Stenka'>
        {Ustunlar.map((item,index)=>(
          <Rasm key={index}  {...item}/>
        ))}
      </div>

    </div>
  )
}

export default Stenka