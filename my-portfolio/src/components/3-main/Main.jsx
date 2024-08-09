import { useState } from "react";
import myprojects from "../../myprojects";
import "./main.css";

export default function Main() {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myprojects);

  const handleclick = (category) => {
    setCurrentActive(category);
    if (category === "all") {
      setArr(myprojects);
    } else {
      setArr(myprojects.filter((item) => item.category === category));
    }
  };
  return (
    <main className="flex">
      <section className="left-section  flex">
        <button
          onClick={() => handleclick("all")}
          className={currentActive === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            handleclick("html & css");
          }}
          className={currentActive === "html & css" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => {
            handleclick("javascript");
          }}
          className={currentActive === "javascript" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            handleclick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React
        </button>
        <button
          onClick={() => {
            setCurrentActive("node");
            setArr(
              myprojects.filter((item) => item.category === "node & express")
            );
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
