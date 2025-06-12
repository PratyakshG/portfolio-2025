"use client";

import Image from "next/image";
import { ProjectProps } from "../constants";
import AnimatedButton from "./AnimatedButton";
import { RevealLinks } from "./revealLinks";
import { motion } from "motion/react";

interface ProjectPageProps {
  project: ProjectProps;
}

const ProjectPageLayout = ({ project }: ProjectPageProps) => {
  const {
    id,
    title,
    type,
    desc,
    figLink,
    gitLink,
    // imgSrc,
    mockup,
    techStack,
    features,
  } = project;

  return (
    <div className="flex flex-col h-full w-full items-center gap-14">
      {/* heading section and landing image section */}
      <div className="flex flex-col w-full gap-10 items-center justify-center">
        <div className="w-full flex items-start justify-between text-4xl xl:text-7xl font-anton uppercase">
          <RevealLinks
            type="text"
            text={id}
          />

          <h4 className="flex flex-col text-right">
            <RevealLinks
              type="text"
              text={title}
            />
            <span className="text-base xl:text-xl font-spaceMono font-light normal-case text-neutral-400">
              <RevealLinks
                type="text"
                text={type}
              />
            </span>
          </h4>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
          className="w-full h-full"
        >
          <Image
            src={mockup.full}
            alt="background-image"
            width={1920}
            height={1080}
            className="w-full"
          />
        </motion.div>
      </div>

      {/* links of the project */}
      <div className="flex w-full items-baseline gap-3">
        <AnimatedButton
          title="GitHub"
          type="link"
          href={gitLink}
        />
        <AnimatedButton
          title="Visit Page"
          type="link"
          href={figLink}
        />
      </div>

      {/* tech stack of the project */}
      <div className="flex flex-col w-full items-baseline gap-3">
        <span className="font-anton text-2xl lg:text-3xl">Tech Stack</span>
        <div className="flex gap-3 flex-wrap">
          {techStack.map((tech) => {
            return (
              <AnimatedButton
                key={tech}
                title={tech}
                type="badge"
              />
            );
          })}
        </div>
      </div>

      {/* description */}
      <div className="flex flex-col w-full items-baseline gap-3 font-spaceMono">
        <span className="font-anton text-2xl lg:text-3xl">Description</span>
        <span className="text-sm xl:text-lg">{desc}</span>
      </div>

      {/* mockups / image gallery */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between lg:gap-10">
        <div className="lg:w-1/3 overflow-hidden">
          <Image
            src={mockup.desktop}
            alt="background-image"
            width={1280}
            height={720}
            className="w-full hover:scale-125 transition-all duration-300"
          />
        </div>
        <div className="lg:w-1/3 overflow-hidden">
          <Image
            src={mockup.tablet}
            alt="background-image"
            width={1280}
            height={720}
            className="w-full hover:scale-125 transition-all duration-300"
          />
        </div>
        <div className="lg:w-1/3 overflow-hidden">
          <Image
            src={mockup.mobile}
            alt="background-image"
            width={1280}
            height={720}
            className="w-full hover:scale-125 transition-all duration-300"
          />
        </div>
      </div>

      {/* features overview */}
      <div className="flex flex-col w-full items-baseline gap-3 font-spaceMono">
        <span className="font-anton text-2xl lg:text-3xl">Features</span>
        <ol className="flex flex-col gap-2">
          {features.map((feature) => {
            return (
              <li
                key={feature}
                className="list-decimal list-inside text-sm xl:text-lg"
              >
                {feature}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default ProjectPageLayout;
