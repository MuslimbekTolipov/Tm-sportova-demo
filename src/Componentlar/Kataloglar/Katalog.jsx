import React from 'react'
import "./Katalog.css"
import {kataloglar} from ".././kataloglar.js"
import Krasm from '../Katalograsm/Krasm'
function Katalog() {
  return (
    <div className='Katalog'>
         {kataloglar.map((item,index)=>(
            <Krasm key={index} {...item}/>
         ))}
    </div>
  )
}

export default Katalog