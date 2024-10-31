
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="container pt-8">
      <div className="flex justify-between items-center">


        <div className="border-b  rounded-full border bg-slate-900 hidden sm:block w-full">
          <div className="container py-4">
            <div className="flex justify-between items-center">

              {/* Social Media Icons */}
              <div className="hidden lg:flex gap-2">
                <a href="https://www.facebook.com/mrsarimofficial" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="header_top_icon_wrapper" />
                </a>
                <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                  <BsTwitter className="header_top_icon_wrapper" />
                </a>
                <a href="https://www.instagram.com/mrsarimofficial" target="_blank" rel="noopener noreferrer">
                  <BsInstagram className="header_top_icon_wrapper" />
                </a>
                <a href="https://www.linkedin.com/in/sarimofficial" target="_blank" rel="noopener noreferrer">
                  <BsLinkedin className="header_top_icon_wrapper" />
                </a>
              </div>


              {/* Navigation Links */}
              <ul className="gap-10 lg:gap-16 hidden md:flex">
                <li className="menuLink"><a href="#hero">Home</a></li>
                <li className="menuLink"><a href="#about">About</a></li>
                <li className="menuLink"><a href="#projects">Projects</a></li>
                <li className="menuLink"><a href="#skills">Skills</a></li>
                <li className="menuLink"><a href="#contact">Contact</a></li>
              </ul>

              {/* Mobile Menu Icon */}
              <AiOutlineMenu className="md:hidden" size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
