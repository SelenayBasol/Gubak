import React from "react";
import MultiplePizzas from "../assets/defne2.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> HAKKIMDA</h1>
        <p>
          <h3>Since 2021</h3>
          2021 Mart 31'den beri annişim Süsü ile bu kuruma gönül vermiş bulunmaktayız. Sunmuş olduğumuz tariflerin hepsi dadim Mehmet F. tarafından tadılmış ve onaylanmıştır.
        </p>
      </div>
    </div>
  );
}

export default About;