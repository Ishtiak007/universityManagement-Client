import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { PiArrowRightLight } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { motion } from "framer-motion";

const Footer = () => {
  const extraClass = "your-extra-class";
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <nav>
          <h6 className="footer-title  text-sky-600">Get in Touch</h6>
          <Link to="">
            <a className="link link-hover text-sky-600 flex">
              <PiArrowRightLight size="1.3rem" color="#0284c7" />
              Contact
            </a>
          </Link>
          <Link to="">
            <a className="link link-hover  text-sky-600 flex">
              <PiArrowRightLight size="1.3rem" color="#0284c7" />
              Meet With us
            </a>
          </Link>
          <Link to="">
            <a className="link link-hover text-sky-600 flex">
              <PiArrowRightLight size="1.3rem" color="#0284c7" />
              Privacy Statement
            </a>
          </Link>
          <Link to="">
            <a className="link link-hover  text-sky-600 flex">
              <PiArrowRightLight size="1.3rem" color="#0284c7" />
              Report Copyright Infringement
            </a>
          </Link>
          <Link to="">
            <a className="link link-hover  text-sky-600 flex">
              <PiArrowRightLight size="1.3rem" color="#0284c7" />
              Report on Security Issues
            </a>
          </Link>
          <Link to="">
            <a className="link link-hover text-sky-600 flex">
              <PiArrowRightLight size="1.3rem" color="#0284c7" />
              Recom. For Traffic Mgt
            </a>
          </Link>
          <Link to="">
            <a className="link link-hover text-sky-600 flex">
              <PiArrowRightLight size="1.3rem" color="#0284c7" />
              Newsletters
            </a>
          </Link>
          <Link to="">
            <a className="link link-hover text-sky-600 flex">
              <PiArrowRightLight size="1.3rem" color="#0284c7" />
              Location Map
            </a>
          </Link>
          <Link to="">
            <a className="link link-hover  text-sky-600 flex">
              <PiArrowRightLight size="1.3rem" color="#0284c7" />
              Covid-19 updates
            </a>
          </Link>
          <Link to="">
            <a className="link link-hover  text-sky-600 flex">
              <PiArrowRightLight size="1.3rem" color="#0284c7" />
              Logos (RECFamily)
            </a>
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title  text-sky-600">Branding</h6>
          <Link to="">
            <a className="link link-hover  text-sky-600 flex">
              <PiArrowRightLight size="1.3rem" color="#0284c7" />
              DIU Branding
            </a>
          </Link>
          <Link to="">
            <a className="link link-hover  text-sky-600 flex">
              <PiArrowRightLight size="1.3rem" color="#0284c7" />
              Career Opportunities
            </a>
          </Link>
          <Link to="">
            <a className="link link-hover  text-sky-600 flex">
              <PiArrowRightLight size="1.3rem" color="#0284c7" />
              Blog
            </a>
          </Link>
          <Link to="">
            <a className="link link-hover  text-sky-600 flex">
              <PiArrowRightLight size="1.3rem" color="#0284c7" />
              Photo Gallery
            </a>
          </Link>
          <Link to="">
            <a className="link link-hover text-sky-600 flex">
              <PiArrowRightLight size="1.3rem" color="#0284c7" />
              DIU News
            </a>
          </Link>
          <Link to="">
            <a className="link link-hover  text-sky-600 flex">
              <PiArrowRightLight size="1.3rem" color="#0284c7" />
              DIU Press
            </a>
          </Link>
          <Link to="">
            <a className="link link-hover  text-sky-600 flex">
              <PiArrowRightLight size="1.3rem" color="#0284c7" />
              Employability 360
            </a>
          </Link>
          <Link to="">
            <a className="link link-hover  text-sky-600 flex">
              <PiArrowRightLight size="1.3rem" color="#0284c7" />
              DIU IT
            </a>
          </Link>
          <Link to="">
            <a className="link link-hover  text-sky-600 flex">
              <PiArrowRightLight size="1.3rem" color="#0284c7" />
              Artofliving
            </a>
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title  text-sky-600">Useful Links</h6>
          <Link to="">
            <a className="link link-hover text-sky-600 flex">
              <PiArrowRightLight size="1.3rem" color="#0284c7" />
              skill.jobs
            </a>
          </Link>
          <Link to="">
            <a className="link link-hover  text-sky-600 flex">
              <PiArrowRightLight size="1.3rem" color="#0284c7" />
              Internship Portal
            </a>
          </Link>
          <Link to="">
            <a className="link link-hover  text-sky-600 flex">
              <PiArrowRightLight size="1.3rem" color="#0284c7" />
              Foundation Day
            </a>
          </Link>
          <Link to="">
            <a className="link link-hover  text-sky-600 flex">
              <PiArrowRightLight size="1.3rem" color="#0284c7" />
              Convocation
            </a>
          </Link>
          <Link to="">
            <a className="link link-hover text-sky-600 flex">
              <PiArrowRightLight size="1.3rem" color="#0284c7" />
              REC Annual Report
            </a>
          </Link>
          <Link to="">
            <a className="link link-hover text-sky-600 flex">
              <PiArrowRightLight size="1.3rem" color="#0284c7" />
              Brochure
            </a>
          </Link>
          <Link to="">
            <a className="link link-hover text-sky-600 flex">
              <PiArrowRightLight size="1.3rem" color="#0284c7" />
              Prospectus
            </a>
          </Link>
          <Link to="">
            <a className="link link-hover text-sky-600 flex">
              <PiArrowRightLight size="1.3rem" color="#0284c7" />
              Forms
            </a>
          </Link>
          <Link to="">
            <a className="link link-hover text-sky-600 flex">
              <PiArrowRightLight size="1.3rem" color="#0284c7" />
              Brand Documents
            </a>
          </Link>
          <Link to="">
            <a className="link link-hover text-sky-600 flex">
              <PiArrowRightLight size="1.3rem" color="#0284c7" />
              Apps
            </a>
          </Link>
          <Link to="">
            <a className="link link-hover text-sky-600 flex">
              <PiArrowRightLight size="1.3rem" color="#0284c7" />
              FAQ
            </a>
          </Link>
        </nav>
        <form>
          <h6 className="footer-title text-sky-600">Subscribe Us!</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-sky-600">
                Enter your email address
              </span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn bg-sky-600 text-white hover:bg-white hover:text-black join-item">
                Subscribe
              </button>
            </div>
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1711304428864!6m8!1m7!1sCAoSLEFGMVFpcE10QmJwRzVObndMQmd0bDI4YXZYekJXaFFuTEZrMTlwN0Z0QWFS!2m2!1d25.7383796!2d89.2748356!3f200!4f20!5f0.7820865974627469"
                width="400"
                height="200"
                style={{ border: "0", marginRight: "10px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            {/* updt */}
          </fieldset>
        </form>
      </footer>
      <footer className="footer footer-center p-8 bg-base-200 text-base-content rounded">
        <nav>
          <div className="grid grid-flow-col gap-3">
            <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
              <Link to="https://www.facebook.com/recr.edu.bd">
                <a href="https://www.facebook.com/recr.edu.bd">
                  <FaFacebookF
                    href="https://www.facebook.com/recr.edu.bd"
                    size="1.7rem"
                    color="#0284c7"
                  />
                </a>
              </Link>
            </motion.div>

            <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
              <Link to="">
                <a href="">
                  <FaInstagram size="1.7rem" color="#0284c7" />
                </a>
              </Link>
            </motion.div>

            <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
              <Link to="">
                <a href="">
                  <FaLinkedinIn size="1.7rem" color="#0284c7" />
                </a>
              </Link>
            </motion.div>

            <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
              <Link to="">
                <a href="">
                  <BsTwitterX size="1.7rem" color="#0284c7" />
                </a>
              </Link>
            </motion.div>
            <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
              <Link to="">
                <a href="">
                  <FaWhatsapp size="1.7rem" color="#0284c7" />
                </a>
              </Link>
            </motion.div>
            <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
              <Link to="">
                <a href="">
                  <FaDiscord size="1.7rem" color="#0284c7" />
                </a>
              </Link>
            </motion.div>
            <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
              <Link to="">
                <a href="">
                  <FaThreads size="1.7rem" color="#0284c7" />
                </a>
              </Link>
            </motion.div>
            <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
              <Link to="">
                <a href="">
                  <FaYoutube size="1.7rem" color="#0284c7" />
                </a>
              </Link>
            </motion.div>
            <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
              <Link to="">
                <a href="">
                  <BiLogoGmail size="1.7rem" color="#0284c7" />
                </a>
              </Link>
            </motion.div>
          </div>
        </nav>
        <aside>
          <p className="text-sky-600">
            Copyright © 2024 - All right reserved by REC Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
