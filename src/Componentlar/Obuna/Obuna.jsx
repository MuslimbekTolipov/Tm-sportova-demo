import React from 'react'
import "./Obuna.css"
function Obuna() {
  return (
    <div className='Obuna'>
      <div className='yozuv'>
         <h4>Редкие, но очень полезные письма!</h4>
         <p>Подпишись и получи промокод на скидку! Его можно применить ко всем товарам в магазине</p>
      </div>
      <input type="text" placeholder='Ваш e-mail'/>
      <button>Подписаться</button>
    </div>
  )
}

export default Obuna