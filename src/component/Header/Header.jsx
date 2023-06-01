import React from "react";
import Typewriter from "typewriter-effect";
import "../Header/Header.css";
import ImageHeader from "../asset/image_header2.png";
// import Button from "react-bootstrap/Button";


const Header = () => {

  return (
    <>
      <div className="image">
        <div className="Header-text">
          <div className="Header-text2">
            <img src={ImageHeader} alt="" />
            <h2>ONLINE SHOPPING TIME</h2>
          </div>
          <div className="Header-position">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: [
                  "Buat Hari Khusus Anda Lebih Spesial dengan Gift Box 😊",
                  "Berikan Hadiah yang Berarti dengan Gift Box Pilihan Kami🎁",
                  "Hadiah yang Tepat untuk Semua Kesempatan, Temukan di Sini🛍️",
                  "Berikan Kejutan Terbaik dengan Gift Box Berkualitas Tinggi👌",
                  "Hadiah yang Unik dan Berkesan untuk Orang Tersayangmu🥰",
                  "Berikan Hadiah Tak Terlupakan dengan Gift Box Kami😍"
                ]
              }}
            />
          </div>
        </div>
        <div className="background_hover">
          <div className="background_hoverButton">
            <a href="wa.link/dqawq4">Yuk tanya tanya kak 📞</a>
          </div>
        </div>
      </div>

    </>
  );
};



export default Header;