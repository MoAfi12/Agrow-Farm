import { Link } from "react-router-dom"
import {BsFillMoonStarsFill} from 'react-icons/bs'
import "../main.css"

import React, { useEffect, useState } from 'react';


const Header = ()=>{
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



    return(
        <>
        <div className="max-w-full relative z-10">
            <nav className={`flex justify-around font-Blinker w-5/4 m-auto items-center py-4 fixed top-0 left-0 right-0 ${scrolled ? 'scrolled' : ''} `}>
              <div className="">
                <h1 className="text-4xl">Agrow <span className="text-[#e89621]">Farm</span> </h1>
              </div>
              <div className="text-white">
                <ul className="flex gap-10 items-center text-xl">
                    <Link className="hover:text-[#e89621] focus-within:text-[#e89621]" to="/">Home</Link>
                    <Link className="hover:text-[#e89621] focus-within:text-[#e89621]" to="about">About</Link>
                    <Link className="hover:text-[#e89621] focus-within:text-[#e89621]" to="services">Services</Link>
                    <Link className="hover:text-[#e89621] focus-within:text-[#e89621]" to="contact">Contact</Link>
                    <BsFillMoonStarsFill className="ml-20 hover:cursor-pointer" />
                </ul>
              </div>
            </nav>
        </div>
        
        </>
    )
}

export default Header