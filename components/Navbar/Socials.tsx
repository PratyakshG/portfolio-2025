import { motion } from "motion/react";
import { Dispatch, SetStateAction, useState } from "react";
import { IconType } from "react-icons";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -10 },
};

export const SocialLink = ({
  Icon,
  setOpen,
}: {
  Icon: IconType;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center justify-center py-3 lg:hover:px-1 text-lime-800 lg:text-light hover:text-black lg:hover:text-red-500 transition-all cursor-pointer"
    >
      <motion.span
        variants={actionIconVariants}
        className="text-2xl"
      >
        <Icon />
      </motion.span>
    </motion.li>
  );
};
