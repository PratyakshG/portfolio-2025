import React from "react";
import { motion } from "motion/react";

const DURATION = 0.25;
const STAGGERLINK = 0.025;
const STAGGERTEXT = 0.05;

export const RevealLinks = ({
  text,
  href,
  type,
  className,
}: {
  text: string;
  href?: string;
  type: "link" | "text";
  className?: string;
}) => {
  switch (type) {
    case "link":
      return (
        <motion.a
          initial="initial"
          whileHover="hovered"
          href={href}
          target="_blank"
          className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-4xl md:text-6xl lg:text-[6dvw] font-delaGothic"
        >
          <div>
            {text.split("").map((l, i) => (
              <motion.span
                variants={{
                  initial: {
                    y: 0,
                  },
                  hovered: {
                    y: "-100%",
                  },
                }}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay: STAGGERLINK * i,
                }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            ))}
          </div>
          <div className="absolute inset-0">
            {text.split("").map((l, i) => (
              <motion.span
                variants={{
                  initial: {
                    y: "100%",
                  },
                  hovered: {
                    y: 0,
                    color: "#dc2626",
                  },
                }}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay: STAGGERLINK * i,
                }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            ))}
          </div>
        </motion.a>
      );

    case "text":
      return (
        <motion.div
          initial="initial"
          animate="animate"
          className={`relative block overflow-hidden whitespace-nowrap ${className}`}
        >
          <div>
            {text.split("").map((l, i) => (
              <motion.span
                variants={{
                  initial: {
                    y: 0,
                    opacity: 0,
                  },
                  animate: {
                    y: "-100%",
                    opacity: 1,
                  },
                }}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay: STAGGERTEXT * i,
                }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            ))}
          </div>
          <div className="absolute inset-0">
            {text.split("").map((l, i) => (
              <motion.span
                variants={{
                  initial: {
                    y: "100%",
                  },
                  animate: {
                    y: 0,
                  },
                }}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay: STAGGERTEXT * i,
                }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            ))}
          </div>
        </motion.div>
      );
    default:
      return null;
  }
};
