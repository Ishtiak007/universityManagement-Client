import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { motion } from "framer-motion";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import kaniz from "../../assets/Kanij Rabeya Nancy.jpeg";
import Dipto from "../../assets/Dipto.jpg";
import Khalid from "../../assets/Khalid.jpg";
import Jhanajay from "../../assets/Jnananjan Roy.webp";
import tariq from "../../assets/photo - Tarikul Islam.jpg";
import polas from "../../assets/polas.jpg";
import naz from "../../assets/MD. NAZMUL HASSAN.jpg";
import nas from "../../assets/MdNasimHaidar.jpeg";
import gol from "../../assets/Golam Md. Al Shamim.jpg";
import row from "../../assets/Photo_Rownak_RUET - Rownak Afroz.png";
import setu from "../../assets/sajedur rahman.jpg";
import hafiz from "../../assets/al-Hafiz.jpeg";
import nazi from "../../assets/IMG_20230711_143310 - Md Nazmul Hasan Ruhan (1).jpg";
import limon from "../../assets/300X300 - Shahin Lemon.jpg";
import masum from "../../assets/masum.jpg";
import asha from "../../assets/asha.jpg";
import shah from "../../assets/shah.jpg";
import solai from "../../assets/solai.jpg";
import tamim from "../../assets/tamim.jpg";

