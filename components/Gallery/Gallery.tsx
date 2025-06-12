"use client";

import "./works.scss";
import { motion, useScroll, useTransform } from "motion/react";
import HorizontalScrollCarousel from "./carouselLayout";
import { carouselImages } from "../../constants";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

// const variants = {
//   initial: {
//     // opacity: 0,
//     y: -200,
//   },
//   animate: {
//     // opacity: 1,
//     y: 0,
//   },
// };

const Gallery = () => {
  const hasWindow = typeof window !== "undefined";
  const [windowWidth, setWindowWidth] = useState(
    hasWindow ? window.innerWidth : 1024,
  );
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const desktopAnim = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "1%",
      windowWidth <= 768
        ? "-65%"
        : windowWidth > 768 && windowWidth <= 1024
        ? "-70%"
        : "-60%",
    ],
  );

  const x = windowWidth >= 768 ? desktopAnim : "0%"; // No transform for mobile view

  return (
    <section id="gallery">
      <div className="projects max-h-full w-screen relative">
        <div
          ref={targetRef}
          className="relative min-h-screen w-full md:h-[300vh]"
        >
          <div className="md:sticky md:top-0 md:flex md:flex-col h-full md:h-screen items-start justify-center overflow-hidden gap-10">
            <motion.div
              style={{ x }}
              className="grid grid-cols-2 place-items-center px-6 md:flex gap-8 z-10"
            >
              {carouselImages.map((card) => {
                return (
                  <HorizontalScrollCarousel
                    key={card.id}
                    card={card}
                  />
                );
              })}
            </motion.div>
            <div className="w-full text-center absolute -z-10 text-4xl md:text-5xl lg:text-6xl xl:text-8xl bottom-3/4 lg:bottom-24 xl:bottom-32 font-delaGothic">
              LiFE IN STiLLS
            </div>
            <Link
              href="https://www.instagram.com/_saycheeeeze/"
              target="_blank"
              className="absolute flex items-baseline gap-2 font-delaGothic lg:text-xl bottom-0 md:bottom-10 right-0 bg-light pl-3 pr-5 lg:pl-6 lg:pr-10 py-2 lg:py-3 text-dark-3 hover:text-red-600 transition-all cursor-pointer"
            >
              _saycheeeeze
              <FaInstagram
                size={20}
                className="lg:size-5 size-3"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
