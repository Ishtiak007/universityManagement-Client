import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import CountUp from "react-countup";
import c1 from "../../assets/101.png"
import c2 from "../../assets/102.png"
import c3 from "../../assets/103.png"
import c4 from "../../assets/104.png"
import c5 from "../../assets/105.png"
import c6 from "../../assets/106.png"
import c7 from "../../assets/107.png"
import c8 from "../../assets/108.png"
import c9 from "../../assets/109.png"
const Facilities = () => {
  return (
    <div>
      <Link to="/facilities">
        {/* -------------------------------------1st start------------------------------------ */}
        <div>
          <section class=" body-font">
            <div class="container px-5 py-24 mx-auto">
              <SectionTitle
                className="font-serif"
                heading={"Facilities"}
              ></SectionTitle>
              <div class="flex flex-wrap -m-2">
                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <Link to="">
                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                      <img
                        alt="team"
                        class="w-20 h-20 bg-white object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src={c1}
                      ></img>
                      <div class="flex-grow ml-8">
                        <h2 class="text-black title-font text-3xl">
                          ICT Center
                        </h2>
                      </div>
                    </div>
                  </Link>
                </div>
                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <Link to="">
                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                      <img
                        alt="team"
                        class="w-20 h-20 bg-white object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src={c2}
                      ></img>
                      <div class="flex-grow ml-8">
                        <h2 class="text-black title-font text-3xl">
                          Central Library
                        </h2>
                      </div>
                    </div>
                  </Link>
                </div>
                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <Link to="">
                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                      <img
                        alt="team"
                        class="w-20 h-20 bg-white object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src={c3}
                      ></img>
                      <div class="flex-grow ml-8">
                        <h2 class="text-black title-font text-3xl">
                          Transport
                        </h2>
                      </div>
                    </div>
                  </Link>
                </div>
                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <Link to="">
                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                      <img
                        alt="team"
                        class="w-20 h-20 bg-white object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src={c4}
                      ></img>
                      <div class="flex-grow ml-8">
                        <h2 class="text-black title-font text-3xl">Alumni</h2>
                      </div>
                    </div>
                  </Link>
                </div>
                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <Link to="">
                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                      <img
                        alt="team"
                        class="w-20 h-20 bg-white object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src={c5}
                      ></img>
                      <div class="flex-grow ml-8">
                        <h2 class="text-black title-font text-3xl">
                          Science Workshop
                        </h2>
                      </div>
                    </div>
                  </Link>
                </div>
                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <Link to="">
                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                      <img
                        alt="team"
                        class="w-20 h-20 bg-white object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src={c6}
                      ></img>
                      <div class="flex-grow ml-8">
                        <h2 class="text-black title-font text-3xl">
                          Mental Health Center
                        </h2>
                      </div>
                    </div>
                  </Link>
                </div>
                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <Link to="">
                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                      <img
                        alt="team"
                        class="w-20 h-20 bg-white object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src={c7}
                      ></img>
                      <div class="flex-grow ml-8">
                        <h2 class="text-black title-font text-3xl">
                          Physical Education
                        </h2>
                      </div>
                    </div>
                  </Link>
                </div>
                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <Link to="">
                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                      <img
                        alt="team"
                        class="w-20 h-20 bg-white object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src={c8}
                      ></img>
                      <div class="flex-grow ml-8">
                        <h2 class="text-black title-font text-3xl">
                          Medical Center
                        </h2>
                      </div>
                    </div>
                  </Link>
                </div>
                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <Link to="">
                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                      <img
                        alt="team"
                        class="w-20 h-20 bg-white object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src={c9}
                      ></img>
                      <div class="flex-grow ml-8">
                        <h2 class="text-black title-font text-3xl">TSCC</h2>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* -------------------------------------1st end------------------------------------ */}
        {/* -----------------------------------2nd s-------------------------------- */}
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-primary">
          Rangpur Engineering College (REC) 
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-secondary">
          Established in the year 2014
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-accent">
          It is affiliated by the University of Rajshahi
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-info">The first non-govt. engineering college in Rangpur Division</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-success">
            Located Kamal kachhna,Rangpur
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-warning">
            CSE,ICE,EEE,CE
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-error">
          For more information:
01855979496
          </div>
        </div>
        {/* -----------------------------------2nd e-------------------------------- */}
        {/* ------------------------------3nd-start----------------------------------- */}
        <div className="stats shadow w-full">
          <div className="stat">
            <div className="stat-figure text-secondary ">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-8 h-8 stroke-current"
                color="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Programs</div>
            <div className="stat-value">
              <CountUp end={38} duration={20} />
            </div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-8 h-8 stroke-current"
                color="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">New Users</div>
            <div className="stat-value">
              <CountUp end={4200} duration={20} />
            </div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-8 h-8 stroke-current"
                color="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Research</div>
            <div className="stat-value">
              <CountUp end={1200} duration={20} />
            </div>
            <div className="stat-desc">↗︎ 1000 (14%)</div>
          </div>
        </div>
        {/* ------------------------------3nd-end----------------------------------- */}
      </Link>
    </div>
  );
};

export default Facilities;
