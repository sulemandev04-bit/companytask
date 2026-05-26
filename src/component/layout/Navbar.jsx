import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Main Navigation Links Data structure (PentaKuhl has sub-links now)
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '/industries' },
    { 
      name: 'PentaKuhl', 
      isDropdown: true,
      subLinks: [
        { name: 'Parcel Shipper', href: '/pentakuhl/parcelshipper' },
        { name: 'Pallet Shipper', href: '/pentakuhl/palletshipper' }
      ]
    },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 font-sans sticky top-0 z-50 shadow-sm select-none">
      {/* Centered navigation container */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 h-20 flex items-center justify-between md:justify-center relative">
        
        {/* --- DESKTOP NAV LINKS --- */}
        <ul className="hidden md:flex items-center gap-x-8 h-full">
          {navLinks.map((link, index) => {
            if (link.isDropdown) {
              return (
                <li key={index} className="h-full flex items-center relative">
                  {/* Native popup panel without breaking active states */}
                  <details className="relative group/popup [&_summary::-webkit-details-marker]:hidden h-full flex items-center">
                    <summary className="flex items-center gap-1 text-sm font-semibold tracking-wide uppercase text-[#555555] hover:text-[#f37023] transition-colors duration-200 cursor-pointer list-none select-none">
                      <span>Penta<span className="text-sky-500 font-bold">KÜHL</span></span>
                      <svg className="w-4 h-4 text-neutral-400 transition-transform duration-200 group-open/popup:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    
                    {/* Absolute Pop-up box for sub links */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%-10px)] w-48 bg-white border border-gray-100 rounded-2xl shadow-xl py-2 z-50 animate-fadeIn">
                      {link.subLinks.map((sub, sIdx) => (
                        <a
                          key={sIdx}
                          href={sub.href}
                          className="block px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-600 hover:bg-neutral-50 hover:text-[#f37023] transition-colors"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  </details>
                  {/* Visual border bottom effect matching your styles */}
                  <span className="absolute bottom-0 left-0 h-[3px] bg-[#f37023] transition-all duration-300 w-0 group-hover/popup:w-full" />
                </li>
              );
            }

            return (
              <li key={index} className="h-full flex items-center relative group">
                <a
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide uppercase transition-colors duration-200 ${
                    link.active 
                      ? 'text-[#f37023]' 
                      : 'text-[#555555] hover:text-[#f37023]'
                  }`}
                >
                  {link.name}
                </a>
                <span 
                  className={`absolute bottom-0 left-0 h-[3px] bg-[#f37023] transition-all duration-300 ${
                    link.active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </li>
            );
          })}
        </ul>

        {/* --- MOBILE HAMBURGER BUTTON --- */}
        <div className="md:hidden flex items-center ml-auto">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-[#111111] focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* --- MOBILE DROP-DOWN MENU --- */}
      <div className={`md:hidden bg-white border-t border-gray-100 transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <ul className="px-6 py-4 flex flex-col gap-y-4">
          {navLinks.map((link, index) => {
            if (link.isDropdown) {
              return (
                <li key={index} className="block py-1">
                  <details className="group/mobSelect [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex items-center justify-between w-full text-sm font-bold uppercase tracking-wider text-[#555555] cursor-pointer list-none">
                      <span>Penta<span className="text-sky-500">KÜHL</span></span>
                      <svg className="w-4 h-4 text-neutral-400 group-open/mobSelect:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    {/* Vertical Nested Sub-links container on Mobile */}
                    <ul className="pl-4 mt-2 flex flex-col gap-y-2.5 border-l-2 border-gray-100">
                      {link.subLinks.map((sub, sIdx) => (
                        <li key={sIdx}>
                          <a
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-[#f37023]"
                          >
                            {sub.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              );
            }

            return (
              <li key={index}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm font-bold uppercase tracking-wider py-1 ${
                    link.active ? 'text-[#f37023]' : 'text-[#555555]'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;