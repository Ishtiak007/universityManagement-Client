import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import cse22 from "../../assets/cse22.jpg"
import ice22 from "../../assets/ice22.jpg"
import cv22 from "../../assets/cv22.jpg"
import eee22 from "../../assets/eee22.jpg"
import cse4 from "../../assets/cse4.png"
import eee4 from "../../assets/eee4.png"
import ice4 from "../../assets/ice4.png"
import cv4 from "../../assets/cv4.png"
const Departments = () => {
  return (
    <div>
      <Link to="/departments"></Link>
      <div className="pt-20">
        <SectionTitle
          className="font-serif"
          heading={"Departments"}
        ></SectionTitle>
      </div>
      {/* ----------------------1st s---------------------------------------- */}
      <div>
        <div class="carousel w-full">
          <div id="slide1" class="carousel-item relative w-full h-80" >
            <img
              src={cse4}
              class="w-full"
            />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" class="btn bg-transparent text-white hover:bg-transparent">
                ❮
              </a>
              <a href="#slide2" class="btn bg-transparent text-white hover:bg-transparent">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" class="carousel-item relative w-full">
            <img
              src={ice4}
              class="w-full"
            />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" class="btn bg-transparent text-white hover:bg-transparent">
                ❮
              </a>
              <a href="#slide3" class="btn bg-transparent text-white hover:bg-transparent">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" class="carousel-item relative w-full">
            <img
              src={eee4}
              class="w-full"
            />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" class="btn bg-transparent text-white hover:bg-transparent">
                ❮
              </a>
              <a href="#slide4" class="btn bg-transparent text-white hover:bg-transparent">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" class="carousel-item relative w-full">
            <img
              src={cv4}
              class="w-full"
            />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" class="btn bg-transparent text-white hover:bg-transparent">
                ❮
              </a>
              <a href="#slide1" class="btn bg-transparent text-white hover:bg-transparent">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------1st e---------------------------------------- */}
      {/* -----------------------------2nd part start----------------------- */}
      <p className="text-center font-bold pt-6 text-lg">
        To help you build your career and accomplish your goal, we are offering
        38 undergraduate and master's programs under 4 faculties
      </p>
      <div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={cse22}
                ></img>
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Computer Science & Engineering
                  </h2>
                  <p className="mb-4">
                    The Computer Science & Engineering department at REC is at
                    the forefront of research in areas such as artificial
                    intelligence (AI),machine learning,cybersecurity, and
                    software engineering.Our researchers are dedicated to the
                    development of algorithms, systems, and applications that
                    can transform industries and improve the quality of life.
                  </p>
                  <p className="border-b-4 pt-0 w-[280px]"></p>
                  <Link to="/cse">
                    <button className="py-2 w-[280px] h-8 px-6 mb-4 mt-2 bg-sky-600 rounded hover:bg-slate-950 duration-300 text-white flex items-center justify-center overflow-hidden hover:overflow-visible relative group">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="icon rotate-45 group-hover:duration-700 absolute w-12 -translate-x-full translate-y-full scale-0 group-hover:scale-100 group-hover:translate-x-8 group-hover:-translate-y-8 duration-150"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                      >
                        <g strokeWidth="0"></g>
                        <g strokeLinecap="round" strokeLinejoin="round"></g>
                        <g>
                          <path
                            d="M244.5 662l268.1-446.4 268 446.4z"
                            fill="#03090b"
                          ></path>
                          <path
                            d="M780.6 676.2H244.5c-5.3 0-10.2-2.7-12.8-7.1s-2.6-9.8 0-14.3l268.1-446.3c2.6-4.4 7.5-7.1 12.8-7.1 5.3 0 10.2 2.7 12.8 7.1l268.1 446.3c2.6 4.4 2.6 9.8 0 14.3-2.7 4.4-7.6 7.1-12.9 7.1z m-510.5-28.5H755L512.6 244.2 270.1 647.7z"
                            fill="#040E1B"
                          ></path>
                          <path
                            d="M512.6 23s129 131.7 129 352.4-129 376-129 376-129-155.3-129-376S512.6 23 512.6 23z"
                            fill="#F7F9F9"
                          ></path>
                          <path
                            d="M512.6 765.7c-4.5 0-8.8-2-11.6-5.4-1.4-1.6-33.7-40.9-66.4-108.1-30.1-61.9-65.9-160.2-65.9-276.8 0-116.9 36-208.8 66.1-265.4 32.8-61.6 65.5-95.3 66.9-96.7 2.8-2.9 6.7-4.5 10.8-4.5 4.1 0 8 1.6 10.8 4.5 1.4 1.4 34.1 35.1 66.9 96.7 30.2 56.6 66.1 148.6 66.1 265.4 0 116.6-35.8 214.9-65.9 276.8-32.6 67.2-65 106.5-66.4 108.1-2.7 3.4-6.9 5.4-11.4 5.4z m0-720.5c-11.9 14.5-32 41.3-51.8 78.8-28.4 53.6-62.4 140.8-62.4 251.5 0 111.4 34.3 205.4 63.1 264.7 19.6 40.3 39.1 70.2 51.1 86.9 12-16.9 31.9-47.2 51.5-87.8 28.6-59.1 62.7-152.9 62.7-263.9 0-110.7-33.9-197.8-62.4-251.5-19.9-37.4-40-64.3-51.8-78.7z"
                            fill="#040E1B"
                          ></path>
                          <path
                            d="M447.6 278.9a65 62.4 0 1 0 130 0 65 62.4 0 1 0-130 0Z"
                            fill="#03090b"
                          ></path>
                          <path
                            d="M512.6 355.6c-44 0-79.8-34.4-79.8-76.7s35.8-76.7 79.8-76.7 79.8 34.4 79.8 76.7-35.9 76.7-79.8 76.7z m0-124.8c-27.6 0-50.1 21.6-50.1 48.2s22.5 48.2 50.1 48.2 50.1-21.6 50.1-48.2-22.5-48.2-50.1-48.2z"
                            fill="#040E1B"
                          ></path>
                          <path
                            d="M570 860.9c0 13 1.5-7.5-57.4 141.4-56.2-142.1-57.4-128.4-57.4-141.4 0-36 25.7-65.2 57.4-65.2s57.4 29.2 57.4 65.2z"
                            fill="#03090b"
                          ></path>
                          <path
                            d="M512.5 1016.6c-6.2 0-11.7-3.7-13.9-9.2-31.2-78.9-45.6-110.1-51.8-123.3-5.4-11.6-6.6-14.3-6.6-23.1 0-43.8 32.4-79.5 72.2-79.5 39.8 0 72.2 35.7 72.2 79.5v0.9c0 7.7-1 9.9-5.3 19.1-5.8 12.4-19.5 41.6-53.1 126.5-2 5.4-7.5 9.1-13.7 9.1z m0-206.7c-23.5 0-42.6 22.9-42.6 51 0 2.7 0 2.7 4.1 11.5 5.7 12.3 16.5 35.7 38.5 90.1 24-59.5 34.8-82.6 39.9-93.4 1.2-2.5 2.3-4.9 2.7-5.9v-2.3c0-28.1-19.1-51-42.6-51z"
                            fill="#040E1B"
                          ></path>
                        </g>
                      </svg>
                      <span className="duration-500">Program Details</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={eee22}
                ></img>
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Electrical & Electronic Engineering
                  </h2>
                  <p className="mb-4">
                    Our Electrical & Electronic Engineering research teams are
                    pioneering new frontiers in areas such as power systems,
                    renewable energy, electronic devices, and control systems.
                    We are committed to creating energy-efficient solutions,
                    advancing semiconductor technologies, and developing
                    sophisticated control systems to promote a more sustainable
                    and technologically advanced society.
                  </p>
                  <p className="border-b-4 pt-0 w-[280px]"></p>
                  <Link to="/eee">
                    <button className="py-2 w-[280px] h-8 px-6 mb-4 mt-2 bg-sky-600 rounded hover:bg-slate-950 duration-300 text-white flex items-center justify-center overflow-hidden hover:overflow-visible relative group">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="icon rotate-45 group-hover:duration-700 absolute w-12 -translate-x-full translate-y-full scale-0 group-hover:scale-100 group-hover:translate-x-8 group-hover:-translate-y-8 duration-150"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                      >
                        <g strokeWidth="0"></g>
                        <g strokeLinecap="round" strokeLinejoin="round"></g>
                        <g>
                          <path
                            d="M244.5 662l268.1-446.4 268 446.4z"
                            fill="#03090b"
                          ></path>
                          <path
                            d="M780.6 676.2H244.5c-5.3 0-10.2-2.7-12.8-7.1s-2.6-9.8 0-14.3l268.1-446.3c2.6-4.4 7.5-7.1 12.8-7.1 5.3 0 10.2 2.7 12.8 7.1l268.1 446.3c2.6 4.4 2.6 9.8 0 14.3-2.7 4.4-7.6 7.1-12.9 7.1z m-510.5-28.5H755L512.6 244.2 270.1 647.7z"
                            fill="#040E1B"
                          ></path>
                          <path
                            d="M512.6 23s129 131.7 129 352.4-129 376-129 376-129-155.3-129-376S512.6 23 512.6 23z"
                            fill="#F7F9F9"
                          ></path>
                          <path
                            d="M512.6 765.7c-4.5 0-8.8-2-11.6-5.4-1.4-1.6-33.7-40.9-66.4-108.1-30.1-61.9-65.9-160.2-65.9-276.8 0-116.9 36-208.8 66.1-265.4 32.8-61.6 65.5-95.3 66.9-96.7 2.8-2.9 6.7-4.5 10.8-4.5 4.1 0 8 1.6 10.8 4.5 1.4 1.4 34.1 35.1 66.9 96.7 30.2 56.6 66.1 148.6 66.1 265.4 0 116.6-35.8 214.9-65.9 276.8-32.6 67.2-65 106.5-66.4 108.1-2.7 3.4-6.9 5.4-11.4 5.4z m0-720.5c-11.9 14.5-32 41.3-51.8 78.8-28.4 53.6-62.4 140.8-62.4 251.5 0 111.4 34.3 205.4 63.1 264.7 19.6 40.3 39.1 70.2 51.1 86.9 12-16.9 31.9-47.2 51.5-87.8 28.6-59.1 62.7-152.9 62.7-263.9 0-110.7-33.9-197.8-62.4-251.5-19.9-37.4-40-64.3-51.8-78.7z"
                            fill="#040E1B"
                          ></path>
                          <path
                            d="M447.6 278.9a65 62.4 0 1 0 130 0 65 62.4 0 1 0-130 0Z"
                            fill="#03090b"
                          ></path>
                          <path
                            d="M512.6 355.6c-44 0-79.8-34.4-79.8-76.7s35.8-76.7 79.8-76.7 79.8 34.4 79.8 76.7-35.9 76.7-79.8 76.7z m0-124.8c-27.6 0-50.1 21.6-50.1 48.2s22.5 48.2 50.1 48.2 50.1-21.6 50.1-48.2-22.5-48.2-50.1-48.2z"
                            fill="#040E1B"
                          ></path>
                          <path
                            d="M570 860.9c0 13 1.5-7.5-57.4 141.4-56.2-142.1-57.4-128.4-57.4-141.4 0-36 25.7-65.2 57.4-65.2s57.4 29.2 57.4 65.2z"
                            fill="#03090b"
                          ></path>
                          <path
                            d="M512.5 1016.6c-6.2 0-11.7-3.7-13.9-9.2-31.2-78.9-45.6-110.1-51.8-123.3-5.4-11.6-6.6-14.3-6.6-23.1 0-43.8 32.4-79.5 72.2-79.5 39.8 0 72.2 35.7 72.2 79.5v0.9c0 7.7-1 9.9-5.3 19.1-5.8 12.4-19.5 41.6-53.1 126.5-2 5.4-7.5 9.1-13.7 9.1z m0-206.7c-23.5 0-42.6 22.9-42.6 51 0 2.7 0 2.7 4.1 11.5 5.7 12.3 16.5 35.7 38.5 90.1 24-59.5 34.8-82.6 39.9-93.4 1.2-2.5 2.3-4.9 2.7-5.9v-2.3c0-28.1-19.1-51-42.6-51z"
                            fill="#040E1B"
                          ></path>
                        </g>
                      </svg>
                      <span className="duration-500">Program Details</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={cv22}
                ></img>
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Civil Engineering
                  </h2>

                  <p className="mb-4">
                    Our Civil Engineering department carries out groundbreaking
                    research in areas such as sustainable construction
                    materials, structural health monitoring, and environmental
                    engineering. Our faculty and students collaborate to develop
                    new materials, designs, and methods that contribute to safe,
                    durable, and environmentally friendly infrastructures.
                  </p>
                  <p className="border-b-4 pt-0 w-[280px]"></p>
                  <Link to="/ce">
                    <button className="py-2 w-[280px] h-8 px-6 mb-4 mt-2 bg-sky-600 rounded hover:bg-slate-950 duration-300 text-white flex items-center justify-center overflow-hidden hover:overflow-visible relative group">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="icon rotate-45 group-hover:duration-700 absolute w-12 -translate-x-full translate-y-full scale-0 group-hover:scale-100 group-hover:translate-x-8 group-hover:-translate-y-8 duration-150"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                      >
                        <g strokeWidth="0"></g>
                        <g strokeLinecap="round" strokeLinejoin="round"></g>
                        <g>
                          <path
                            d="M244.5 662l268.1-446.4 268 446.4z"
                            fill="#03090b"
                          ></path>
                          <path
                            d="M780.6 676.2H244.5c-5.3 0-10.2-2.7-12.8-7.1s-2.6-9.8 0-14.3l268.1-446.3c2.6-4.4 7.5-7.1 12.8-7.1 5.3 0 10.2 2.7 12.8 7.1l268.1 446.3c2.6 4.4 2.6 9.8 0 14.3-2.7 4.4-7.6 7.1-12.9 7.1z m-510.5-28.5H755L512.6 244.2 270.1 647.7z"
                            fill="#040E1B"
                          ></path>
                          <path
                            d="M512.6 23s129 131.7 129 352.4-129 376-129 376-129-155.3-129-376S512.6 23 512.6 23z"
                            fill="#F7F9F9"
                          ></path>
                          <path
                            d="M512.6 765.7c-4.5 0-8.8-2-11.6-5.4-1.4-1.6-33.7-40.9-66.4-108.1-30.1-61.9-65.9-160.2-65.9-276.8 0-116.9 36-208.8 66.1-265.4 32.8-61.6 65.5-95.3 66.9-96.7 2.8-2.9 6.7-4.5 10.8-4.5 4.1 0 8 1.6 10.8 4.5 1.4 1.4 34.1 35.1 66.9 96.7 30.2 56.6 66.1 148.6 66.1 265.4 0 116.6-35.8 214.9-65.9 276.8-32.6 67.2-65 106.5-66.4 108.1-2.7 3.4-6.9 5.4-11.4 5.4z m0-720.5c-11.9 14.5-32 41.3-51.8 78.8-28.4 53.6-62.4 140.8-62.4 251.5 0 111.4 34.3 205.4 63.1 264.7 19.6 40.3 39.1 70.2 51.1 86.9 12-16.9 31.9-47.2 51.5-87.8 28.6-59.1 62.7-152.9 62.7-263.9 0-110.7-33.9-197.8-62.4-251.5-19.9-37.4-40-64.3-51.8-78.7z"
                            fill="#040E1B"
                          ></path>
                          <path
                            d="M447.6 278.9a65 62.4 0 1 0 130 0 65 62.4 0 1 0-130 0Z"
                            fill="#03090b"
                          ></path>
                          <path
                            d="M512.6 355.6c-44 0-79.8-34.4-79.8-76.7s35.8-76.7 79.8-76.7 79.8 34.4 79.8 76.7-35.9 76.7-79.8 76.7z m0-124.8c-27.6 0-50.1 21.6-50.1 48.2s22.5 48.2 50.1 48.2 50.1-21.6 50.1-48.2-22.5-48.2-50.1-48.2z"
                            fill="#040E1B"
                          ></path>
                          <path
                            d="M570 860.9c0 13 1.5-7.5-57.4 141.4-56.2-142.1-57.4-128.4-57.4-141.4 0-36 25.7-65.2 57.4-65.2s57.4 29.2 57.4 65.2z"
                            fill="#03090b"
                          ></path>
                          <path
                            d="M512.5 1016.6c-6.2 0-11.7-3.7-13.9-9.2-31.2-78.9-45.6-110.1-51.8-123.3-5.4-11.6-6.6-14.3-6.6-23.1 0-43.8 32.4-79.5 72.2-79.5 39.8 0 72.2 35.7 72.2 79.5v0.9c0 7.7-1 9.9-5.3 19.1-5.8 12.4-19.5 41.6-53.1 126.5-2 5.4-7.5 9.1-13.7 9.1z m0-206.7c-23.5 0-42.6 22.9-42.6 51 0 2.7 0 2.7 4.1 11.5 5.7 12.3 16.5 35.7 38.5 90.1 24-59.5 34.8-82.6 39.9-93.4 1.2-2.5 2.3-4.9 2.7-5.9v-2.3c0-28.1-19.1-51-42.6-51z"
                            fill="#040E1B"
                          ></path>
                        </g>
                      </svg>
                      <span className="duration-500">Program Details</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={ice22}
                ></img>
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    ICE
                  </h2>
                  <p className="mb-4">
                    In the Information & Communication Engineering department,
                    our research efforts are primarily focused on data science,
                    wireless communication, network security, and Internet of
                    Things (IoT). We aspire to create robust and innovative
                    solutions to address the challenges posed by the ever-
                    evolving landscape of digital communication and information
                    processing.
                  </p>
                  <p className="border-b-4 pt-0 w-[280px]"></p>
                  <Link to="/ice">
                    <button className="py-2 w-[280px] h-8 px-6 mb-4 mt-2 bg-sky-600 rounded hover:bg-slate-950 duration-300 text-white flex items-center justify-center overflow-hidden hover:overflow-visible relative group">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="icon rotate-45 group-hover:duration-700 absolute w-12 -translate-x-full translate-y-full scale-0 group-hover:scale-100 group-hover:translate-x-8 group-hover:-translate-y-8 duration-150"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                      >
                        <g strokeWidth="0"></g>
                        <g strokeLinecap="round" strokeLinejoin="round"></g>
                        <g>
                          <path
                            d="M244.5 662l268.1-446.4 268 446.4z"
                            fill="#03090b"
                          ></path>
                          <path
                            d="M780.6 676.2H244.5c-5.3 0-10.2-2.7-12.8-7.1s-2.6-9.8 0-14.3l268.1-446.3c2.6-4.4 7.5-7.1 12.8-7.1 5.3 0 10.2 2.7 12.8 7.1l268.1 446.3c2.6 4.4 2.6 9.8 0 14.3-2.7 4.4-7.6 7.1-12.9 7.1z m-510.5-28.5H755L512.6 244.2 270.1 647.7z"
                            fill="#040E1B"
                          ></path>
                          <path
                            d="M512.6 23s129 131.7 129 352.4-129 376-129 376-129-155.3-129-376S512.6 23 512.6 23z"
                            fill="#F7F9F9"
                          ></path>
                          <path
                            d="M512.6 765.7c-4.5 0-8.8-2-11.6-5.4-1.4-1.6-33.7-40.9-66.4-108.1-30.1-61.9-65.9-160.2-65.9-276.8 0-116.9 36-208.8 66.1-265.4 32.8-61.6 65.5-95.3 66.9-96.7 2.8-2.9 6.7-4.5 10.8-4.5 4.1 0 8 1.6 10.8 4.5 1.4 1.4 34.1 35.1 66.9 96.7 30.2 56.6 66.1 148.6 66.1 265.4 0 116.6-35.8 214.9-65.9 276.8-32.6 67.2-65 106.5-66.4 108.1-2.7 3.4-6.9 5.4-11.4 5.4z m0-720.5c-11.9 14.5-32 41.3-51.8 78.8-28.4 53.6-62.4 140.8-62.4 251.5 0 111.4 34.3 205.4 63.1 264.7 19.6 40.3 39.1 70.2 51.1 86.9 12-16.9 31.9-47.2 51.5-87.8 28.6-59.1 62.7-152.9 62.7-263.9 0-110.7-33.9-197.8-62.4-251.5-19.9-37.4-40-64.3-51.8-78.7z"
                            fill="#040E1B"
                          ></path>
                          <path
                            d="M447.6 278.9a65 62.4 0 1 0 130 0 65 62.4 0 1 0-130 0Z"
                            fill="#03090b"
                          ></path>
                          <path
                            d="M512.6 355.6c-44 0-79.8-34.4-79.8-76.7s35.8-76.7 79.8-76.7 79.8 34.4 79.8 76.7-35.9 76.7-79.8 76.7z m0-124.8c-27.6 0-50.1 21.6-50.1 48.2s22.5 48.2 50.1 48.2 50.1-21.6 50.1-48.2-22.5-48.2-50.1-48.2z"
                            fill="#040E1B"
                          ></path>
                          <path
                            d="M570 860.9c0 13 1.5-7.5-57.4 141.4-56.2-142.1-57.4-128.4-57.4-141.4 0-36 25.7-65.2 57.4-65.2s57.4 29.2 57.4 65.2z"
                            fill="#03090b"
                          ></path>
                          <path
                            d="M512.5 1016.6c-6.2 0-11.7-3.7-13.9-9.2-31.2-78.9-45.6-110.1-51.8-123.3-5.4-11.6-6.6-14.3-6.6-23.1 0-43.8 32.4-79.5 72.2-79.5 39.8 0 72.2 35.7 72.2 79.5v0.9c0 7.7-1 9.9-5.3 19.1-5.8 12.4-19.5 41.6-53.1 126.5-2 5.4-7.5 9.1-13.7 9.1z m0-206.7c-23.5 0-42.6 22.9-42.6 51 0 2.7 0 2.7 4.1 11.5 5.7 12.3 16.5 35.7 38.5 90.1 24-59.5 34.8-82.6 39.9-93.4 1.2-2.5 2.3-4.9 2.7-5.9v-2.3c0-28.1-19.1-51-42.6-51z"
                            fill="#040E1B"
                          ></path>
                        </g>
                      </svg>
                      <span className="duration-500">Program Details</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -----------------------------2nd part end----------------------- */}
    </div>
  );
};

export default Departments;




