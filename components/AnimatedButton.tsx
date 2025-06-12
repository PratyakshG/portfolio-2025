import Link from "next/link";
import React from "react";
import { projects } from "../constants";
import { GrLinkNext } from "react-icons/gr";

interface ButtonProps {
  type: "badge" | "link";
  href?: string;
  title: string;
}

const AnimatedButton = ({ type, href, title }: ButtonProps) => {
  {
    switch (type) {
      case "badge":
        return (
          <div className="group relative flex items-center justify-center text-dark-3 bg-light px-4 py-2 rounded-full gap-2 transition-all duration-300 overflow-hidden font-spaceMono">
            <div className="w-2 h-2 bg-dark-3 rounded-full" />
            <span className="text-xs xl:text-base whitespace-nowrap">{title}</span>
          </div>
        );

      case "link":
        return (
          <Link
            href={href!}
            className="group relative flex items-center justify-center hover:font-semibold text-dark-3 bg-light px-3 xl:px-4 py-2 rounded-full gap-2 hover:gap-4 transition-all duration-300 overflow-hidden font-spaceMono border border-gray-2"
          >
            <div className="w-2 h-2 bg-dark-3 rounded-full group-hover:scale-[3] transition-all duration-300" />
            <GrLinkNext className="absolute text-sm group-hover:text-light z-10 left-0 -translate-x-5 group-hover:translate-x-2  xl:group-hover:translate-x-3 transition-all duration-300" />
            <span className="text-xs xl:text-base">{title}</span>
          </Link>
        );

      default:
        break;
    }
  }
};

export default AnimatedButton;
