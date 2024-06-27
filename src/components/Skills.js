'use client'
import { motion } from "framer-motion";
import React, { useRef } from "react";
import TransitionEffect from "@/components/TransitionEffect";

const Skill = ({ title }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col items-center justify-between 
      bg-light text-dark first:mt-0 border border-solid border-dark
      border-r-4 border-b-4 dark:bg-dark dark:border-light
      "
    >
      <span className="text-primary font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start 
      sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedSkill = ({ title, summary }) => {
  return (
    <li className="relative w-full p-4 col-span-1 bg-light border border-dark border-solid rounded-2xl 
h    dark:bg-dark dark:border-light">
      <div
        className="absolute  top-0 -right-3 w-[102%] h-[103%] rounded-[2rem]  rounded-br-3xl bg-dark 
        -z-10  "
      />
      <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
        {title}
      </h2>
      <p className="text-sm  mb-2">{summary}</p>
    </li>
  );
};

export default function Skills() {
  return (
    <>
      <h2 className="font-bold text-8xl mb-16 mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <TransitionEffect />
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
          <FeaturedSkill
            title="Analyze a Case Study"
            summary="Let's delve into a case study that sheds light on the working conditions of personal
               support workers (PSWs)."
          />

          <FeaturedSkill

            title="Communication"
            summary="Ability to express ideas clearly, both verbally and in writing."
          />

          <FeaturedSkill

            title="Quantitative skills"
            summary="Ability to analyze data, solve problems using math, and understand complex systems"
          />

          <FeaturedSkill

            title="Teamwork"
            summary="Ability to collaborate effectively with others towards a common goal."
          />

          <FeaturedSkill

            title="Organization"
            summary="Ability to stay organized and manage multiple tasks simultaneously."
          />

          <FeaturedSkill

            title="Work ethic"
            summary="A strong work ethic demonstrates dedication, reliability, and a commitment to quality work."
          />

          <FeaturedSkill

            title="Adaptability"
            summary="Ability to learn new things, adjust to change, and be flexible in different situations."
          />
        </ul>
      </main>
    </>
  );
}
