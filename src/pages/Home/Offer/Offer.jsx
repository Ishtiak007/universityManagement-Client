import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineFileProtect } from "react-icons/ai";
import { IoLibrarySharp } from "react-icons/io5";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiClubhouse } from "react-icons/si";
import { MdEmojiTransportation } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { SiHelpdesk } from "react-icons/si";
import stand from "../../../assets/stand.png"
const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
const Offer = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  return (
    <div>
      <div className="card lg:card-side bg-base-100  ">
        <div className="lg:w-3/5 w-full">
          <div className="pb-4 text-sky-600">
            <h3 className="lg:text-4xl text-2xl  uppercase border-y-2 py-2 font-bold">
              What We Offer
            </h3>
            <p className="pt-4 font-bold text-black">
              At Rangpur Engineering College, students get the opportunity to
              think, learn and grow.
            </p>
          </div>
          <div className="card-body">
            {/* left side----------- */}
            <div>
              {/* part two div---------------------------------------------- */}
              {/* <div class="flex flex-wrap">
                <div class="sm:w-full md:w-1/2 py-4">
                  <div class="flex">
                    <p class="pt-2 pr-2">
                      <AiOutlineFileProtect class="w-12 h-12" color="black" />
                    </p>
                    <h2 class="text-2xl">
                      Accommodation <br />
                      <p class="text-sm">
                        We are providing a secure and convenient living facility
                        for our students.
                      </p>
                    </h2>
                  </div>
                </div>

                <div class="sm:w-full md:w-1/2 py-4">
                  <div class="flex">
                    <p class="pt-2 pr-2">
                      <IoLibrarySharp class="w-12 h-12" color="black" />
                    </p>
                    <h2 class="text-2xl">
                      Library <br />
                      <p class="text-sm">
                        RIC library has a collection of over 50000 books,
                        journals, and research papers, enriching the resources
                        day by day.
                      </p>
                    </h2>
                  </div>
                </div>

                <div class="w-full md:w-1/2 py-4">
                  <div class="flex">
                    <p class="pt-4 pr-2">
                      <BsFillPersonLinesFill class="w-12 h-12" color="black" />
                    </p>
                    <h2 class="text-2xl">
                      Blended Learning <br />
                      Platform <br />
                      <p class="text-sm">
                        To engage students in learning after face-to-face
                        classes, our faculty members and students collaborate in
                        the online..
                      </p>
                    </h2>
                  </div>
                </div>

                <div class="w-full md:w-1/2 py-4">
                  <div class="flex">
                    <p class="pt-4 pr-2">
                      <SiClubhouse class="w-12 h-12" color="black" />
                    </p>
                    <h2 class="text-2xl">
                      REC Learniverse <br />
                      <p class="text-sm">
                        Our motto, "Let's Craft Futures Together," drives
                        knowledge sharing and collaborative learning.
                      </p>
                    </h2>
                  </div>
                </div>

                <div class="w-full md:w-1/2 py-4">
                  <div class="flex">
                    <p class="pt-4 pr-2">
                      <MdEmojiTransportation class="w-12 h-12" color="black" />
                    </p>
                    <h2 class="text-2xl">
                      Transportation <br />
                      <p class="text-sm">
                        To make the student’s life easier and safe, we are
                        providing buses from different points of Rangpur city
                        to....
                      </p>
                    </h2>
                  </div>
                </div>

                <div class="w-full md:w-1/2 py-4">
                  <div class="flex">
                    <p class="pt-4 pr-2">
                      <FaLaptopCode class="w-12 h-12" color="black" />
                    </p>
                    <h2 class="text-2xl ">
                      One student one laptop <br />
                      <p class="text-sm">
                        Under the ‘One student one laptop’ project.REC has
                        distributed over 500 f..
                      </p>
                    </h2>
                  </div>
                </div>

                <div class="w-full md:w-1/2 py-4">
                  <div class="flex">
                    <p class="pt-4 pr-2">
                      <MdOutlineSportsGymnastics
                        class="w-12 h-12"
                        color="black"
                      />
                    </p>
                    <h2 class="text-2xl">
                      Sports Club <br />
                      <p class="text-sm">
                        To ensure the mental and physical well-being of our
                        students and employees, we are providing a well-equipped
                        sports club.
                      </p>
                    </h2>
                  </div>
                </div>

                <div class="w-full md:w-1/2 py-8">
                  <div class="flex">
                    <p class="pt- pr-2">
                      <SiHelpdesk class="w-12 h-12" color="black" />
                    </p>
                    <h2 class="text-2xl">
                      Helpdesk
                      <br />
                      <p class="text-sm">
                        We offer continuous support to our students, day and
                        night
                      </p>
                    </h2>
                  </div>
                </div>
              </div> */}
              <section class="text-black-600 body-font">
                <div class="container py-2 mx-auto flex flex-wrap">
                  <div class="flex flex-wrap -m-4">
                    <div class="lg:w-1/2 md:w-full sm:w-full py-4">
                      <div class="flex sm:flex-row flex-col">
                        <div class="w-16 h-16  sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full   text-indigo-500 flex-shrink-0">
                          <p class="pt-2 pr-2">
                            <AiOutlineFileProtect size="4.3rem" color="#0284c7" />
                          </p>
                        </div>
                        <div class="flex-grow">
                          <h2 class="text-sky-600 text-lg title-font font-medium mb-3">
                            Accommodation
                          </h2>
                          <p class="leading-relaxed text-sm">
                            We are providing a secure and convenient living
                            facility for our students.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* 2nd---------------- */}
                    <div class=" lg:w-1/2 md:w-full py-4">
                      <div class="flex sm:flex-row flex-col">
                        <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full   text-indigo-500 flex-shrink-0">
                          <p class="pt-2 pr-2">
                            <SiClubhouse size="4.3rem" color="#0284c7" />
                          </p>
                        </div>
                        <div class="flex-grow">
                          <h2 class="text-sky-600 text-lg title-font font-medium mb-3">
                            REC Learniverse
                          </h2>
                          <p class="leading-relaxed text-sm">
                            Our motto, "Let's Craft Futures Together," drives
                            knowledge sharing and collaborative learning.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class=" lg:w-1/2 md:w-full py-4">
                      <div class="flex sm:flex-row flex-col">
                        <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full   text-indigo-500 flex-shrink-0">
                          <p class="pt-2 pr-2">
                            <FaLaptopCode size="4.3rem" color="#0284c7" />
                          </p>
                        </div>
                        <div class="flex-grow">
                          <h2 class="text-sky-600 text-lg title-font font-medium mb-3">
                            One student one laptop
                          </h2>
                          <p class="leading-relaxed text-sm">
                            Under the ‘One student one laptop’ project.REC has
                            distributed over 500 f.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* 2nd---------------- */}
                    <div class=" lg:w-1/2 md:w-full py-4">
                      <div class="flex sm:flex-row flex-col">
                        <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full   text-indigo-500 flex-shrink-0">
                          <p class="pt-2 pr-2">
                            <MdOutlineSportsGymnastics
                              size="4.3rem"
                              color="#0284c7"
                            />
                          </p>
                        </div>
                        <div class="flex-grow">
                          <h2 class="text-sky-600 text-lg title-font font-medium mb-3">
                            Sports Club
                          </h2>
                          <p class="leading-relaxed text-sm">
                            To ensure the mental and physical well-being of our
                            students and employees, we are providing a
                            well-equipped sports club.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class=" lg:w-1/2 md:w-full py-4">
                      <div class="flex sm:flex-row flex-col">
                        <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full   text-indigo-500 flex-shrink-0">
                          <p class="pt-2 pr-2">
                            <MdEmojiTransportation
                              size="4.3rem"
                              color="#0284c7"
                            />
                          </p>
                        </div>
                        <div class="flex-grow">
                          <h2 class="text-sky-600 text-lg title-font font-medium mb-3">
                            Transportation
                          </h2>
                          <p class="leading-relaxed text-sm">
                            To make the student’s life easier and safe, we are
                            providing buses from different points of Rangpur
                            city to
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* 2nd---------------- */}
                    <div class=" lg:w-1/2 md:w-full py-4">
                      <div class="flex sm:flex-row flex-col">
                        <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full   text-indigo-500 flex-shrink-0">
                          <p class="pt-2 pr-2">
                            <SiHelpdesk size="4.3rem" color="#0284c7" />
                          </p>
                        </div>
                        <div class="flex-grow">
                          <h2 class="text-sky-600 text-lg title-font font-medium mb-3">
                            Helpdesk
                          </h2>
                          <p class="leading-relaxed text-sm">
                            We offer continuous support to our students, day and
                            night
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class=" lg:w-1/2 md:w-full py-4">
                      <div class="flex sm:flex-row flex-col">
                        <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full   text-indigo-500 flex-shrink-0">
                          <p class="pt-2 pr-2">
                            <IoLibrarySharp size="4.3rem" color="#0284c7" />
                          </p>
                        </div>
                        <div class="flex-grow">
                          <h2 class="text-sky-600 text-lg title-font font-medium mb-3">
                            Library
                          </h2>
                          <p class="leading-relaxed text-sm">
                            RIC library has a collection of over 50000 books,
                            journals, and research papers, enriching the
                            resources day by day.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* 2nd---------------- */}
                    <div class=" lg:w-1/2 md:w-full py-4">
                      <div class="flex sm:flex-row flex-col">
                        <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full   text-indigo-500 flex-shrink-0">
                          <p class="pt-2 pr-2">
                            <BsFillPersonLinesFill
                              size="4.3rem"
                              color="#0284c7"
                            />
                          </p>
                        </div>
                        <div class="flex-grow">
                          <h2 class="text-sky-600 text-lg title-font font-medium mb-3">
                            Blended Learning Platform
                          </h2>
                          <p class="leading-relaxed text-sm">
                            To engage students in learning after face-to-face
                            classes, our faculty members and students
                            collaborate in the online..
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* part two div---------------------------------------------- */}
            </div>
            {/* left side----------- */}
          </div>
        </div>

        <div className="lg:w-2/5 w-full">
          <figure>
            <motion.div
              initial={false}
              animate={
                isLoaded && isInView
                  ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                  : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
              }
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
              onViewportEnter={() => setIsInView(true)}
            >
              <img
                src={stand}
                alt="Album"
                onLoad={handleImageLoad}
              />
            </motion.div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Offer;
