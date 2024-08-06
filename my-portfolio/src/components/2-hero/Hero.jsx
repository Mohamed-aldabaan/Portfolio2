import { useState } from "react";
import "./hero.css";

function Hero() {
  return (
    <section className="hero flex">
      <article className="left-article border">
        <div className="profile-parent">
          <img src="/profil.jpg" alt="profil-bild" />
        </div>
      </article>
      <article className="right-article border">animation</article>
    </section>
  );
}

export default Hero;
