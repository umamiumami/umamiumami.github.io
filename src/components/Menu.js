import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import MenuFile from "../assets/menu.pdf";
import LogoImage from "../assets/logo_white.svg";

function Menu() {
  const [numPages, setNumPages] = useState(null);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <article id="intro">
      <h2 className="major">Menu</h2>
      <h5>
        <a href={MenuFile} target="_blank" rel="noopener noreferrer">
          View in Full Screen
        </a>
      </h5>
      <Document
        file={MenuFile}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            loading="loading menu..."
          />
        ))}
      </Document>
      <img className="image right" src={LogoImage} alt="logo" />
    </article>
  );
}

export default Menu;
