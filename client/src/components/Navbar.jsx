import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#BE185D] border-b-2 border-[#BE185D] pb-1 hover:text-[#BE185D] transition-colors duration-300"
      : "text-black dark:text-white font-medium hover:text-[#BE185D] transition-colors duration-300 scale-95 duration-200";

  return (
    <nav className="bg-white/80 dark:bg-black/80 backdrop-blur-xl fixed top-0 w-full z-50 bg-surface-container-low flat no shadows">
      <div className="flex justify-between items-center px-12 py-6 max-w-[1920px] mx-auto">
        <Link className="text-2xl font-black tracking-widest text-black dark:text-white font-['Noto_Serif']" to="/">
          FOREVERBUY
        </Link>
        <div className="hidden md:flex gap-8 items-center font-['Noto_Serif'] tracking-tighter uppercase">
          <NavLink className={navLinkClass} to="/" end>NEW ARRIVALS</NavLink>
          <NavLink className={navLinkClass} to="/collection">COLLECTIONS</NavLink>
          <NavLink className={navLinkClass} to="/about">ABOUT</NavLink>
        </div>
        <div className="flex items-center gap-6 text-[#BE185D]">
          <button aria-label="Search" className="hover:text-primary-container transition-colors">
            <span className="material-symbols-outlined text-2xl">search</span>
          </button>
          <button aria-label="Profile" className="hover:text-primary-container transition-colors">
            <span className="material-symbols-outlined text-2xl" data-icon="person">person</span>
          </button>
          <button aria-label="Cart" className="hover:text-primary-container transition-colors relative">
            <span className="material-symbols-outlined text-2xl" data-icon="shopping_bag">shopping_bag</span>
            <span className="absolute -top-1 -right-2 bg-primary text-on-primary text-[10px] w-4 h-4 flex items-center justify-center">2</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
