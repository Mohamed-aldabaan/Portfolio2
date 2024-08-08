import './contact.css';
export default function Contact() {
  return (
    <section className="contact flex">
      <h1 className='icon-envelope'> contact me</h1>
      <p> Let us get in touch! Send me a message:</p>
      <div className="flex">
        <form action="" className="flex">
          <input type="text" name="text" id="text" placeholder='Your name' autoComplete="off" required />
          <input type="email" id="email" placeholder='Your E-mail' autoComplete="off" required/>
          <textarea name="message" id="message" rows={5} placeholder='Your message' autoComplete="off" required></textarea>
          <button className='submit'>Send</button>
        </form>
        
        <div className="animation">Animation</div>
      </div>
    </section>
  )
}
