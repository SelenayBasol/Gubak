import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/background.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h3> DEFNE'NİN GUBAA </h3>
        <p> GUBAKLI BEBİŞLER İÇİN TARİFLER</p>
        <Link to="/menu">
          <button> Tariflerimiz </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;