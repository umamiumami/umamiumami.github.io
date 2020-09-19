import React from "react";

function Header() {
  return (
    <header id="header">
      <div className="logo">
        <i className="fas fa-fish fa-2x"></i>
      </div>
      <div className="content">
        <div className="inner">
          <h1>Umami Sushi</h1>
          <p>
            <a
              id="order-online"
              className="w3-button umami-color"
              href="https://www.toasttab.com/umami-sushi-tx/v3"
              rel="noopener noreferrer"
              target="_blank"
            >
              ORDER ONLINE
            </a>
          </p>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#intro">Menu</a>
          </li>
          <li>
            <a href="#work">Photos</a>
          </li>
          <li>
            <a href="#about">Hours</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
