"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: "-100%",
    transition: {
      duration: 1,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.75,
    },
  },
};

const loadingVariant = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const dots = {
  initial: { opacity: 0, y: "-10px" },
  animate: {
    opacity: 1,
    y: "0",
    transition: {
      duration: 1,
      ease: "easeInOut",
      repeat: Infinity,
      // repeatType: mirror,
      repeatDelay: 1,
    },
  },
};

const Preloader = ({
  setIsLoading,
}: {
  setIsLoading: (arg: boolean) => void;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter !== 100) {
      setTimeout(() => {
        setCounter((prev) => prev + 1);
      }, 30);
    }

    if (counter === 100) {
      setTimeout(() => {
        setIsLoading(false);
      }, 20);
    }

    // counter !== 100 &&
    //   setTimeout(() => {
    //     setCounter((prev) => prev + 1);
    //   }, 30);

    // counter === 100 &&
    //   setTimeout(() => {
    //     setIsLoading(false);
    //   }, 2000);
  }, [counter, setIsLoading]);

  return (
    <motion.div
      initial={variants.initial}
      animate={counter === 100 ? variants.animate : "null"}
      className="h-screen w-screen z-50 bg-black fixed top-0"
    >
      <div className="h-full w-full relative">
        <video
          src="/videos/noise_bkg.mp4"
          autoPlay
          loop={counter !== 100 ? true : false}
          muted
          className="h-full w-full opacity-50 object-cover"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <motion.div className="flex flex-col absolute bottom-1/3 left-1/2 -translate-x-1/2 px-10">
        <motion.div className="text-3xl md:text-5xl lg:text-7xl font-anton flex">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeInOut",
              },
            }}
          >
            Loading
          </motion.span>
          <motion.div
            variants={loadingVariant}
            initial="initial"
            animate={counter !== 100 ? "animate" : ""}
          >
            <motion.span variants={dots}>.</motion.span>
            <motion.span variants={dots}>.</motion.span>
            <motion.span variants={dots}>.</motion.span>
          </motion.div>
        </motion.div>

        <motion.span
          ref={ref}
          style={{
            opacity: `${counter}%`,
          }}
          className={`text-3xl md:text-5xl lg:text-7xl font-anton`}
        >
          {counter}%
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
