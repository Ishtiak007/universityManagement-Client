import React from "react";
import { motion } from "framer-motion"
import sh1 from "../../../assets/Program.png";
import sh2 from "../../../assets/admission1.png";
import sh8 from "../../../assets/tution.png";
import sh3 from "../../../assets/scholarship.png";

const Scholarship = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center items-center">
          <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className="w-full md:w-1/2 lg:w-1/4" src={sh1} alt="" />
          <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className="w-full md:w-1/2 lg:w-1/4" src={sh2} alt="" />
          <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className="w-full md:w-1/2 lg:w-1/4" src={sh8} alt="" />
          <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className="w-full md:w-1/2 lg:w-1/4" src={sh3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Scholarship;
