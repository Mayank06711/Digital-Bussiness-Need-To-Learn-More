"use client";
// otherwise it will give error of useefect because animation used
import React from "react";
import "./Hero.css";
import EmailBox from "../EmailBox/EmailBox";
import { HeroData } from "@/src/utils/data";
import { animate, motion } from "framer-motion";
const Hero = () => {
  const variants = (delay) => ({
    intial: {
      y: "18rem",
      // on intial for each person bg make a the y axis dist of 18rem
    },
    animate: {
      y: "0rem",
      // when animating make their distance y=0
      transition: {
        type: "spring",
        // spring is type of animation comes with framer motion also we can play diff type of option that comes with type spring like damping , delay stiffness mass etc
        dampin: 25,
        duration: 2.5,
        delay,
      },
    },
  });

  const imgVariants = () => ({
    intial: {
      y: "18rem",
      // on intial for each person bg make a the y axis dist of 18rem
    },
    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        duration: 2,
        stiffness: 3,
      },
    },
  });
  return (
    <div className="h-wrapper">
      <div className="container">
        <img src="hero/hero-arrow.png" alt="grow-arrow" className="h-arrow" />

        <div className="h-container">
          {/* left siode */}
          <div className="h-left">
            <div className="image-row">
              {
                HeroData.slice(0, 3).map((person, i) => (
                  // returning jsx
                  <div className="person-box" key={i}>
                    <motion.div
                      initial={"intial"}
                      animate={"animate"}
                      variants={variants(person.delay)}
                      style={{ backgroundColor: person.bg }}
                      className="person-box-bg"
                    >
                      <motion.img
                        initial={"initial"}
                        animate={"animate"}
                        variants={imgVariants()}
                        src={person.src}
                        alt="person.src"
                      />
                    </motion.div>
                  </div>
                ))
                // 0 os tarting index to slice and 3 is last index to slice it will return array with ele from 0 to 3 indxed ele of array HeroData
              }
            </div>
            <div className="image-row">
              {HeroData.slice(3, 6).map((person, i) => (
                // returning jsx
                <div className="person-box" key={i}>
                  <motion.div
                    initial={"intial"}
                    animate={"animate"}
                    variants={variants(person.delay)}
                    style={{ backgroundColor: person.bg }}
                    className="person-box-bg"
                  >
                    <motion.img
                      initial={"initial"}
                      animate={"animate"}
                      variants={imgVariants()}
                      src={person.src}
                      alt="person.src"
                    />
                    {/* using motion to animate them motion.div will tell the framer motion that these are the elements whome to animate */}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          {/* right side */}
          <div className="h-right">
            <div className="h-title">
              <span>Redefine How</span>
              <span> You grow your</span>
              <span>Digital Bussiness</span>
            </div>
            <div className="h-des">
              Revenue based funding and execution designed for early stage
              founders
            </div>

            <EmailBox />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
