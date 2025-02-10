// Dynamic Footer.jsx
import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="footer">© {currentYear} EventManager. All rights reserved.</footer>;
}

export default Footer;