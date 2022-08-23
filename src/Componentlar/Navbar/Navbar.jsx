import React from "react";
import "./Navbar.css";
import Chiziq from "../../datas/chiziq.png";
import Strelka from "../../datas/strelka.png";
function Navbar() {
  return (
    <nav>
      <div className="Navbar">
        <img src={Chiziq} alt="" />
        <a href="">Каталог товаров</a>
        <img src={Strelka} alt="" />
      </div>
      <a href="">Шведские стенки</a>
      <a href="">Уличные комплексы</a>
      <a href="">Турники</a>
      <a href="">Тяжелая атлетика</a>
      <a href="">% Товары со скидкой</a>
    </nav>
  );
}

export default Navbar;