const Teacher = () => {
  return (
    <div>
      <Link to="/teacher"></Link>
        {/* --------------------------------1st section start------------------- */}
        <section class="text-#0284c7 body-font">
          <div class="container px-5 py-12 mx-auto">
            <SectionTitle
              className="font-serif"
              heading={"Teachers"}
              // subHeading={"National and International scholars, Business leaders, Entrepreneurs, Dignitaries visited us to share experiences, explore opportunities, collaborate and give guidance to the students"}
            ></SectionTitle>
            <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-52 rounded w-full object-cover object-center mb-6"
                    src={solai}
                    alt="content"
                  ></img>
                  <h3 class="tracking-widest text-#0284c7 text-xs font-medium title-font">
                    Lecturer,B.Sc. Physics(CCR)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Solaiman Ali
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                       
                        <a href="https://www.facebook.com/suzon.miah">
                          <FaFacebookF href="https://www.facebook.com/suzon.miah" size="1.7rem" color="#0284c7" />
                        </a>
                      
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
                          <FaWhatsapp size="1.7rem" color="#0284c7" />
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
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-52 rounded w-full object-cover object-center mb-6"
                    src={shah}
                    alt="content"
                  ></img>
                  <h3 class="tracking-widest text-#0284c7 text-xs font-medium title-font">
                    Lecturer,B.Sc. Applied Statistics(DU)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Shahadat Babu 
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                       
                        <a href="https://www.facebook.com/shahadat.babu.3">
                          <FaFacebookF href="https://www.facebook.com/shahadat.babu.3" size="1.7rem" color="#0284c7" />
                        </a>
                      
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
                          <FaWhatsapp size="1.7rem" color="#0284c7" />
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
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-52 rounded w-full object-cover object-center mb-6"
                    src={masum}
                    alt="content"
                  ></img>
                  <h3 class="tracking-widest text-#0284c7 text-xs font-medium title-font">
                    Lecturer,B.Sc. Mathematics(RU)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Mohammad Masum
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                       
                        <a href="https://www.facebook.com/mohammad.masum.3701">
                          <FaFacebookF href="https://www.facebook.com/mohammad.masum.3701" size="1.7rem" color="#0284c7" />
                        </a>
                      
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
                          <FaWhatsapp size="1.7rem" color="#0284c7" />
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
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-52 rounded w-full object-cover object-center mb-6"
                    src={tamim}
                    alt="content"
                  ></img>
                  <h3 class="tracking-widest text-#0284c7 text-xs font-medium title-font">
                    Lecturer,B.Sc. English(CCR)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  MD Obaidur Rahman Tamim 
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                       
                        <a href="https://www.facebook.com/The.Phoenix.369">
                          <FaFacebookF href="https://www.facebook.com/The.Phoenix.369" size="1.7rem" color="#0284c7" />
                        </a>
                      
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
                          <FaWhatsapp size="1.7rem" color="#0284c7" />
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
                </div>
              </div>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-52 rounded w-full object-cover object-center mb-6"
                    src={Khalid}
                    alt="content"
                  ></img>
                  <h3 class=" text-#0284c7 text-xs font-medium title-font">
                    Lecturer,B.Sc. in CSE(RU)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Md. Khalid Hossen
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <a href="https://www.facebook.com/khalid.hasan.77128261?mibextid=ZbWKwL">
                        <FaFacebookF
                          href="https://www.facebook.com/khalid.hasan.77128261?mibextid=ZbWKwL"
                          size="1.7rem"
                          color="#0284c7"
                        />
                      </a>
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
                          <FaWhatsapp size="1.7rem" color="#0284c7" />
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
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-52 rounded w-full object-cover object-center mb-6"
                    src={Dipto}
                    alt="content"
                  ></img>
                  <h3 class="tracking-widest text-#0284c7 text-xs font-medium title-font">
                    Lecturer,B.Sc. in CSE(AIUB)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Dipanjan Das Dipto
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="https://www.facebook.com/Dipto93?mibextid=ZbWKwL">
                          <FaFacebookF size="1.7rem" color="#0284c7" />
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
                          <FaWhatsapp size="1.7rem" color="#0284c7" />
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
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-52 rounded w-full object-cover object-center mb-6"
                    src={Jhanajay}
                    alt="content"
                  ></img>
                  <h3 class="tracking-widest text-#0284c7 text-xs font-medium title-font">
                    Lecturer,B.Sc. in CSE(SUST)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Jnananjan Roy
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="https://www.facebook.com/profile.php?id=100000580366774&mibextid=JRoKGi">
                          <FaFacebookF size="1.7rem" color="#0284c7" />
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
                          <FaWhatsapp size="1.7rem" color="#0284c7" />
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
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-52 rounded w-full object-cover object-center mb-6"
                    src={kaniz}
                    alt="content"
                  ></img>
                  <h3 class="tracking-widest text-#0284c7 text-xs font-medium title-font">
                    Lecturer,B.Sc. in CSE(RU)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Kanij Rabeya Nancy
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="https://www.facebook.com/profile.php?id=100012102336348">
                        <a
                          href="https://www.facebook.com/profile.php?id=100012102336348"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaFacebookF
                            href="https://www.facebook.com/profile.php?id=100012102336348"
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
                          <FaWhatsapp size="1.7rem" color="#0284c7" />
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
                </div>
              </div>
            </div>
            <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-52 rounded w-full object-cover object-center mb-6"
                    src={tariq}
                    alt="content"
                  ></img>
                  <h3 class=" text-#0284c7 text-xs font-medium title-font">
                  Lecturer,B.Sc. in CSE(PUST)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Md.Tarikul Islam 
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                  <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                       
                        <a href="https://www.facebook.com/profile.php?id=100005048774896">
                          <FaFacebookF href="https://www.facebook.com/profile.php?id=100005048774896" size="1.7rem" color="#0284c7" />
                        </a>
                      
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
                          <FaWhatsapp size="1.7rem" color="#0284c7" />
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
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-52 rounded w-full object-cover object-center mb-6"
                  src={polas}
                  alt="content"
                ></img>
                <h3 class=" text-#0284c7 text-xs font-medium title-font">
                  Lecturer,B.Sc. in RECR(RU)
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Polas chandra roy
                </h2>
                <div className="grid grid-flow-col gap-3">
                  <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                    <a href="https://www.facebook.com/polas.roy.9?mibextid=kFxxJD">
                      <FaFacebookF
                        href="https://www.facebook.com/polas.roy.9?mibextid=kFxxJD"
                        size="1.7rem"
                        color="#0284c7"
                      />
                    </a>
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
                        <FaWhatsapp size="1.7rem" color="#0284c7" />
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
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-52 rounded w-full object-cover object-center mb-6"
                  src={naz}
                  alt="content"
                ></img>
                <h3 class="tracking-widest text-#0284c7 text-xs font-medium title-font">
                  Lecturer,B.Sc. in EEE(RU)
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Md. Nazmul Hassan
                </h2>
                <div className="grid grid-flow-col gap-3">
                  <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                    <a href="https://www.facebook.com/nazmul.119?mibextid=ZbWKwL">
                      <FaFacebookF
                        href="https://www.facebook.com/nazmul.119?mibextid=ZbWKwL"
                        size="1.7rem"
                        color="#0284c7"
                      />
                    </a>
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
                        <FaWhatsapp size="1.7rem" color="#0284c7" />
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
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-52 rounded w-full object-cover object-center mb-6"
                  src={gol}
                  alt="content"
                ></img>
                <h3 class="tracking-widest text-#0284c7 text-xs font-medium title-font">
                  Lecturer,B.Sc. in EEE(RU)
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                Golam Md. Al Shamim 
                </h2>
                <div className="grid grid-flow-col gap-3">
                  <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                     
                      <a href="https://www.facebook.com/GolamMdAlShamim?mibextid=ZbWKwL">
                        <FaFacebookF href="https://www.facebook.com/GolamMdAlShamim?mibextid=ZbWKwL" size="1.7rem" color="#0284c7" />
                      </a>
                     
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
                        <FaWhatsapp size="1.7rem" color="#0284c7" />
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
              </div>
            </div>
            </div>
            {/* line---------------------------------- */}
            <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-52 rounded w-full object-cover object-center mb-6"
                  src={nas}
                  alt="content"
                ></img>
                <h3 class=" text-#0284c7 text-xs font-medium title-font">
                Lecturer,B.Sc. in EEE(RU)
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                Md. Nasim Haidar
                </h2>
                <div className="grid grid-flow-col gap-3">
                  <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                    <a href="https://www.facebook.com/nasim.haidar.16">
                      <FaFacebookF
                        href="https://www.facebook.com/nasim.haidar.16"
                        size="1.7rem"
                        color="#0284c7"
                      />
                    </a>
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
                        <FaWhatsapp size="1.7rem" color="#0284c7" />
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
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-52 rounded w-full object-cover object-center mb-6"
                    src={row}
                    alt="content"
                  ></img>
                  <h3 class=" text-#0284c7 text-xs font-medium title-font">
                    Lecturer,B.Sc. in CE(RUET)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Md Rownak Afroz 
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                       
                        <a href="https://www.facebook.com/rowankafroz.rownak?mibextid=JRoKGi">
                          <FaFacebookF href="https://www.facebook.com/rowankafroz.rownak?mibextid=JRoKGi" size="1.7rem" color="#0284c7" />
                        </a>
                       
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
                          <FaWhatsapp size="1.7rem" color="#0284c7" />
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
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-52 rounded w-full object-cover object-center mb-6"
                    src={setu}
                    alt="content"
                  ></img>
                  <h3 class="tracking-widest text-#0284c7 text-xs font-medium title-font">
                    Lecturer,B.Sc. in CE(BUET)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Md.Sajedur Rahman Setu
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                       
                        <a href="https://www.facebook.com/sajedur.rahmansetu/">
                          <FaFacebookF href="https://www.facebook.com/sajedur.rahmansetu/" size="1.7rem" color="#0284c7" />
                        </a>
                      
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
                          <FaWhatsapp size="1.7rem" color="#0284c7" />
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
                </div>
              </div>

              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-52 rounded w-full object-cover object-center mb-6"
                    src={hafiz}
                    alt="content"
                  ></img>
                  <h3 class="tracking-widest text-#0284c7 text-xs font-medium title-font">
                  Lecturer,B.Sc. in ICE(RU)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Md.al-Hafiz
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                       
                        <a href="https://www.facebook.com/alhafizattone.ice">
                          <FaFacebookF href="https://www.facebook.com/alhafizattone.ice" size="1.7rem" color="#0284c7" />
                        </a>
                      
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
                          <FaWhatsapp size="1.7rem" color="#0284c7" />
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
                </div>
              </div>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-52 rounded w-full object-cover object-center mb-6"
                    src={nazi}
                    alt="content"
                  ></img>
                  <h3 class=" text-#0284c7 text-xs font-medium title-font">
                    Lecturer,B.Sc. in ICT(MBSTU)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Md Nazmul Hasan Ruhan 
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                       
                        <a href="https://www.facebook.com/mnhruhan.mnhruhan?mibextid=ZbWKwL">
                          <FaFacebookF href="https://www.facebook.com/mnhruhan.mnhruhan?mibextid=ZbWKwL" size="1.7rem" color="#0284c7" />
                        </a>
                       
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
                          <FaWhatsapp size="1.7rem" color="#0284c7" />
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
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-52 rounded w-full object-cover object-center mb-6"
                    src={limon}
                    alt="content"
                  ></img>
                  <h3 class="tracking-widest text-#0284c7 text-xs font-medium title-font">
                    Lecturer,B.Sc. in CSE(BRUR)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  MD.Shahinuzzaman Lemon
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                        
                        <a href="https://www.facebook.com/jv.lemon.3">
                          <FaFacebookF href="https://www.facebook.com/jv.lemon.3" size="1.7rem" color="#0284c7" />
                        </a>
                       
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
                          <FaWhatsapp size="1.7rem" color="#0284c7" />
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
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-52 rounded w-full object-cover object-center mb-6"
                    src={asha}
                    alt="content"
                  ></img>
                  <h3 class="tracking-widest text-#0284c7 text-xs font-medium title-font">
                    Lecturer,B.Sc. Mathematics(RU)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Asha Roy Asha
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                       
                        <a href="https://www.facebook.com/profile.php?id=100009416488733">
                          <FaFacebookF href="https://www.facebook.com/profile.php?id=100009416488733" size="1.7rem" color="#0284c7" />
                        </a>
                      
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
                          <FaWhatsapp size="1.7rem" color="#0284c7" />
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
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/720x400"
                    alt="content"
                  ></img>
                  <h3 class="tracking-widest text-#0284c7 text-xs font-medium title-font">
                    Lecturer,B.Sc. in CSE(RU)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Kanij Rabeya Nancy
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaFacebookF size="1.7rem" color="#0284c7" />
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
                          <FaWhatsapp size="1.7rem" color="#0284c7" />
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
                </div>
              </div>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/720x400"
                    alt="content"
                  ></img>
                  <h3 class=" text-#0284c7 text-xs font-medium title-font">
                    Lecturer,B.Sc. in CSE(RU)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Md. Khalid Hossen
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaFacebookF size="1.7rem" color="#0284c7" />
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
                          <FaWhatsapp size="1.7rem" color="#0284c7" />
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
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/720x400"
                    alt="content"
                  ></img>
                  <h3 class="tracking-widest text-#0284c7 text-xs font-medium title-font">
                    Lecturer,B.Sc. in CSE(AIUB)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Dipanjan Das Dipto
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaFacebookF size="1.7rem" color="#0284c7" />
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
                          <FaWhatsapp size="1.7rem" color="#0284c7" />
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
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/720x400"
                    alt="content"
                  ></img>
                  <h3 class="tracking-widest text-#0284c7 text-xs font-medium title-font">
                    Lecturer,B.Sc. in CSE(SUST)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Jnananjan Roy
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaFacebookF size="1.7rem" color="#0284c7" />
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
                          <FaWhatsapp size="1.7rem" color="#0284c7" />
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
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/720x400"
                    alt="content"
                  ></img>
                  <h3 class="tracking-widest text-#0284c7 text-xs font-medium title-font">
                    Lecturer,B.Sc. in CSE(RU)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Kanij Rabeya Nancy
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaFacebookF size="1.7rem" color="#0284c7" />
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
                          <FaWhatsapp size="1.7rem" color="#0284c7" />
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
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* --------------------------------1st section end------------------- */}
      
    </div>
  );
};

export default Teacher;
