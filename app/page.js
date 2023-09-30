"use client";
// home page we gonna build complete website
import "./page.css";
import Navbar from "@/src/Components/Navbar/Navbar";
import Hero from "@/src/Components/Hero/Hero";
import BrandingVedio from "@/src/Components/BrandingVedio/BrandingVedio";
import WhatWeDo from "@/src/Components/WhatWeDo/WhatWeDo";
import "@/src/Components/WhatWeDo/WhatWeDo";
import OurDifference from "@/src/Components/OurDifference/OurDifference";
import HowItWorks from "@/src/Components/HowItWorks/HowItWorsk";
import WhoWeInvest from "@/src/Components/WhoWeInvest/WhoWeInvest";
import Testimonial from "@/src/Components/Testimonial/Testimonial";
import Footer from "@/src/Components/Footer/Footer";
import { motion, useAnimation } from "framer-motion";
export default function Home() {
  const controls = useAnimation();
  return (
    <motion.div className="app" animate={controls}>
      <Navbar />
      <Hero />
      <BrandingVedio />
      <WhatWeDo />
      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "var(--secondary-color)",
          })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: "white",
          })
        }
        viewport={{ amount: 0.4 }}
      >
        <OurDifference />
      </motion.div>
      <HowItWorks />

      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "var(--primary-color)",
          })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: "white",
          })
        }
        viewport={{ amount: 0.4 }}
      >
        <WhoWeInvest />
      </motion.div>

      <Testimonial />
      <Footer/>
    </motion.div>
  );
}
