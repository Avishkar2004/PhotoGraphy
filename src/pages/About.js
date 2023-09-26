import React from "react";
import WomanImg from "../img/about/woman.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const About = () => {
  return (
    <motion.section
      initial={{ scale: 0, y: "100%" }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        {/* text and img wrapper */}
        <div className="flex flex-col lg:flex-row h-full items-center justify-center  gap-x-24 text-center lg:text-left lg:pt-16">
          {/* img */}
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <img src={WomanImg} alt="" />
          </div>
          {/* text */}
          <motion.div
            initial={{ scale: 0, y: "-80%" }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">About me</h1>
            <p className="mb-12 max-w-sm">
              Lorem ipsum dolor sit, <b>amet consectetu</b>amet consectetur
              adipisicing elit. Quibusdam voluptatem accusamus assumenda.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <Link to={"/portfolio"} className="btn">
              View my worl
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
