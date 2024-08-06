import React from "react";
import "./header.css";
import { useState } from "react";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  return (
    <header className=" flex">
      <button
        className="menu"
        onClick={() => {
          setShowModal(true);
        }}
      >
        show model
      </button>
      <div />
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
      {showModal && (
        <div className="fixed">
          <ul className="modal  ">
            <li >
              <button className="border" onClick={() => setShowModal(false)}>close</button>
            </li>
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
        </div>
      )}
    </header>
  );
}
