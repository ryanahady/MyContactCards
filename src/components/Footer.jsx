import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright Ryan Ahadizad ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
