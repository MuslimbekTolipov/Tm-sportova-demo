import React from 'react'
import "./Oyin.css"
import {oyinlar} from "../oyinlar.js"
import Orasm from '../Orasm/Orasm';

function Oyin() {
  return (
    <div>
        <h2>Уличные спортивные комплексы</h2>
        <div className='Oyin'>
          {oyinlar.map((item,index)=>(
            <Orasm key={index} {...item}/>
          ))}
        </div>
    </div>
  )
}

export default Oyin