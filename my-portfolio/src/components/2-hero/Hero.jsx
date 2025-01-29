import "./hero.css";

function Hero({id}) {
  return (
    <section id={id} className="hero flex">
      <article className="left-article">
        <div className="profile-parent">
          <img className="profile" src="/p31.webp" alt="profilbild" />
          <h2 className="title">
          Hallo, mein Name ist Mohamed Al Dabaan
          </h2>
          <p className="sub-title">
          Ich bin ein Webentwickler mit Leidenschaft für moderne Technologien und cleanes Design. Während meiner Weiterbildung habe ich umfassende Erfahrung in Frontend- und Backend-Entwicklung gesammelt.
          </p>
          <p className="sub-title">
          Ich liebe es, intuitive und performante Webanwendungen zu bauen, die echte Probleme lösen. Let’s create something awesome! 🚀
          </p>
          <div className="icons flex">
            <a href="https://github.com/Mohamed-aldabaan" target="_blank" className="icon icon-github-square"></a>
            <a href="https://www.linkedin.com/in/mohamed-al-dabaan/" target="_blank" className="icon icon-linkedin-square"></a>
            <a href="" className="icon icon-instagram"></a>
            <a href="" className="icon icon-x"></a>
          </div>
        </div>
      </article>
      <article className="right-article border">animation</article>
    </section>
  );
}

export default Hero;
