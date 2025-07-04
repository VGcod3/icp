import React from "react";
import { DORAHACKS_URL } from "../constants";

const Header: React.FC = () => {
  return (
    <header className="bg-[#00000020] text-white h-20 w-full flex align-middle flex-col fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div className="p-4">
        <div className="flex items-center justify-between self-center w-full max-w-6xl mx-auto">
          <img
            src="/src/assets/icp-logo.svg"
            alt="ICP Logo"
            className="md:w-44 w-36 h-5"
          />
          <a
            href={DORAHACKS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
          >
            <img
              src="/src/assets/dora-hacks.svg"
              alt="DoraHacks Logo"
              className="md:w-44 w-36 h-12"
            />
          </a>
        </div>
      </div>
      <div className="w-full min-h-[2px] bg-linear-to-r from-[#FFFFFF60] to-[#5BC8FF60]" />
    </header>
  );
};

export default Header;
