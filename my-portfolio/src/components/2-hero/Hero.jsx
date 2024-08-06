import { useState } from "react";
import "./hero.css";

function Hero() {
  return (
    <section className="hero flex">
      <article className="left-article border">left</article>
      <article className="right-article border">right</article>
    </section>
  );
}

export default Hero;
