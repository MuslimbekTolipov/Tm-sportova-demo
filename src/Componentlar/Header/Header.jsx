import React from 'react'
import "./Header.css"
import Logo from "../../datas/SPORTOVA_logo.png"
import Btn from "../../datas/Union.png"
import Btn2 from "../../datas/empty.png"
import Btn3 from "../../datas/Vector.png"
function Header() {
  return (
    <header>
      <img src={Logo} alt="" />
      <input type="text" placeholder='Поиск по сайту' />
      <div className='Btn'>
      <button> <img src={Btn} alt="" /></button>
      <button> <img src={Btn2} alt="" /></button>
      <button> <img src={Btn3} alt="" />Karzinka</button>
       </div>
    </header>

  )
}

export default Header