"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { navOptions } from "../../constants";
import MobileNav from "./MobileNav";
import "./navbar.scss";
import { Option } from "./Options";

const navVariants = {
  initial: {
    y: "-100%",
  },
  animate: {
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      ease: [0.76, 0, 0.24, 1],
      duration: 0.5,
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    y: "-100%",
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      when: "afterParent",
      ease: [0.76, 0, 0.24, 1],
      delay: index * 0.1,
      duration: 0.3,
    },
  }),
};

const Navbar = () => {
  // state to check the status of menu in mobile view
  const [open, setOpen] = useState(false);

  const handleDesktopOption = (item: string) => {
    document.getElementById(item)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      variants={navVariants}
      initial={navVariants.initial}
      animate={navVariants.animate}
      className={`navbar w-screen lg:w-1/2 lg:rounded-b-3xl flex h-[8vh] px-6 md:px-0 items-center justify-end md:items-center md:justify-between fixed top-0 text-dark-3 md:bg-[#0a0a0a]`}
    >
      <motion.ul className="h-full w-screen md:px-10 xl:px-20 invisible md:visible flex items-end justify-end md:items-center md:justify-around text-light">
        {navOptions.map((item, index) => (
          <motion.li
            custom={index}
            variants={itemVariants}
            initial="initial"
            animate="animate"
            key={index}
            onClick={() => handleDesktopOption(item)}
            // text={item}
            className="inline text-sm lg:text-base font-poppins font-bold hover:text-red-500 uppercase transition-all duration-300"
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>

      <Option
        className={`inline md:hidden z-10 text-sm lg:text-lg lg:w-16 lg:p-4 rounded-full font-spaceMono font-bold ${
          open ? "text-light" : "text-dark-3"
        }`}
        text={!open ? "MENU" : "CLOSE"}
        onClick={() => setOpen(!open)}
      />

      <AnimatePresence mode="wait">
        {open && (
          <MobileNav
            open={open}
            setOpen={setOpen}
          />
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
