import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center mt-10 pb-10">
      <aside>
        <p className="text-base">
          Copyright © {new Date().getFullYear()} - Mohammad Esmaeilpour. All
          rights reserved.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
