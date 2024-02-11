"use client";
// since this is made with next.js it is server side rendered and when we are going to use react hooks next js understand that we want some kind of interactivity of client
// client attractivity  is not done bwhen website is served toward the browser to fix this
// we write "useclient" to overcome this prob
// when we specify use client in any section then it is no more server side rendered it becomes client side rendered
import React, { useState } from "react";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Link } from "react-scroll";
// for making our header section animation we imorted above tings /
const Navbar = () => {
  const [mobileMenuOpened, setMobileMenu] = useState(false);
  const [navStyle, setNavStyle] = useState("");
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // /change  is event that is on change in event of scrollYprogress take he value of letest change valu eo

    // useSCrollYProgress is will give value on scrolling from top to bottom or vice versa
    //   this value will always be less than 1 and will be divided by num of diff section we do have on my website
    // latest is using value given by above written word
    if (latest > 0.2) {
      setNavStyle("sticky");
    } else {
      setNavStyle("");
    }
  });
  return (
    <div className={`n-wrapper ${navStyle}`}>
      {/* desktop version  */}
      <div className="container">
        <div className="n-container">
          {/* left side */}
          <div className="n-logo">
            <span>NEXT BUSINESS</span>
          </div>
          {/* right side */}
          <div className="n-right">
            <div className="n-menu">
              <Link to="wwd-wrapper" spy={true} smooth={true}>
                <span>What we do</span>
              </Link>
              <Link to="hiw-wrapper" spy={true} smooth={true} offset={100}>
                <span>How it works</span>
              </Link>
              <Link to="wwi-wrapper" spy={true} smooth={true} offset={100}>
                <span>Who we invest</span>
              </Link>
              <Link to="t-wrapper" spy={true} smooth={true} offset={100}>
                <span>Testimonials</span>
              </Link>

              <button className="fund-button">Get funded</button>
            </div>
          </div>
        </div>
      </div>

      {/* mob/tab version */}
      <div className="nm-container">
        {/* logo */}
        <span>NEXT BUSINESS</span>
        {/* menu icon */}
        {/* using react icon lib name BiMenu...ght */}
        {!mobileMenuOpened ? (
          <BiMenuAltRight
            size={30}
            onClick={() => {
              setMobileMenu(true);
            }}
          />
        ) : (
          <RxCross2
            size={30}
            onClick={() => {
              setMobileMenu(false);
            }}
          />
        )}
        {/* monile meni */}
        <div
          className="nm-menu"
          style={{ transform: mobileMenuOpened && "translateX(0%)" }}
        >
          <Link
            onClick={() => setMobileMenu(false)}
            to="wwd-wrapper"
            spy={true}
            smooth={true}
          >
            <span>What we do</span>
          </Link>
          <Link
            onClick={() => setMobileMenu(false)}
            to="hiw-wrapper"
            spy={true}
            smooth={true}
            offset={100}
          >
            <span>How it works</span>
          </Link>
          <Link
            onClick={() => setMobileMenu(false)}
            to="wwi-wrapper"
            spy={true}
            smooth={true}
            offset={100}
          >
            <span>Who we invest</span>
          </Link>
          <Link
            onClick={() => setMobileMenu(false)}
            to="t-wrapper"
            spy={true}
            smooth={true}
            offset={100}
          >
            <span>Testimonials</span>
          </Link>

          <div className="m-funded-button">Get Funded</div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
//  n stands for navbar
