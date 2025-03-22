import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils.ts";
import { motion } from "motion/react";

const MobileNavBar = () => {
  const location = useLocation();

  const path = location.pathname;
  return (
    <motion.nav
      className="bg-opacity-10 sticky bottom-0 w-full p-4 backdrop-blur-xs backdrop-filter md:hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.8,
        duration: 0.7,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
    >
      <ul className="flex w-full justify-evenly gap-6 font-medium">
        <li>
          <Link to="/" className={cn(path === "/" && "text-primary")}>
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={cn(path === "/projects" && "text-primary")}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={cn(path === "/contact" && "text-primary")}
          >
            Contact
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
};

export default MobileNavBar;
