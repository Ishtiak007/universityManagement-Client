import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../../../assets/41.webp";
import img2 from "../../../assets/42.webp";
import img3 from "../../../assets/43.webp";
import img4 from "../../../assets/44.webp";
import img5 from "../../../assets/45.webp";
import img6 from "../../../assets/46.webp";
import img7 from "../../../assets/47.webp";
import img8 from "../../../assets/48.webp";
import img9 from "../../../assets/49.webp";
import img10 from "../../../assets/50.webp";
import img11 from "../../../assets/51.webp";

const Mark = () => {
  return (
    <div className="pb-6">
      {/* <Marquee className='my-5'>
       
        <img className='h-32 w-32' src={img1} alt="" style={{ marginRight: '20px' }}/>
        <img className='h-32 w-32' src={img2} alt="" style={{ marginRight: '20px' }}/>
        <img className='h-32 w-32' src={img3} alt="" style={{ marginRight: '20px' }}/>
        <img className='h-32 w-32' src={img4} alt=""  style={{ marginRight: '20px' }}/>
        <img className='h-32 w-32' src={img5} alt=""  style={{ marginRight: '20px' }}/>
        <img className='h-32 w-32' src={img6} alt=""  style={{ marginRight: '20px' }}/>
        <img className='h-32 w-32' src={img7} alt=""  style={{ marginRight: '20px' }}/>
        <img className='h-32 w-32' src={img8} alt=""  style={{ marginRight: '20px' }}/>
        <img className='h-32 w-32' src={img9} alt=""  style={{ marginRight: '20px' }}/>
        <img className='h-32 w-32' src={img10} alt=""  style={{ marginRight: '20px' }}/>
        <img className='h-32 w-32' src={img11} alt=""  style={{ marginRight: '20px' }}/>
    </Marquee> */}
      <Marquee className="pt-16 my-5" direction="right" speed={50}>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
          Engineering Excellence
        </p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
          Innovative Institute
        </p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
          Technical Leader
        </p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
          Premier Academy
        </p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
          Quality Education
        </p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
          Dynamic Programs
        </p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
          Pioneering College
        </p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
          Future Engineers
        </p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
          Cutting-Edge Curriculum
        </p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
          Empowered Learning
        </p>
      </Marquee>
      <Marquee className="my-5" direction="left" speed={50}>
      <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
          Student Success
        </p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
          Diverse Disciplines
        </p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
          Skill Development
        </p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
          Innovative Learning
        </p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
          Expert Faculty
        </p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
          Hands-On Experience
        </p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
          Modern Facilities
        </p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
          Career Readiness
        </p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
          Community Impact
        </p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
          Technical Training
        </p>
      </Marquee>
    </div>
  );
};

export default Mark;
