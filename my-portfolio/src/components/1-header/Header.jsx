// import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header className=" flex">
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Study</a>
          </li>
          <li>
            <a href="">Hobbies</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button>light</button>
    </header>
  );
}
