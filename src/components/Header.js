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
              class="w3-button umami-color"
              href="https://www.toasttab.com/umami-sushi-tx/v3"
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
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#photos">Photos</a>
          </li>
          <li>
            <a href="#hours">Hours</a>
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
