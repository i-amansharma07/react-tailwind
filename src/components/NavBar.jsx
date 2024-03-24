import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  function handleToggle() {
    setToggle((prev) => !prev);
  }
  return (
    <nav className="w-full flex py-6 items-center justify-between">
      <a href="/">
        <img className="w-[124px] h-[32px]" src={logo} alt="hoobank logo" />
      </a>
      <ul className="large-screen hidden list-none sm:flex   justify-end items-center flex-1">
        {navLinks.map((nav, index) => {
          return (
            <li
              key={index}
              className={`font-poppins font-normal cursor-pointer text-white ml-10`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          );
        })}
      </ul>

      <div className="small-screen flex flex-1 justify-end items-center sm:hidden">
        <img
          className="w-[20px] h-[20px] object-contain"
          src={toggle ? close : menu}
          onClick={handleToggle}
          alt="menu icon"
        />
        <div
          className={`${toggle ? "flex" : "hidden"}
         p-2 bg-black-gradient absolute top-20 right-0 mx-4 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="flex  flex-col items-center justify-center list-none  flex-1">
            {navLinks.map((nav, index) => {
              return (
                <li
                  key={index}
                  className={`font-poppins font-normal cursor-pointer text-white  ${
                    index !== navLinks.length - 1 && "mb-4"
                  } `}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
