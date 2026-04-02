import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

function App() {
  return (
    <div
      id="container-body"
      className="mx-auto mb-[40px] w-[85%] max-md:w-[99%]"
    >
      <header id="navigation-header" className="mx-auto flex w-[85%] items-start">
        <div
          id="logo-image-box"
          className="mt-[33px] ml-[25px] mr-[15%] mb-[20px]"
        >
          <img
            src="/pekzho-logo.png"
            alt="Pekzho logo"
          />
        </div>

        <nav
          id="pekz-menubar"
          className="mt-[30px] ml-auto mr-0 w-auto border-2 border-[#895a06] text-[18px] text-[#895a06] font-[525] rounded-tl-[25px] rounded-tr-[0px] rounded-br-[20px] rounded-bl-[10px] max-md:hidden"
        >
          <ul className="flex items-center gap-6 px-4 py-[7px]">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </header>

      <h1 className="px-[20px] pb-[20px] text-center text-[22px] sm:text-[35px] text-[#895a06]">
        <span className="text-[0.5em]">🚀</span> Run AI skills on the Go <span className="text-[0.5em]">🚀</span>
      </h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </div>
  );
}

export default App;
