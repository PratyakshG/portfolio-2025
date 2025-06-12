/* eslint-disable react/no-unescaped-entities */
"use client";

import { easeIn, motion } from "motion/react";
import { FaArrowRight } from "react-icons/fa6";
import ScrollText from "../LandingPage/scrollText/ScrollText";

const variants = {
  initial_img: {
    opacity: 0,
    scale: 0,
  },
  initial_text: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.25,
      easeIn,
      duration: 0.3,
    },
  },
};

const About = () => {
  return (
    <section id="about">
      <div className="min-h-screen md:h-screen w-screen flex flex-col md:flex-row items-center justify-center relative m-auto px-6 md:px-10 xl:px-20 py-[6vh] xl:py-[10vh] gap-3">
        {/* left section */}
        <motion.div
          variants={variants}
          initial="initial_text"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="w-full lg:w-2/5 h-full flex flex-col justify-between gap-3"
        >
          <div className="flex flex-col text-justify text-xs lg:text-sm xl:text-base tracking-tight bg-light font-spaceMono p-5 text-dark-1 gap-3 rounded-xl">
            <span className="">
              Yo✋ I am a 2024 graduate with a{" "}
              <span className="font-bold">
                Bachelor's degree in Computer Science and Engineering
              </span>
              . As a Full Stack Developer, I thrive on transforming visually
              appealing and creative ideas into reality, and I enjoy developing
              websites that help people accomplish their tasks efficiently.
            </span>
            <span className="">
              When I'm not coding, you can find me watching anime, playing video
              games, or reading a book. My primary focus when building a website
              is the joy and satisfaction it brings to both the users and
              myself.
            </span>
            <span className="xl:text-right font-semibold text-dark-2">
              "They can't destroy our plan if we don't have one."
              <br />- Monkey D. Luffy
            </span>
          </div>

          <motion.div
            variants={variants}
            initial="initial_img"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="w-full h-full flex items-center justify-center text-center bg-blackolive text-white p-2 xl:p-0 rounded-xl"
          >
            <span className="font-delaGothic text-[5dvw] md:text-[4.5dvw] lg:text-[5vw] font-bold leading-none tracking-wider">
              ABOUT ME :)
            </span>
          </motion.div>
        </motion.div>

        {/* right section */}
        <div className="w-full md:w-3/5 h-full flex flex-col gap-3">
          <motion.div
            variants={variants}
            initial="initial_img"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="w-full h-full flex items-center justify-center bg-dark-2 rounded-xl"
          >
            <ScrollText />
          </motion.div>

          <div className="flex w-full h-full gap-3 font-delaGothic">
            <motion.button
              variants={variants}
              initial="initial_img"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              onClick={() => {
                const elem = document.getElementById("gallery");
                elem?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group w-full h-full bg-red-500 flex flex-col items-center justify-center hover:bg-light hover:text-lightgreen gap-2 md:gap-5 *:transition-all p-2 md:p-0 rounded-xl"
            >
              <span className="text-[5dvw] md:text-[3.5dvw] leading-none tracking-wider font-semibold uppercase">
                Life In Stills
              </span>
              <FaArrowRight
                className="p-2 bg-light text-dark-3 -rotate-45 group-hover:rotate-0 rounded-full h-8 w-8 md:h-16 md:w-16"
                size={20}
              />
            </motion.button>

            <motion.button
              variants={variants}
              initial="initial_img"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className="group w-full h-full bg-lightgreen flex flex-col items-center justify-center hover:bg-light hover:text-red-500 gap-2 md:gap-5 *:transition-all p-2 md:p-0 rounded-xl"
              onClick={() => {
                const elem = document.getElementById("contact");
                elem?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="text-[5dvw] md:text-[3.5dvw] leading-none tracking-wider font-semibold uppercase">
                Let's Connect
              </span>
              <FaArrowRight
                className="p-2 bg-light text-dark-3 -rotate-45 group-hover:rotate-0 rounded-full h-8 w-8 md:h-16 md:w-16"
                size={20}
              />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
