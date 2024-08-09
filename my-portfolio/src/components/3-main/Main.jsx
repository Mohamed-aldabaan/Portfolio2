import myprojects from "../../myprojects";
import "./main.css";

export default function Main() {
  return (
    <main className="flex">
      <section className="left-section  flex">
        <button className="active">All Projects</button>
        <button>HTML & CSS</button>
        <button>JavaScript</button>
        <button>React</button>
        <button>Node & Express</button>
      </section>
      <section className="right-section flex">
        {myprojects.map((item) => (
          <article key={item.id} className="card">
            <img src={item.image} alt={`image-${item.title}`}/>
            <div className="box">
              <h1 className="title">{item.title}</h1>
              <p className="sub-title">
              {item.description}
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
