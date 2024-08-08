import './contact.css';
export default function Contact() {
  return (
    <section className="contact flex">
      <h1 className='icon-envelope'> contact me</h1>
      <p> Let us get in touch! Send me a message:</p>
      <div className="flex">
        <form action="" className="flex">
          <input type="text" name="text" id="text" placeholder='Your name' />
          <input type="email" id="email" placeholder='Your E-mail' />
          <textarea name="message" id="" rows={5} placeholder='Your message'/> 
          <button>Send</button>
        </form>
        
        <div className="animation">Animation</div>
      </div>
    </section>
  )
}
