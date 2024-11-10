import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-[#550707] py-7 px-6 border-b border-[#eaeaea]">
      <nav className="flex justify-center">
        <div>
        <ul className="list-none flex flex-wrap gap-10 md:gap-6 lg:gap-24 p-0 m-0 items-center">
          <li>
            <Link href="/" className="text-[#ffcde3] hover:text-[#f57c9e] no-underline font-medium text-lg lg:text-xl transition-colors duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/About" className="text-[#ffcde3] hover:text-[#f57c9e] no-underline font-medium text-lg lg:text-xl transition-colors duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/Contact" className="text-[#ffcde3] hover:text-[#f57c9e] no-underline font-medium text-lg lg:text-xl transition-colors duration-300">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/Services" className="text-[#ffcde3] hover:text-[#f57c9e] no-underline font-medium text-lg lg:text-xl transition-colors duration-300">
              Services
            </Link>
          </li>
        </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
