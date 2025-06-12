"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { navOptions } from "../../constants";
import { Option } from "./Options";

const wrapperVariants = {
  initial: {
    scale: 0,
    top: "0px",
    right: "0px",
    transition: {
      when: "beforeChildren",
      ease: [0.76, 0, 0.24, 1],
      duration: 0.5,
    },
  },
  animate: {
    scale: 1,
    top: "0px",
    right: "0px",
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      ease: [0.76, 0, 0.24, 1],
      duration: 0.5,
    },
  },
  exit: {
    scale: 0,
    top: "0px",
    right: "0px",
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
      ease: [0.76, 0, 0.24, 1],
      duration: 0.5,
    },
  },
};

// const iconVariants = {
//   open: { rotate: 180 },
//   closed: { rotate: 0 },
// };

const itemVariants = {
  initial: {
    opacity: 0,
    y: -10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -10,
  },
};

const MobileNav = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const handleOption = (item: string) => {
    setOpen(!open);
    document.getElementById(item)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      variants={wrapperVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        originY: "top",
        originX: "right",
        translateX: "0%",
      }}
      className="absolute top-0 right-0 h-screen w-full md:w-1/3 flex flex-col items-center justify-between"
    >
      <motion.div className="h-full w-full flex flex-col justify-around px-10 bg-[#292929] text-black">
        <motion.ul className="w-full flex flex-col items-start justify-center gap-5">
          {navOptions.map((item, index) => (
            <Option
              key={index}
              onClick={() => handleOption(item)}
              text={item}
              className="text-5xl items-start font-poppins text-light hover:text-red-500"
            />
          ))}
        </motion.ul>

        <motion.div className="w-full flex justify-between items-center text-xs font-spaceMono py-2 text-light">
          <Link
            href="https://github.com/PratyakshG"
            className="hover:text-red-500"
          >
            <motion.span variants={itemVariants}>GitHub</motion.span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/pratyaksh-gupta-753a15212"
            className="hover:text-red-500"
          >
            <motion.span variants={itemVariants}>LinkedIn</motion.span>
          </Link>
          <Link
            href="https://www.instagram.com/_pratyakshgupta/"
            className="hover:text-red-500"
          >
            <motion.span variants={itemVariants}>Instagram</motion.span>
          </Link>
          <Link
            href="https://leetcode.com/pincodeazm/"
            className="hover:text-red-500"
          >
            <motion.span variants={itemVariants}>LeetCode</motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MobileNav;
