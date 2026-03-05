"use client";

import { easeIn, motion, useScroll, useTransform } from "motion/react";
import { IoLocationSharp } from "react-icons/io5";

const LandingPage = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <section id="LandingPage">
      <motion.div
        style={{
          scale,
        }}
        initial={{
          opacity: 0,
          y: "-100%",
        }}
        animate={{
          opacity: 1,
          y: "0%",
        }}
        className="h-full w-screen place-items-center px-4 md:px-10 pt-[10dvh] gap-5 bg-light text-dark-2 rounded-b-4xl"
      >
        <div className="flex items-center gap-10">
          <div>
            <motion.span
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.8,
                  easeIn,
                },
              }}
              className="text-lg font-mono"
            >
              Yo! I&apos;m
            </motion.span>

            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.9,
                  easeIn,
                },
              }}
              className="uppercase font-anton text-[11.5vw] leading-none text-dark-3"
            >
              Pratyaksh
            </motion.div>
            <motion.span
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 1,
                  easeIn,
                },
              }}
              className="text-3xl font-mono flex items-center justify-between"
            >
              Software Engineer
              <span className="flex items-center text-lg">
                <IoLocationSharp size={20} />
                India
              </span>
            </motion.span>
          </div>

          <motion.img
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 1,
                easeIn,
              },
            }}
            src="/images/hero_img.png"
            alt="background-image"
            width={400}
            height={500}
            className="object-cover"
            loading="eager"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default LandingPage;
