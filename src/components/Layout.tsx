import About from "../pages/About";
import Contact from "../pages/Contact";
import Education from "../pages/Education";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div id="top">
      <Navbar />
      <main className="flex flex-col gap-5 max-w-[1000px] m-auto px-3 md:px-2">
        <Home />
        <About />
        <Education />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Layout;
