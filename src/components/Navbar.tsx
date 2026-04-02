import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="shrink-0">
          <img
            src="/pekzho-logo.png"
            alt="Pekzho logo"
            className="h-12 w-auto sm:h-14"
          />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 rounded-tl-[25px] rounded-tr-[0px] rounded-br-[20px] rounded-bl-[10px] border-2 border-[#895a06] px-5 py-2 text-[17px] font-medium text-[#895a06]">
            <li>
              <Link to="/" className="transition hover:opacity-70">
                Home
              </Link>
            </li>
            <li>
              <a href="#" className="transition hover:opacity-70">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:opacity-70">
                Services
              </a>
            </li>
            <li>
              <Link to="/blog" className="transition hover:opacity-70">
                Blog
              </Link>
            </li>
            <li>
              <a href="#" className="transition hover:opacity-70">
                About
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-xl border border-[#895a06] p-2 text-[#895a06] md:hidden"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-[#ead7b0] bg-white shadow-md md:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <ul className="flex flex-col gap-4 text-[17px] font-medium text-[#895a06]">
              <li>
                <Link to="/" onClick={() => setMobileOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <a href="#" onClick={() => setMobileOpen(false)}>
                  Products
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setMobileOpen(false)}>
                  Services
                </a>
              </li>
              <li>
                <Link to="/blog" onClick={() => setMobileOpen(false)}>
                  Blog
                </Link>
              </li>
              <li>
                <a href="#" onClick={() => setMobileOpen(false)}>
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;