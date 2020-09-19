import React from "react";
import LogoImage from "../assets/logo_white.svg";

function Contact() {
  return (
    <article id="contact">
      <h2 className="major">Contact</h2>

      <iframe
        title="contact-map"
        width="100%"
        height="400"
        frameBorder="0"
        style={{ border: "none" }}
        src="https://www.google.com/maps/embed/v1/place?q=Umami%20sushi%20san%20marco&key=AIzaSyARG5se_n-LbeItuvVBXp67Jp91cvv0Qdg"
        allowFullScreen
      ></iframe>
      <hr />
      <ul className="icons">
        <li>
          <a
            href="https://www.facebook.com/sanmarcosumami"
            className="icon brands fa-facebook-f"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/umamisanmarcos"
            className="icon brands fa-instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/umamisanmarcos"
            className="icon brands fa-yelp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="label">Yelp</span>
          </a>
        </li>
        <li>
          <a
            href="mailto:umamisanmarcos@gmail.com"
            className="fas fa-envelope"
            rel="noopener noreferrer"
          />
        </li>
        <li>
          <a
            href="tel:512-667-7903"
            className="fas fa-phone"
            rel="noopener noreferrer"
          />
        </li>
      </ul>
      <img className="image right" src={LogoImage} alt="logo" />
    </article>
  );
}

export default Contact;
