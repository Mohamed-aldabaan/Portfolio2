import "./main.css";

export default function Main() {
  return (
    <main className="flex">
      <section className="left-section  flex">
        <button>All Projects</button>
        <button>HTML & CSS</button>
        <button>JavaScript</button>
        <button>React</button>
        <button>Node & Express</button>
      </section>
      <section className="right-section flex">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
          <article key={index} className="card">
            <img src="/p1.jpg" alt="projekt-1" />
            <div className="box">
              <h1 className="title">First Project</h1>
              <p className="sub-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                quod.
              </p>
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
