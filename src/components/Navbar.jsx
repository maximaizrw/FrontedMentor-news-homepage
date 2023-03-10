import { useState } from "react";
import Logo from "../assets/images/logo.svg";
import IconMenu from "../assets/images/icon-menu.svg";
import IconMenuClose from "../assets/images/icon-menu-close.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className="w-full flex justify-between items-center">
      <div>
        <img src={Logo} className="w-10 md:w-auto" alt="logo" />
      </div>
      <nav
        className={`text-neutral-dark-grayish-blue bg-neutral-off-white h-screen flex flex-col fixed top-0 right-0 w-[60%] py-8 px-8 md:flex-row md:items-center md:justify-end md:static md:h-auto md:px-0 z-50 transition-all duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0 md:flex"
        }`}
      >
        <div className="flex flex-col md:flex-row md:gap-x-8 gap-y-4">
          <div className="flex justify-end">
            <img
              src={IconMenuClose}
              className="relative md:hidden"
              alt="close menu"
              onClick={handleClose}
            />
          </div>
          <a className="hover:text-primary-soft-red" href="#home">
            Home
          </a>
          <a className="hover:text-primary-soft-red" href="#new">
            New
          </a>
          <a className="hover:text-primary-soft-red" href="#popular">
            Popular
          </a>
          <a className="hover:text-primary-soft-red" href="#trending">
            Trending
          </a>
          <a className="hover:text-primary-soft-red" href="#categories">
            Categories
          </a>
        </div>
      </nav>
      <img
        src={IconMenu}
        className="md:hidden"
        alt="open menu"
        onClick={handleToggle}
      />
      {isOpen && (
        <div
          className="fixed w-screen h-screen top-0 left-0 bg-black opacity-60 md:hidden"
          onClick={handleClose}
        />
      )}
    </div>
  );
};

export default Navbar;
