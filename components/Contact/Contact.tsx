"use client";

import { motion, easeIn } from "motion/react";
import "./contact.scss";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { RevealLinks } from "../revealLinks";
import { FaGithub } from "react-icons/fa6";

const contactVariants = {
  initial: {
    scale: 0.8,
  },
  animate: {
    scale: 1,
    transition: {
      easeIn,
    },
  },
};

const socials = [
  {
    name: "Github",
    url: "https://github.com/PratyakshG",
    icon: <FaGithub />,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/pratyaksh-gupta-753a15212",
    icon: <FaGithub />,
  },
  {
    name: "Leetcode",
    url: "https://leetcode.com/pincodeazm/",
    icon: <FaGithub />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/_pratyakshgupta/",
    icon: <FaGithub />,
  },
  {
    name: "Codechef",
    url: "https://www.codechef.com/users/pratyaksh_1810",
    icon: <FaGithub />,
  },
];

const Contact = () => {
  return (
    <section id="contact">
      <motion.div
        variants={contactVariants}
        initial="initial"
        whileInView="animate"
        className="contact flex flex-col h-screen w-screen px-6 md:px-10 xl:px-20 py-[6vh] xl:pt-[10vh] pb-8 items-center justify-center"
      >
        <div className="w-full h-full flex flex-col justify-around">
          <span className="flex flex-col font-delaGothic text-2xl lg:text-3xl uppercase gap-3">
            Wish to work together?
            <a
              href="mailto:pratyakshgupta1810@gmail.com"
              className="w-fit flex items-center normal-case gap-2 hover:text-red-500 font-delaGothic tracking-wide text-sm lg:text-lg transition-all"
            >
              <IoIosMail size={24} />
              pratyakshgupta1810@gmail.com
            </a>
          </span>

          <div className="flex flex-col items-end w-full gap-2 pt-10 md:pt-0">
            {socials.map((item, index) => (
              <RevealLinks
                key={index}
                href={item.url}
                type="link"
                text={item.name}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
