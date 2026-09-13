import { useState } from "react";

// All the center nav links live in one array so we don't repeat the same
// <a> tag 5 times. Easy to add/remove a link later.
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Technologies", href: "#technologies" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  // Controls whether the mobile dropdown menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    // sticky + top-0 keeps the navbar fixed at the top while scrolling
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ---------- Left: hamburger (mobile only) + Logo ---------- */}
          <div className="flex items-center gap-3">
            {/* Hamburger button only shows up on small screens */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                // X icon when menu is open
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon when menu is closed
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Brand logo: small gradient "DS" box + Dev Stack text */}
            <a href="#home" className="flex items-center gap-2">
              <span className="brand-gradient-bg w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                DS
              </span>
              <span className="font-bold text-lg text-gray-900">
                Dev <span className="brand-gradient-text">Stack</span>
              </span>
            </a>
          </div>

          {/* ---------- Center: nav links (hidden on mobile) ---------- */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* ---------- Right: Sign In / Sign Up ---------- */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="text-sm font-medium text-gray-700 hover:text-gray-900 px-2 sm:px-3">
              Sign In
            </button>
            <button className="brand-gradient-bg text-white text-sm font-medium px-4 sm:px-5 py-2 rounded-full hover:opacity-90 transition-opacity">
              Sign Up
            </button>
          </div>
        </div>

        {/* ---------- Mobile dropdown menu ---------- */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col gap-1 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md px-3 py-2"
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;
