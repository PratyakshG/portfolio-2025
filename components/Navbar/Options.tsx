import { motion, Variants } from "motion/react";

const itemVariants = {
  initial: {
    opacity: 0,
    x: 20,
    y: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
  },
  exit: {
    opacity: 0,
    x: 20,
    y: -50,
  },
};

export const Option = ({
  text,
  onClick,
  className,
  variants,
}: {
  text: string;
  onClick: () => void;
  className?: string;
  variants?: Variants;
}) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={onClick}
      className={`cursor-pointer ${className}`}
    >
      <span className="uppercase">{text}</span>
    </motion.li>
  );
};
