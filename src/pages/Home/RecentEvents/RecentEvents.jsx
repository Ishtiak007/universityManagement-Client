import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import { PiArrowRightLight } from "react-icons/pi";
import ph from "../../../assets/6.webp";
import cri from "../../../assets/cri.jpg";
import ori from "../../../assets/orientation programme.jpg";
const RecentEvents = () => {
  return (
    <div className="px-4">
      <SectionTitle
        className="font-serif"
        heading={"Recent Events"}
        // subHeading={"National  International scholars, Business leaders, Entrepreneurs, Dignitaries visited us to share experiences, explore opportunities, collaborate and give guidance to the students"}
      ></SectionTitle>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center">
        <div className="card bg-base-100 shadow-xl mx-4 mb-8 md:w-96 border-2 border-sky-600">
          <figure className="px-4 pt-10">
            <img
              src={ph}
              alt="Shoes"
              className="rounded-xl h-[266px] w-88"
            />
          </figure>
          <div className="card-body text-center flex justify-center items-center">
            <h2 className="card-title text-center text-sky-600">Programming Hero Seminar</h2>
            <p>
            REC hosts seminars yearly for student growth and career development.
            </p>
            <div className="card-actions flex justify-center items-center">
              <Link to="/programming-hero">
                <button className="btn btn-outline w-full bg-sky-600 text-white border-black border group hover:bg-white hover:text-black">
                  Read More
                  <PiArrowRightLight
                    size="1.1rem"
                    className="text-white group-hover:text-black"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl mx-4 mb-8 md:w-96 border-2 border-sky-600">
          <figure className="px-4 pt-10">
            <img
              src="https://i.ibb.co/pxTDWWp/khela.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body text-center flex justify-center items-center">
            <h2 className="card-title">REC Cricket Tournament</h2>
            <p>
              Every year REC Sports club holds different types of sports
              tournaments.
            </p>
            <div className="card-actions  flex justify-center items-center">
              <Link to="/cricket">
                <button className="btn btn-outline w-full bg-sky-600 text-white border-black border group hover:bg-white hover:text-black">
                  Read More
                  <PiArrowRightLight
                    size="1.1rem"
                    className="text-white group-hover:text-black"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl mx-4 mb-8 md:w-96 border-2 border-sky-600">
          <figure className="px-4 pt-10">
            <img
              src={ori}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body text-center flex justify-center items-center">
            <h2 className="card-title text-sky-600">Orientation Programme</h2>
            <p>
            We warmly welcome the arrival of new students.
            </p>
            <div className="card-actions  flex justify-center items-center">
              <Link to="/cricket">
                <button className="btn btn-outline w-full bg-sky-600 text-white border-black border group hover:bg-white hover:text-black">
                  Read More
                  <PiArrowRightLight
                    size="1.1rem"
                    className="text-white group-hover:text-black"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentEvents;
