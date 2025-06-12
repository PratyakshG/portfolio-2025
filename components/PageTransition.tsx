import { motion } from "motion/react";
import React, { ReactNode } from "react";

const blockVariants = {
  initial: {
    top: 0,
    when: "beforeChildren",
  },
  animate: (i) => ({
    top: "100vh",
    transition: {
      duration: 0.5,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
    when: "beforeChildren",
    transitionEnd: { height: "0", top: "0" },
  }),
  exit: (i) => ({
    height: "100vh",
    transition: {
      duration: 0.5,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
    when: "beforeChildren",
  }),
};

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="h-screen w-screen fixed top-0 left-0 flex z-10 pointer-events-none">
        {[...Array(5)].map((_, i) => {
          return (
            <motion.div
              key={i}
              className="h-full w-full relative bg-red-500"
              variants={blockVariants}
              initial={blockVariants.initial}
              animate={blockVariants.animate(5 - i)}
              exit={blockVariants.exit(5 - i)}
            />
          );
        })}
      </div>
      {children}
    </div>
  );
};

export default PageTransition;
