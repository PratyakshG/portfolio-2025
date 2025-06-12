"use client";

import { MouseEvent } from "react";

import { FaCss3Alt, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { FaGitAlt, FaGithub } from "react-icons/fa6";
import {
  SiCplusplus,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiMongodb,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { useAnimate } from "framer-motion";
import { IconType } from "react-icons";

export const ClipPathLinks = () => {
  return (
    <div className="divide-y-2 divide-neutral-700 border-2 border-neutral-700">
      <div className="grid grid-cols-3 divide-x-2 divide-neutral-700">
        <LinkBox
          Icon={SiNextdotjs}
          text="NextJs"
        />
        <LinkBox
          Icon={FaReact}
          text="React"
        />
        <LinkBox
          Icon={SiTypescript}
          text="TypeScript"
        />
      </div>
      <div className="grid grid-cols-5 divide-x-2 divide-neutral-700">
        <LinkBox
          Icon={FaJs}
          text="JavaScript"
        />
        <LinkBox
          Icon={SiCplusplus}
          text="C/C++"
        />
        <LinkBox
          Icon={FaHtml5}
          text="HTML"
        />
        <LinkBox
          Icon={FaCss3Alt}
          text="CSS"
        />
        <LinkBox
          Icon={FaGitAlt}
          text="Git"
        />
      </div>
      <div className="grid grid-cols-3 divide-x-2 divide-neutral-700">
        <LinkBox
          Icon={SiMongodb}
          text="MongoDB"
        />
        <LinkBox
          Icon={FaGithub}
          text="GitHub"
        />
        <LinkBox
          Icon={SiTailwindcss}
          text="TailwindCSS"
        />
      </div>
      <div className="grid grid-cols-5 divide-x-2 divide-neutral-700">
        <LinkBox
          Icon={SiRedux}
          text="Redux"
        />
        <LinkBox
          Icon={SiFirebase}
          text="Firebase"
        />
        <LinkBox
          Icon={SiFramer}
          text="Framer"
        />
        <LinkBox
          Icon={SiExpress}
          text="Express"
        />
        <LinkBox
          Icon={FaFigma}
          text="Figma"
        />
      </div>
    </div>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

type Side = "top" | "left" | "bottom" | "right";
type KeyframeMap = {
  [key in Side]: string[];
};

const ENTRANCE_KEYFRAMES: KeyframeMap = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: KeyframeMap = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, text }: { Icon: IconType; text: string }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: MouseEvent) => {
    const box = (e.target as HTMLElement).getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left" as Side,
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right" as Side,
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top" as Side,
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom" as Side,
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e: MouseEvent) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e: MouseEvent) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <div
      onMouseEnter={(e) => {
        handleMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave(e);
      }}
      className="relative grid w-full place-content-center h-16 md:h-28 xl:h-32"
    >
      <Icon className="text-xl sm:text-3xl lg:text-4xl" />

      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className="absolute inset-0 grid place-content-center bg-black text-red-600"
      >
        <Icon className="text-xl md:text-3xl lg:text-4xl" />
        <div className="absolute font-poppins text-xs lg:text-lg font-medium bottom-2 left-1/2 -translate-x-1/2">
          {text}
        </div>
      </div>
    </div>
  );
};
