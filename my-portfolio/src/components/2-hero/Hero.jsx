import { useState } from "react";
import "./hero.css";

function Hero() {
  return (
    <section className="hero flex">
      <article className="left-article">
        <div className="profile-parent">
          <img className="profile" src="/profil.jpg" alt="profil-bild" />
          <h2 className="title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            tempore odio architecto expedita, praesentium nulla magni reiciendis
          </h2>
          <p className="sub-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            inventore dolorum quidem nam fugiat ratione tempore ipsa facere
            velit eius. Quia velit harum maiores! Nesciunt rem minus laudantium
            eligendi atque voluptatibus minima exercitationem quis optio nam, id
            ullam dolorem
          </p>
          <div className="icons flex">
            <a className="icon icon-github-square"></a>
            <a className="icon icon-linkedin-square"></a>
            <a className="icon icon-instagram"></a>
            <a className="icon icon-x"></a>
          </div>
        </div>
      </article>
      <article className="right-article border">animation</article>
    </section>
  );
}

export default Hero;
