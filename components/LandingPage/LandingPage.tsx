"use client";

import { easeIn, motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";

const date = new Date();

const LandingPage = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  // const rotateX = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const itemVariants = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        easeIn,
        staggerChildren: 0.5,
      },
    },
  };

  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <section id="LandingPage">
      <motion.div
        style={{
          scale,
        }}
        className="flex flex-col h-full w-screen items-center px-4 md:px-10 pt-[10dvh] md:pt-12 pb-5 md:pb-10 gap-5 bg-light text-dark-2 rounded-b-3xl"
      >
        <motion.div
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
          className="uppercase h-full w-full text-center font-delaGothic text-[11.5vw] leading-none font-black text-dark-3"
        >
          Pratyaksh
        </motion.div>

        <Image
          src="/images/profileBG.jpeg"
          alt="background-image"
          width={1280}
          height={720}
          className="w-full object-cover"
        />

        {/* <ScrollText /> */}

        <motion.div
          variants={itemVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="w-full flex items-end md:items-center text-xs md:text-sm lg:text-base xl:text-lg justify-between font-poppins"
        >
          <div className="flex items-center justify-center gap-1 font-bold uppercase tracking-wider">
            <IoLocationSharp size={20} />
            India
          </div>

          <motion.div className="date flex flex-col md:flex-row md:gap-5">
            <div>©{date.getFullYear()}</div>
            <div>{time}</div>
          </motion.div>

          {/* <motion.button
            className="group flex items-center justify-center uppercase tracking-widest font-medium hover:font-semibold gap-2 hover:text-red-500 transition-all duration-300"
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Explore Projects
            <FaArrowTurnDown
              className="p-1 bg-white text-dark border border-dark group-hover:rotate-90 transition-all duration-300 rounded-full"
              size={20}
            />
          </motion.button> */}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LandingPage;
