import React from 'react'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const handleNavClick = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false); 
  };

  const links = navLinks.map(({ label, id }) => (
    <li key={id}>
      <a
        href={`#${id}`}
        onClick={handleNavClick(id)}
        className={`font-medium md:font-light md:text-lg ${
          label === "Contact"
            ? "text-red-500 hover:text-red-700"
            : "text-matte hover:text-highlight"
        } hover:cursor-pointer`}
      >
        {label}
      </a>
    </li>
  ));

  const toggleTheme = () => {
  const root = document.documentElement;
  const isDark = root.classList.contains("dark");

  if (isDark) {
    root.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
};


  const mainMenu = (
    <nav className="relative z-40 bg-card md:sticky top-0 w-full flex justify-between p-5 text-sm shadow-sm"
    style={{height:"4rem"}}>
      <div className='hidden md:block'>Brand Logo</div>
      
      <div className="hidden md:flex flex-1 md:max-w-3xl justify-center">
        <ul className="flex flex-1 justify-between">
          {links}
        </ul>
      </div>

      <button className='hidden md:block' onClick={toggleTheme}>
        <svg className='h-full fill-current text-black dark:text-highlight' viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <title>dark-mode-solid</title>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Icons">
              <g>
                <rect width="48" height="48" fill="none"/>
                <g>
                  <path d="M14,24A10,10,0,0,0,24,34V14A10,10,0,0,0,14,24Z"/>
                  <path d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2ZM6,24A18.1,18.1,0,0,1,24,6v8a10,10,0,0,1,0,20v8A18.1,18.1,0,0,1,6,24Z"/>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </button>
      <div className="flex md:hidden flex-1 items-center justify-between p-1">
        <div>Branding</div>
        <button onClick={() => { setIsOpen(!isOpen) }}>
          <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="#000000"/>
          </svg>
        </button>
      </div>
    </nav>
  )

  const openMenu = (
    <div className={`fixed inset-0 bg-surface w-full h-screen p-2 z-50 transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex flex-1 w-full justify-end items-center p-2">
        <button onClick={() => { setIsOpen(!isOpen) }}>
          <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 5L5 19M5.00001 5L19 19" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className="flex h-full flex-col justify-start items-start ml-8">
        <ul className="flex flex-1 flex-col justify-start gap-6 gap-y-10 text-3xl bold">
          {links}
        </ul>
      </div>
    </div>
  )

  return (
    <>
      {mainMenu}
      {openMenu}
    </>
  )
}

export default Header
