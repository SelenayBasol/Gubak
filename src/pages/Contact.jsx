import React from "react";
import Iletisim from "../assets/defne4.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Iletisim})` }}
      ></div>
      <div className="rightSide">
        <h1> İletişim</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">İsim</label>
          <input name="name" placeholder="Ad ve soyad giriniz" type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Mail giriniz" type="email" />
          <label htmlFor="message">Mesaj</label>
          <textarea
            rows="6"
            placeholder="Mesaj giriniz..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Gönder</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;