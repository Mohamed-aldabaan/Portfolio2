import { useState } from "react";
import "./hero.css";

function Hero() {
  return (
    <section className="hero flex">
      <article className="left-article border">
        <div className="profile-parent">
          <img className="profile" src="/profil.jpg" alt="profil-bild" />
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            tempore odio architecto expedita, praesentium nulla magni reiciendis
            dolorem omnis, vero exercitationem nesciunt quis fugiat quia.
            Recusandae delectus sint molestias provident.
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            inventore dolorum quidem nam fugiat ratione tempore ipsa facere
            velit eius. Quia velit harum maiores! Nesciunt rem minus laudantium
            eligendi atque voluptatibus minima exercitationem quis optio nam, id
            ullam dolorem necessitatibus neque dolorum, tempora ab repudiandae
            natus incidunt veniam suscipit praesentium? Repudiandae labore, sint
            voluptatibus repellendus alias amet quia eos officia!
          </p>
        </div>
      </article>
      <article className="right-article border">animation</article>
    </section>
  );
}

export default Hero;
