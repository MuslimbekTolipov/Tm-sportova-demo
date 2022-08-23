import React from "react";
import "./Banner.css";
import Rasm from "../../datas/rasm.png";
import Rasm2 from "../../datas/rasm2.png";
import Rasm3 from "../../datas/rasm3.png";
function Banner() {
  return (
    <div className="rasm">
      <div className="kota">
        <h1>Соберите шведскую стенку по своему желанию!</h1>
        <p>
          Проснувшись однажды утром после беспокойного сна, Грегор Замза
          обнаружил, что он у себя в постели превратился в страшное насекомое.
        </p>
        <button>Перейти в конструктор</button>
      </div>
      <div className="box">
        <div className="kichik1">
          <h3>Собственное швейное производство</h3>
          <p>Приглашаемк сотрудничеству</p>
          <b>Подробнее </b>
        </div>
        <div className="kichik">
          <h3>Посетите наш шоу-рум!</h3>
          <p>Н.Новгород, ул.Народная 20Ежедневно с 9:00 до 19:00</p>
          <b>Подробнее</b>
        </div>
      </div>
    </div>
  );
}

export default Banner;
