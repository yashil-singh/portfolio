import About from "../pages/About";
import Contact from "../pages/Contact";
import Education from "../pages/Education";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Tech from "../pages/Tech";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div id="top" className="bg-background">
      <Navbar />
      <main className="flex flex-col gap-5 max-w-[1000px] m-auto px-3 md:px-2">
        <Home />
        <About />
        <Education />
        <Tech />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Layout;
