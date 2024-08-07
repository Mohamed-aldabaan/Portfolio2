import React from 'react'
import './main.css';

export default function Main() {
  return (
    <main className='flex'>
      <section className='left-section flex'>
        <button>All Projects</button>
        <button>HTML & CSS</button>
        <button>JavaScript</button>
        <button>React</button>
        <button>Node & Express</button>
      </section>
      <section className='right-section border'>
        <article className='card'>
          <img src="/p1.jpg" alt="" />
          <div className="box">
            <h1 className="title">First Project</h1>
            <p className="sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod.</p>
            <div className="flex icons">
              <li > <a href="" className="icon-link"></a> </li>
              <li > <a href="https://github.com/Mohamed-aldabaan" className="icon-github-square" target='_blank'></a> </li>
              <li > more <a href="" className="icon-arrow-right"></a></li>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}
