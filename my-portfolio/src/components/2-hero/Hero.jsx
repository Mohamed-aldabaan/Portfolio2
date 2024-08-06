import { useState } from "react";
import "./hero.css";

function Hero() {
  return (
    <section className="hero flex">
      <article className="left-article border">
        <div className="profile-parent">
          <img className="profile" src="/profil.jpg" alt="profil-bild" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            tempore odio architecto expedita, praesentium nulla magni reiciendis
            dolorem omnis, vero exercitationem nesciunt quis fugiat quia.
            Recusandae delectus sint molestias provident.
          </p>
        </div>
      </article>
      <article className="right-article border">animation</article>
    </section>
  );
}

export default Hero;
