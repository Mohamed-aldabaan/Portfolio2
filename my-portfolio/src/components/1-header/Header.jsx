import React from "react";
import "./header.css";
import { useState } from "react";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  return (
    <header className=" flex">
      <button
        className="menu icon-menu"
        onClick={() => {
          setShowModal(true);
        }}
      />
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
      <button className="mode">
        <span className="icon-moon-o" />
      </button>
      {showModal && (
        <div className="fixed">
          <ul className="modal  ">
            <li>
              <button
                className="icon-close"
                onClick={() => setShowModal(false)}
              />
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
