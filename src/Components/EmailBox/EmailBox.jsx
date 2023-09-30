import React from "react";
import { motion } from "framer-motion";
import { LuMail } from "react-icons/lu";
import "./EmailBox.css";
import { containerVariants } from "@/src/utils/animation";
const EmailBox = () => {
  // we can crreate our variant using const varianr =()=>{}  like we did in hero section fro image
  return (
    <motion.div
      initial={{
        // setting intial value of animation
        width: "0.5rem",
        borderRadius: "100%",
      }}
      // when a particular elem comes in viewport i.e when this emailbox come in viewport
      whileInView={{
        // we are using css here to animate it
        width: "71%",
        // right side ke liye hai
        borderRadius: "999px",
        transition: {
          type: "easeOut",
          duration: 1,
        },
      }}
      className="emailbox"
    >
      {/* icon */}
      <motion.div
        variants={containerVariants(0.6)}
        //   since containerVariants is flat arrow function we called this passing 0.5 sec as delay which is its props
        initial="offscreen"
        //   offscreen is defined in containervariant
        whileInView={"onscreen"}
        // due to this ani our email icon will move up
        viewport={{
          once: true,
        }}
        // once true means it animation on email-icon would execute only once when first time it come in viewport
        //and not every scrool of up down is set false it will animate again again on scrooling up and down
      >
        <LuMail size={30} color="silver" />
      </motion.div>
      {/* input */}
      <motion.input
        variants={containerVariants(0.9)}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{
          once: true,
        }}
        type="email"
        placeholder="Enter Email"
      />
      {/* button */}
      <div className="getfund">fund</div>
    </motion.div>
  );
};
export default EmailBox;
