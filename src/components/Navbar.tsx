import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, LogOut } from "lucide-react";
import GoogleLoginButton from "../components/GoogleLoginButton";

type UserType = {
  name: string;
  email: string;
  photo: string;
};

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState<UserType | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("googleUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("googleUser");
    setUser(null);
    setMobileOpen(false);
    navigate("/login");
  };

  if (location.pathname === "/login") {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="shrink-0">
          <img
            src="/pekzho-logo.png"
            alt="Pekzho logo"
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          <nav>
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

          {!user ? (
            <div className="scale-[0.92]">
              <GoogleLoginButton onLoginSuccess={setUser} />
            </div>
          ) : (
            <div className="flex items-center gap-3 rounded-full border border-[#ead7b0] bg-white px-3 py-2 shadow-sm">
              <img
                src={user.photo}
                alt={user.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="max-w-[140px]">
                <p className="truncate text-sm font-semibold text-[#895a06]">
                  {user.name}
                </p>
                <p className="truncate text-xs text-gray-500">{user.email}</p>
              </div>
              <button
                onClick={handleLogout}
                className="rounded-full border border-red-200 p-2 text-red-500 transition hover:bg-red-50"
                title="Logout"
              >
                <LogOut size={18} />
              </button>
            </div>
          )}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-xl border border-[#895a06] p-2 text-[#895a06] md:hidden"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

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
            <div className="mt-6 border-t border-[#ead7b0] pt-4">
              {!user ? (
                <GoogleLoginButton
                  onLoginSuccess={(loggedInUser: UserType) => {
                    setUser(loggedInUser);
                    setMobileOpen(false);
                  }}
                />
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 rounded-2xl border border-[#ead7b0] p-3">
                    <img
                      src={user.photo}
                      alt={user.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-[#895a06]">
                        {user.name}
                      </p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-300 px-4 py-3 text-red-500 transition hover:bg-red-50"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;