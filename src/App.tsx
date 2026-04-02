import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Navbar from "./components/Navbar";
import FloatingContact from "./components/FloatingContact";

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="mx-auto mb-10 w-[92%] max-w-7xl sm:w-[90%]">
        <h1 className="px-4 pb-6 pt-6 text-center text-[24px] text-[#895a06] sm:text-[36px]">
          <span className="text-[0.6em]">🚀</span> Run AI skills on the Go{" "}
          <span className="text-[0.6em]">🚀</span>
        </h1>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>

      <FloatingContact />
    </div>
  );
}

export default App;