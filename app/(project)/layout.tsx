"use client";

import { motion } from "motion/react";
import Lenis from "lenis";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col min-h-max w-screen items-center justify-center relative px-4 md:px-20">
      {/* header */}
      <div className="flex items-center w-full h-[8vh]">
        <div className="flex items-center hover:text-red-500 gap-3">
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <FaArrowLeft className="text-base xl:text-lg" />
            <p className="text-base xl:text-lg font-spaceMono font-bold">
              Home
            </p>
          </Link>
        </div>
      </div>
      {children}
      {/* footer */}
      <motion.div
        // variants={contactVariants}
        // initial="initial"
        // whileInView="animate"
        className="flex flex-col w-full py-[6vh] md:py-[8vh] items-center justify-center"
      >
        <div className="w-full h-full flex flex-col items-end justify-between gap-2 lg:gap-5">
          <span className="font-delaGothic font-black text-lg md:text-xl lg:text-4xl uppercase tracking-wider">
            Wish to work together?
          </span>
          <a
            href="mailto:pratyakshgupta1810@gmail.com"
            className="flex items-center justify-center gap-2 hover:text-red-500 font-delaGothic tracking-wide text-sm lg:text-xl"
          >
            <IoIosMail size={24} />
            pratyakshgupta1810@gmail.com
          </a>
        </div>
      </motion.div>
    </main>
  );
}
