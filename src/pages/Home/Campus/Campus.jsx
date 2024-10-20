import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import feature from "../../../assets/feature.webp";
import ekBackground from "../../../assets/ek.webp"; // Import the background image
import { Link } from "react-router-dom";

const Campus = () => {
  return (
    <section className="featured-item bg-fixed text-black mb-12 pt-8 my-20" style={{ position: "relative", backgroundImage: `url(${ekBackground})`, zIndex: 2 }}>
      <p className="uppercase text-5xl py-6 text-white font-extrabold text-center">rangpur engineering college</p>
      <div className="md:flex justify-center items-center py-20 pt-12 px-36">
        <div className="w-2/5 ">
          {/* <img src={feature} alt="" /> */}
          <iframe 
            width="460" 
            height="280" 
            
            src="https://www.youtube.com/embed/sPYw4BL5yHg" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            style={{ position: "absolute", top: 140, left: 50, zIndex: 1 }}
          ></iframe>
        </div>
        <div className="md:ml-10 w-3/5">
          <p className="text-white font-extrabold">
            Rangpur Engineering College (REC) was established in the year 2014.It is affiliated by the University of Rajshahi. It is the First Non-Govt. Engineering College in Rangpur Division. This is the newly based Institute, imparting technical education leading to B.ScEngg. in the various disciplines of Engineering.
          </p>
          <Link to="/">
            <button className="btn btn-outline border-0 border-b-4 text-black hover:bg-sky-600 mt-4">
              Read More
            </button>
          </Link>
        </div>
        
      </div>
      <p className="uppercase text-5xl py-10 text-white font-extrabold text-center"> </p>
    </section>
  );
};

export default Campus;
