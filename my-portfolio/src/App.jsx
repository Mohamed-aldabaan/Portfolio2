import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Zertifikat from "./components/4-zertifikat/Zertifikat";
import Contact from "./components/5-contact/Contact";
import Footer from "./components/6-footer/Footer";

function App() {
  return (
    <div className="container" id="up">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Zertifikat />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
      <a href="#up">

      <button className="icon-keyboard_arrow_up scroll2up"></button>
      </a>
    </div>
  );
}

export default App;
