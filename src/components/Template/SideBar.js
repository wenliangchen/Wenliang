import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Wenliang (Wiliam) Chen</h2>
        <p><a href="mailto:wiliamchensde@outlook.com">wiliamchensde@outlook.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Wenliang. I like building things.
        passionate about writing code and solving technical problem through the
        development of creative and innovative software. and my skills and knowledge were excellent,
        epically in the Backend development, Spring Boot, Python and React.Js.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Wenliang Chen <Link to="/">wenliang.me</Link>.</p>
    </section>
  </section>
);

export default SideBar;
