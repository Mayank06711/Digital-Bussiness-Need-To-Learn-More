"use client";
import React from "react";
import "./OurDifferene.css";
import { ourDiffFeatures } from "@/src/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  tagVariants,
  titleVariants,
  desVariants,
  containerVariants,
} from "@/src/utils/animation";
const OurDifference = () => {
  return (
    <div className="od-wrapper">
      <div className="container">
        <div className="od-conatiner">
          <div className="od-head">
            <motion.span
              variants={tagVariants}
              initial="offscreen"
              whileInView={"onscreen"}
              className="tag"
            >
              Our Difference
            </motion.span>

            <motion.span
              variants={titleVariants(0.1)}
              initial="offscreen"
              whileInView={"onscreen"}
              className="title"
            >
              Fair Capital , hassle free
            </motion.span>
            <motion.span
              variants={desVariants(0.1)}
              initial="offscreen"
              whileInView={"onscreen"}
              className="text"
            >
              Our missio is level up playing field early stage growth capital
              <br />
              We provide capital that is unbiased ,flexible and non-dilutive
              with execution support .
            </motion.span>
          </div>
          {/* feature */}
          <div className="od-features">
            {ourDiffFeatures.map((feature, i) => (
              <motion.div
                key={i}
                variants={containerVariants((i + 1) * 0.1)}
                initial={"offscreen"}
                whileInView={"onscreen"}
                className="od-feature"
              >
                <Image
                  src={feature.icon}
                  alt="featuree"
                  width={128}
                  height={128}
                />
                <span className="sec-title">{feature.title}</span>
                <span className="text">{feature.des}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDifference;
