import { useState } from "react";
import myprojects from "../../myprojects";
import "./main.css";

export default function Main() {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myprojects);
  return (
    <main className="flex">
      <section className="left-section  flex">
        <button
          onClick={() => {
            setCurrentActive("all");
            setArr(myprojects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            setCurrentActive("html & css");
            setArr(myprojects.filter((item) => item.category === "html & css"));
          }}
          className={currentActive === "html & css" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => {
            setCurrentActive("javascript");
            setArr(myprojects.filter((item) => item.category === "javascript"));
          }}
          className={currentActive === "javascript" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            setCurrentActive("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React
        </button>
        <button
          onClick={() => {
            setCurrentActive("node");
          }}
          className={currentActive === "node" ? "active" : null}
        >
          Node & Express
        </button>
      </section>
      <section className="right-section flex">
        {arr.map((item) => (
          <article key={item.id} className="card">
            <img src={item.image} alt={`image-${item.title}`} />
            <div className="box">
              <h1 className="title">{item.title}</h1>
              <p className="sub-title">{item.description}</p>
              <div className="flex icons">
                <li>
                  {" "}
                  <a href="" className="icon-link"></a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="https://github.com/Mohamed-aldabaan"
                    className="icon-github-square"
                    target="_blank"
                  ></a>{" "}
                </li>
                <li className="flex">
                  {" "}
                  more <a href="" className="icon-arrow-right"></a>
                </li>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
