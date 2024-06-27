import { motion } from "framer-motion";
import React from "react";

const quote = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className="py-2 w-full mx-auto flex flex-col items-center justify-center  text-center  
    overflow-hidden sm:py-0">
      <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
        Hello i am Pascoal Musuela Francisco,
        Welcome to my portfolio.
      </h2>
    </div>
  );
};

export default AnimatedText;
