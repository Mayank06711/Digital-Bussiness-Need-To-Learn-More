"use client";
//  to make it client side rendering
import React, { useRef } from "react";
import "./BrandingVedio.css";
import { motion, useScroll, useTransform } from "framer-motion";
const BrandigVedio = () => {
  const ref = useRef(null);
  //    useScroll is use to calcuate length of scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
    // start is start of ref that we made for scrolling
    // the complete line of video box from top side (hero section side) is start of video "it is actually start of refe that we made"
    //  and end part of video is section is bottom line
    // start end end end means start  calculating amount of  scroll when hero section end and video sec start (start end) and till video section end that is when bottom of video sec hits again end of client screen i.e hero sec
  });

  //   cal amount of scale mean how much video should be scale on scalling using second group if framer motion useTransform
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  //    scrollYProgress is passed as props and it can move from 0  to 1 that is min amount shiuld be 0  and max it can take is 1 AND WILL CHANGE SCALE FROM 0 TO 0 TO 1 THEN 0.6 TO 1

  return (
    // since in this we dont need any bg-color os we dont create any wrapper
    <div className="bv-container">
      <div className="container">
        <motion.video
          ref={ref}
          className="b-video"
          loop
          muted
          autoPlay
          controls=""
          style={{scale}}
        >
          <source src="/video.mp4" type="video/mp4" />
        </motion.video>
      </div>
    </div>
  );
};
export default BrandigVedio;
