import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center mt-44 pb-10 max-w-lg:px-10 flex justify-between max-w-7xl mx-auto flex-wrap">
      <aside>
        <p className="text-base">
          Copyright © {new Date().getFullYear()} - Mohammad Esmaeilpour. All
          rights reserved.
        </p>
      </aside>

      {/* <div className="rating">
        Rate me
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          defaultChecked
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
      </div> */}
    </footer>
  );
};

export default Footer;
