"use client";

import React from "react";
import "./WhatWeDo.css";
import { features } from "@/src/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  containerVariants,
  desVariants,
  tagVariants,
  titleVariants,
} from "@/src/utils/animation";
const WhatWeDo = () => {
  return (
    <div className="wwd-wrapper">
      <div className="container">
        <div className="w-container">
          {/* head section */}
          <div className="w-head">
            <motion.span
              variants={tagVariants(0.5)}
              initial="offscreen"
              whileInView={"onscreen"}
              className="tag"
            >
              What We Do
            </motion.span>

            <motion.span
              variants={titleVariants(0.5)}
              initial="offscreen"
              whileInView={"onscreen"}
              className="title"
            >
              {" "}
              Empowerig founers with non dilutive captatal and execution
              experties
            </motion.span>
            
            <motion.span
              variants={desVariants()}
              initial="offscreen"
              whileInView="onscreen"
              className="des"
            >
              Here is how we can evaluate
            </motion.span>
          </div>

        {/* two block */}
        <div className="w-blocks">
          {/* first block */}
          <div className="w-block">
            <motion.span
              variants={titleVariants()}
              initial="offscreen"
              whileInView={"onscreen"}
              className="sec-title"
            >
              Blue Advances
            </motion.span>
            <motion.span
              variants={desVariants()}
              initial="offscreen"
              whileInView="onscreen"
              className="text"
            >
              Fund recurring growth expenses e.g. customer acquisition,
              inventory{" "}
            </motion.span>
            <div className="bk-features">
              {features.slice(0, 3).map((feature, i) => (
                <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={containerVariants((i + 1) * 0.1)}
                  className="bk-feature"
                  key={i}
                >
                  <Image
                    src={feature.icon}
                    alt="feature"
                    width={60}
                    height={60}
                  />
                  <span>{feature.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
          {/* sec block */}
          <div className="w-block">
            {" "}
            <motion.span
              variants={titleVariants()}
              initial="offscreen"
              whileInView={"onscreen"}
              className="sec-title"
            >
              Blue Seed
            </motion.span>
            <motion.span
              variants={desVariants()}
              initial="offscreen"
              whileInView="onscreen"
              className="text"
            >
              Find one-offs to scale e.g. products , hiring
            </motion.span>
            <div className="bk-features">
              {features.slice(3, 6).map((feature, i) => (
                <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={containerVariants((i + 1) * 0.1)}
                  className="bk-feature"
                  key={i}
                >
                  <Image
                    src={feature.icon}
                    alt="feature"
                    width={60}
                    height={60}
                  />
                  <span>{feature.title}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* support */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={containerVariants(0.3)}
          className="wb-support"
        >

          {/* left side */}
          <div>
            <span className="sec-title">Blue Growth Support</span>
            <span className="des">
              Data insights amd full stack experties to supercharge growth
            </span>
            <div />

             {/* right side */}
            <div>
              <span className="text">
                Actionable data insights by connecting revenue ,marketing and
                other social media platforms
              </span>
              <span className="text">
                On demand execution experties at cost or revenue share across
                different proposition design , enginering ans so on.
              </span>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
    </div>
  );
};
export default WhatWeDo;
