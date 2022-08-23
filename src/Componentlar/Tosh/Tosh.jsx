import React from 'react'
import "./Tosh.css"
import {toshlar} from "../toshlar.js"
import Toshrasm from '../Toshrasm/Toshrasm'
function Tosh() {
  return (
    <div className='Tosh'>
      {toshlar.map((item,index)=>(
        <Toshrasm key={index} {...item}/>
      ))}
    </div>
  )
}

export default Tosh