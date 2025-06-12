import { useMotionValue, motion, useSpring, useTransform } from "motion/react";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import Image, { StaticImageData } from "next/image";

interface LinkProps {
  index: string;
  heading: string;
  imgSrc: string | StaticImageData;
  subheading: string;
  href: string;
}

export const HoverImageLinks = ({
  index,
  heading,
  imgSrc,
  subheading,
  href,
}: LinkProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [-0.5, 0.5], ["40%", "60%"]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    const rect = ref.current!.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <>
      <motion.a
        href={href}
        ref={ref}
        onMouseMove={handleMouseMove}
        initial="initial"
        whileHover="whileHover"
        className="group relative w-full flex items-center justify-between border-b-2 border-neutral-700 transition-colors duration-500 hover:border-red-500 py-4 xl:py-6"
      >
        <div>
          <div className="flex items-baseline gap-2 xl:gap-3">
            <span className="relative z-10 block text-[8vw] md:text-[4.5vw] xl:text-5xl font-medium text-neutral-700 transition-colors duration-500 group-hover:text-red-600 font-anton uppercase leading-none">
              {index}.
            </span>
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: -20 },
              }}
              transition={{
                type: "spring",
                staggerChildren: 0.075,
                delayChildren: 0.25,
              }}
              className="relative z-10 block text-[10vw] md:text-[6vw] xl:text-[4.5vw] font-medium text-neutral-700 transition-colors duration-500 group-hover:text-red-600 font-anton uppercase leading-none"
            >
              {heading.split("").map((l, i) => (
                <motion.span
                  variants={{
                    initial: { x: 0 },
                    whileHover: { x: 16 },
                  }}
                  transition={{ type: "spring" }}
                  className="inline-block leading-none"
                  key={i}
                >
                  {l}
                </motion.span>
              ))}
            </motion.span>
          </div>

          <span className="relative z-10 mt-2 block text-sm md:text-base xl:text-lg text-neutral-500 transition-colors duration-500 group-hover:text-red-500 font-spaceMono">
            {subheading}
          </span>
        </div>

        {/* project image */}
        <motion.div
          style={{
            top,
            left,
            translateX: "0%",
            translateY: "-50%",
          }}
          variants={{
            initial: { scale: 0, rotate: "-12.5deg" },
            whileHover: { scale: 1, rotate: "2.5deg" },
          }}
          transition={{ type: "spring" }}
          className="absolute right-20 z-0 h-[180px] w-[320px] rounded-lg md:h-[270px] md:w-[480px] bg-white"
        >
          <Image
            src={imgSrc}
            alt={`Image representing a link for ${heading}`}
            objectFit="contain"
            width={1280}
            height={720}
            className="relative w-full h-full rounded-lg aspect-video"
          />
        </motion.div>

        {/* arrow icon */}
        <motion.div
          variants={{
            initial: {
              x: "25%",
              opacity: 0,
            },
            whileHover: {
              x: "0%",
              opacity: 1,
            },
          }}
          transition={{ type: "spring" }}
          className="relative z-10 p-4"
        >
          <FiArrowRight className="text-5xl text-red-600" />
        </motion.div>
      </motion.a>
    </>
  );
};
