
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Classes", href: "#classes" },
    { label: "Subjects", href: "#subjects" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <a href="#home" onClick={closeMenu}>
          <h1 className="text-2xl font-bold text-blue-700">
            SOLACE
          </h1>

          <p className="text-xs font-medium tracking-widest text-gray-500">
            ACADEMY
          </p>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-gray-700 transition hover:text-blue-700">
              {link.label}
            </a>
          ))}
        </div>

      
        <a href="#registration"className="hidden rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 lg:inline-flex" >
          Register Your Child
        </a>

        <button type="button" onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-2xl text-slate-700 lg:hidden" >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href} href={link.href} onClick={closeMenu}
                className="font-medium text-slate-700 transition hover:text-blue-700">
                {link.label}
              </a>
            ))}

            <a
              href="#registration"
              onClick={closeMenu}
              className="rounded-lg bg-blue-700 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-800"
            >
              Register Your Child
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
