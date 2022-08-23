import React from 'react'
import "./Footer.css"
import Logo from "../../datas/SPORTOVA_logo.png"
import Logotm from "../../datas/logo.png"
function Footer() {
  return (
    <div className='Footer'>
       <img src={Logo} alt="" />
       <p>© ООО «Спортова», 2022</p>
       <img className='tm' src={Logotm} alt="" />
    </div>
  )
}

export default Footer