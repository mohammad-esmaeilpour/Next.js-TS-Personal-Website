import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <div className="flex items-center w-full justify-between">
      {/* Left Section */}
      <nav className="flex gap-12 items-center">
        {/* Logo */}
        <div>logo</div>
        {/* Nav */}
        <ul className="flex items-center">
          <li className="mx-2">
            <Link href={"/"}>Portfolio</Link>
          </li>
          <li className="mx-2">
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
      {/* Right Section */}
      <div className="flex items-center">
        <input type="checkbox" className="toggle toggle-success" />
        <button className="btn btn-sm btn-warning">Gmail</button>
      </div>
    </div>
  );
};

export default Navigation;
