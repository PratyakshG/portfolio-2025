"use client";

import { motion } from "motion/react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const pathname = usePathname();

  return (
    <motion.div className="w-full h-full"
    // initial={{
    //   y: 20,
    //   opacity: 0,
    // }}
    // animate={{
    //   y: 0,
    //   opacity: 1,
    // }}
    // transition={{
    //   ease: "easeInOut",
    //   duration: 0.75,
    // }}
    >
      {children}
    </motion.div>
  );
}
