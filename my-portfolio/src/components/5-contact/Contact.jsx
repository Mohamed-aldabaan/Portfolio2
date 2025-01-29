import './contact.css';
import Lottie from "lottie-react";
import contactAnimation from "../../animation/contact.json";
export default function Contact({id}) {
  return (
    <section id={id} className="contact flex">
      <h1 className='icon-envelope'> contact me</h1>
      <p> Lassen Sie uns in Kontakt treten! Senden Sie mir eine Nachricht:</p>
      <div className="flex">
        <form action="" className="flex">
          <input type="text" name="text" id="text" placeholder='Your name' autoComplete="off" required />
          <input type="email" id="email" placeholder='Your E-mail' autoComplete="off" required/>
          <textarea name="message" id="message" rows={5} placeholder='Your message' autoComplete="off" required></textarea>
          <button className='submit'>Send</button>
        </form>
        
        <div className="animation">
        <Lottie animationData={contactAnimation} />
        </div>
      </div>
    </section>
  )
}
