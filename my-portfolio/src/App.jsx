import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import PDFGallery  from "./components/4-zertifikat/Zertifikat1";
import Contact from "./components/5-contact/Contact";
import Footer from "./components/6-footer/Footer";

function App() {
  
  return (
    <div className="container" id="up">
      <Header />
      <Hero id="hero"/>
      <div className="divider" />
      <Main id="main"/>
      <div className="divider" />
      <PDFGallery id="certificates"/>
      <div className="divider" />
      <Contact id="contact"/>
      <div className="divider" />
      <Footer />
      <a href="#up">
      <button className="icon-keyboard_arrow_up scroll2up"></button>
      </a>
    </div>
  );
}

export default App;
