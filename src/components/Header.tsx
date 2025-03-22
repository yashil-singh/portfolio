import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils.ts";
import { motion } from "motion/react";

const Header = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <motion.header
      className="bg-secondary absolute top-0 right-0 z-10 hidden items-center justify-center gap-8 rounded-tr-xl rounded-bl-xl px-8 py-4 md:flex"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.8,
        duration: 0.7,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0 },
      }}
    >
      <Link to="/" className={cn(path === "/" && "text-primary")}>
        About
      </Link>

      <Link
        to="/projects"
        className={cn(path === "/projects" && "text-primary")}
      >
        Projects
      </Link>

      <Link to="/contact" className={cn(path === "/contact" && "text-primary")}>
        Contact
      </Link>
    </motion.header>
  );
};

export default Header;
