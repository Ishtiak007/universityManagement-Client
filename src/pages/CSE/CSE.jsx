import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import SectionTitle from "../../components/SectionTitle/SectionTitle";
// import LightGallery from "lightgallery/react";
// import lgZoom from "lightgallery/plugins/zoom";
// import lgVideo from "lightgallery/plugins/video";
import fjGallery from "flickr-justified-gallery";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { VscLiveShare } from "react-icons/vsc";
import { BiLogoGmail } from "react-icons/bi";
import { motion } from "framer-motion";
import kaniz from "../../assets/Kanij Rabeya Nancy.jpeg";
import Dipto from "../../assets/Dipto.jpg";
import Khalid from "../../assets/Khalid.jpg";
import Jhanajay from "../../assets/Jnananjan Roy.webp";
import tariq from "../../assets/photo - Tarikul Islam.jpg";
import cse1 from "../../assets/cse1.jpg";
import cse2 from "../../assets/cse-2.jpg";
import cse3 from "../../assets/cse-3.jpg";
import cse4 from "../../assets/cse-4.jpg";
import Talha from "../../assets/tal1.jpg";
import Sumai from "../../assets/sum.jpg";
import Roki from "../../assets/rok.jpg";
import Hum from "../../assets/hun.webp";


const CSE = () => {
  // useEffect(() => {
  //   fjGallery(document.querySelectorAll(".gallery"), {
  //     itemSelector: ".gallery__item",
  //     rowHeight: 180,
  //     lastRow: "start",
  //     gutter: 2,
  //     rowHeightTolerance: 0.1,
  //     calculateItemsHeight: false,
  //   });
  // }, []);
  const [currentSlider, setCurrentSlider] = useState(0);
  const carouselImages = [
    cse1 ,
    cse2,
    cse3,
    cse4
  ];
  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? carouselImages.length - 1 : currentSlider - 1
    );
  const nextSlider = useCallback(
    () =>
      setCurrentSlider((currentSlider) =>
        currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1
      ),
    [carouselImages.length]
  );
  // ------------------------------6th-------------------------------
  const [isOpen, setIsOpen] = useState(null);
  const accordionsData = [
    {
      title: "CSE103:Structure of C programming language.",
      description:
        'This course introduces students to the fundamental concepts of programming using the C language. Topics covered include data types, control structures (loops, conditionals), functions, arrays, pointers, and memory management. Emphasis is placed on understanding the syntax and structure of C, as well as developing problem-solving skills through programming assignments.',
    },
    {
      title: "CSE106:Discrete Mathematics.",
      description:
        "Discrete Mathematics is essential for computer science and engineering students, focusing on mathematical structures that are fundamentally discrete rather than continuous. Topics include set theory, logic, relations, functions, combinatorics, graph theory, and algorithms. The course emphasizes mathematical reasoning and proof techniques, providing a foundation for various areas in computer science, including data structures and algorithms.",
    },
    {
      title: "CSE110:Object Oriented Programming",
      description:
        "This course introduces the principles of object-oriented programming (OOP) using a specific programming language (often Java or C++). Key concepts include classes, objects, inheritance, polymorphism, encapsulation, and abstraction. Students learn how to design and implement software solutions that are modular, reusable, and easier to maintain by leveraging OOP principles.",
    },
    {
      title: "CSE430:Artificial Intelligence",
      description:
        "Artificial Intelligence (AI) is an advanced course that explores the concepts, techniques, and applications of AI. Topics may include search algorithms, knowledge representation, reasoning, machine learning, neural networks, natural language processing, and robotics. The course emphasizes practical applications of AI in various domains, encouraging students to develop algorithms and systems that can solve complex problems intelligently.",
    },
  ];

  const toggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };
  //--------------------6th finish-----------------
  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);
  return (
    <div>
      <Link to="/cse"></Link>
        <div className="py-16">
          <div className="mockup-browser border bg-base-300">
            <div className="mockup-browser-toolbar">
              <div className="input text-sky-600">https://cse.com</div>
            </div>
            {/* <div className="flex justify-center px-4 py-16 bg-base-200">
              Hello!
            </div> */}
          </div>
          {/* <SectionTitle
            className="font-serif"
            heading={"Computer Science & Engineering"}
            // subHeading={"National and International scholars, Business leaders, Entrepreneurs, Dignitaries visited us to share experiences, explore opportunities, collaborate and give guidance to the students"}
          ></SectionTitle> */}
          <div className="mx-auto md:w-8/12 mt-8 flex justify-center items-center ">
            {/* <p className='text-yellow-600'>----{subHeading}---</p> */}
            <h3 className="text-4xl uppercase border-y-2 pt-4 font-bold font-serif text-sky-600">
              Computer Science & Engineering
            </h3>
          </div>
        </div>
        {/* 2nd section----------------------------------------------- */}
        <section class="text-gray-600 body-font">
          <div class="container px-5 pb-4 mx-auto flex flex-col">
            {/* <div class="lg:w-[4/6] mx-auto"> */}
            <div class="lg:w-[1200px] mx-auto">
              {/* <div class="rounded-lg h-64 overflow-hidden ">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="https://dummyimage.com/1200x500"
                ></img>
              </div> */}
              <div class="flex flex-col sm:flex-row mt-10">
                <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div class="w-40 h-40 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                    <img
                      src={tariq}
                      className="h-40 w-40 rounded-full"
                      alt=""
                    />
                  </div>

                  <div class="flex flex-col items-center text-center justify-center">
                    <h2 class="font-medium title-font mt- text-black text-lg">
                      Md.Tarikul Islam <br />{" "}
                      <span className="text-xs text-#0284c7">
                        Lecturer,B.Sc. in CSE(PUST)
                      </span>
                    </h2>
                    <div class="w-12 h-1 bg-#0284c7 rounded mt- mb-"></div>
                    <p class="text-base py-2">Head of Department</p>
                    <div className="grid grid-flow-col gap-3 ">
                      <motion.div whileTap={{ rotate: 90, scale: 0.75 }} >
                        <Link to="https://www.facebook.com/profile.php?id=100005048774896">
                          <a href="https://www.facebook.com/profile.php?id=100005048774896">
                            <FaFacebookF
                              href="https://www.facebook.com/profile.php?id=100005048774896"
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
                        <Link to="tel:+123456789">
                          <a href="tel:+123456789">
                            <FaWhatsapp size="1.7rem" color="#0284c7" />
                          </a>
                        </Link>
                      </motion.div>
                      <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                        <Link to="tarikulislamcsepust@gmail.com">
                          <a href="tarikulislamcsepust@gmail.com">
                            <BiLogoGmail size="1.7rem" color="#0284c7" />
                          </a>
                          {/* ok */}
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
                <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p class="leading-relaxed text-lg mb-4">
                    Welcome to the Department of Computer Science and
                    Engineering (CSE) at Rangpur Engineering College (REC)! As
                    the Head of the Department, I'm thrilled to lead our team of
                    dedicated faculty members committed to providing you with an
                    exceptional education. Our curriculum focuses on core
                    computer science principles, practical skills, and holistic
                    development. With state-of-the-art facilities and industry
                    collaborations, we aim to equip you with the tools to
                    succeed in this dynamic field. Embrace opportunities, seek
                    guidance, and let's work together to shape a promising
                    future. Welcome aboard! <br />
                    Once again, welcome to the Department of Computer Science
                    and Engineering at Rangpur Engineering College. I look
                    forward to meeting and working with each one of you. Best
                    wishes for a fruitful and rewarding academic journey
                  </p>
                  <a class="text-#0284c7 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* -----------------------------------3rd section start---------------------------------------- */}
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-12 mx-auto">
            <div class="flex flex-wrap w-full mb-20">
              <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-sky-600">
                  Department Tutors
                </h1>
                <div class="h-1 w-20 bg-#0284c7 rounded bg-black"></div>
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
                          <FaFacebookF href="https://www.facebook.com/khalid.hasan.77128261?mibextid=ZbWKwL" size="1.7rem" color="#0284c7" />
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
          </div>
        </section>
        {/* -----------------------------------3rd section finish--------------------------------------- */}
        {/* ---------------------------------------4th section start------------------------------------- */}
        <div className="mx-auto md:w-8/12 my-8 flex justify-center items-center ">
          {/* <p className='text-yellow-600'>----{subHeading}---</p> */}
          <h3 className="text-4xl uppercase border-y-2 pt-4 font-bold font-serif text-sky-600">
            At a glance
          </h3>
        </div>
        <div className="h-60 w-full md:h-[470px] lg:h-[540px] relative overflow-hidden">
          {/* arrow left */}
          <button
            onClick={prevSlider}
            className="absolute top-1/2 left-3 z-50 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
          >
            <svg
              className="w-4 h-4 md:w-6 md:h-6 icon"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#0095FF"
                  d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                ></path>
              </g>
            </svg>
          </button>
          {/* arrow right */}
          <button
            onClick={nextSlider}
            className="absolute top-1/2 z-50 right-3  flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
          >
            <svg
              className="w-4 h-4 md:w-6 md:h-6 icon"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              transform="rotate(180)"
            >
              <g strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#0095FF"
                  d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                ></path>
              </g>
            </svg>
          </button>
          {/* dots */}
          <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
            {carouselImages.map((_, inx) => (
              <button
                key={_}
                onClick={() => setCurrentSlider(inx)}
                className={`rounded-full duration-500 bg-white ${
                  currentSlider === inx ? "w-8" : "wz-2"
                } h-2`}
              ></button>
            ))}
          </div>
          {/* Carousel container */}
          <div
            className="ease-linear duration-500 flex transform-gpu"
            style={{ transform: `translateX(-${currentSlider * 100}%)` }}
          >
            {/* sliders */}
            {carouselImages.map((slide, inx) => (
              <img
                key={slide}
                src={slide}
                className="min-w-full h-60 bg-#0284c7/20 sm:h-96 md:h-[540px] object-cover"
                alt={`Slider - ${inx + 1}`}
              />
            ))}
          </div>
        </div>
        {/* ---------------------------------------4th section finish------------------------------------- */}
        {/* <div>
          <LightGallery
            plugins={[lgZoom, lgVideo]}
            mode="lg-fade"
            pager={false}
            thumbnail={true}
            galleryId={"nature"}
            autoplayFirstVideo={false}
            elementClassNames={"gallery"}
            mobileSettings={{
              controls: false,
              showCloseIcon: false,
              download: false,
              rotate: false,
            }}
          >
            <a
              data-lg-size="1600-2400"
              data-pinterest-text="Pin it2"
              data-tweet-text="lightGallery slide  2"
              className="gallery__item"
              data-src="https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
              data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@therawhunter' >Massimiliano Morosinotto </a></h4><p> Location - <a href='https://unsplash.com/s/photos/tre-cime-di-lavaredo%2C-italia'>Tre Cime di Lavaredo, Italia</a>This is the Way</p>"
            >
              <img
                className="img-responsive"
                src="https://i.ibb.co/5k5KqGC/415919170-3569651840017744-150995019419902135-n.jpg"
              />
            </a>
            <a
              data-lg-size="1600-2400"
              data-pinterest-text="Pin it3"
              data-tweet-text="lightGallery slide  4"
              className="gallery__item"
              data-src="https://images.unsplash.com/photo-1605973029521-8154da591bd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
              data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@thesaboo' >Sascha Bosshard </a></h4><p> Location - <a href='https://unsplash.com/s/photos/pizol%2C-mels%2C-schweiz'>Pizol, Mels, Schweiz</a></p>"
            >
              <img
                className="img-responsive"
                src="https://images.unsplash.com/photo-1605973029521-8154da591bd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
              />
            </a>
            <a
              data-lg-size="1600-2398"
              data-pinterest-text="Pin it3"
              data-tweet-text="lightGallery slide  4"
              className="gallery__item"
              data-src="https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
              data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@yusufevli' >Yusuf Evli </a></h4><p> Foggy Road</p>"
            >
              <img
                className="img-responsive"
                src="https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
              />
            </a>
            <a
              data-lg-size="1600-1067"
              data-pinterest-text="Pin it3"
              data-tweet-text="lightGallery slide  4"
              className="gallery__item"
              data-src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
              data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@flovayn' >Jay Mantri</a></h4><p>  Misty shroud over a forest</p>"
            >
              <img
                className="img-responsive"
                src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
              />
            </a>
            <a
              data-lg-size="1600-1067"
              data-pinterest-text="Pin it3"
              data-tweet-text="lightGallery slide  4"
              className="gallery__item"
              data-src="https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
              data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@flovayn' >Florian van Duyn</a></h4><p>Location - <a href='Bled, Slovenia'>Bled, Slovenia</a> </p>"
            >
              <img
                className="img-responsive"
                src="https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
              />
            </a>
            <a
              data-lg-size="1600-1126"
              data-pinterest-text="Pin it3"
              data-tweet-text="lightGallery slide  4"
              className="gallery__item"
              data-src="https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
              data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@juanster' >Juan Davila</a></h4><p>Location - <a href='Bled, Slovenia'>Bled, Slovenia</a> Wooded lake island </p>"
            >
              <img
                className="img-responsive"
                src="https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
              />
            </a>
            <a
              data-lg-size="1600-1063"
              data-pinterest-text="Pin it3"
              data-tweet-text="lightGallery slide  4"
              className="gallery__item"
              data-src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
              data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@davidmarcu' >David Marcu</a></h4><p>Location - <a href='https://unsplash.com/s/photos/ciuca%C8%99-peak%2C-romania'>Ciucaș Peak, Romania</a> Alone in the unspoilt wilderness </p>"
            >
              <img
                className="img-responsive"
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
              />
            </a>
            <a
              data-lg-size="1600-2400"
              data-pinterest-text="Pin it3"
              data-tweet-text="lightGallery slide  4"
              className="gallery__item"
              data-src="https://images.unsplash.com/photo-1585338447937-7082f8fc763d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
              data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@whoisbenjamin' >whoisbenjamin</a></h4>
          <p>Location - <a href='https://unsplash.com/s/photos/ciuca%C8%99-peak%2C-romania'>Snowdonia National Park, Blaenau Ffestiniog, UK</a> 
          A swan on a calm misty lake in the mountains of Snowdonia, North Wales. <a href='https://unsplash.com/photos/9V6EkAoTWJM'>Link</a> </p>"
            >
              <img
                className="img-responsive"
                src="https://images.unsplash.com/photo-1585338447937-7082f8fc763d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
              />
            </a>
            <a
              data-lg-size="1600-1144"
              data-pinterest-text="Pin it3"
              data-tweet-text="lightGallery slide  4"
              className="gallery__item"
              data-src="https://images.unsplash.com/photo-1476842384041-a57a4f124e2e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
              data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@aaronburden' >Aaron Burden</a></h4><p>Location - <a href='https://unsplash.com/s/photos/grayling%2C-michigan%2C-united-states'>Grayling, Michigan, United States</a> Colorful trees near a lake. <a href='https://unsplash.com/photos/00QWN1J0g48'>Link</a> </p>"
            >
              <img
                className="img-responsive"
                src="https://images.unsplash.com/photo-1476842384041-a57a4f124e2e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
              />
            </a>
            <a
              data-lg-size="1600-1067"
              data-pinterest-text="Pin it3"
              data-tweet-text="lightGallery slide  4"
              className="gallery__item"
              data-src="https://images.unsplash.com/photo-1465311530779-5241f5a29892?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
              data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@kalenemsley' >Kalen Emsley</a></h4><p>Location - <a href='https://unsplash.com/s/photos/yukon-territory%2C-canada'>Yukon Territory, Canada</a> No captions. <a href='https://unsplash.com/photos/eHpYD4U5830'>Link</a> </p>"
            >
              <img
                className="img-responsive"
                src="https://images.unsplash.com/photo-1465311530779-5241f5a29892?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
              />
            </a>
            <a
              data-lg-size="1600-1067"
              data-pinterest-text="Pin it3"
              data-tweet-text="lightGallery slide  4"
              className="gallery__item"
              data-src="https://images.unsplash.com/photo-1461301214746-1e109215d6d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
              data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@kace' >Kace Rodriguez</a></h4><p>Location - <a href='https://unsplash.com/s/photos/pfeiffer-beach%2C-united-states'>Pfeiffer Beach, United States</a> Pfeiffer Beach at Dusk. <a href='https://unsplash.com/photos/eHpYD4U5830'>Link</a> </p>"
            >
              <img
                className="img-responsive"
                src="https://images.unsplash.com/photo-1461301214746-1e109215d6d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
              />
            </a>
            <a
              data-lg-size="1600-2400"
              data-pinterest-text="Pin it3"
              data-tweet-text="lightGallery slide  4"
              className="gallery__item"
              data-src="https://images.unsplash.com/photo-1610448721566-47369c768e70?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
              data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@patwhelen' >Pat Whelen</a></h4><p>Location - <a href='https://unsplash.com/s/photos/portsea-vic%2C-australia'>Portsea VIC, Australia</a> No caption <a href='https://unsplash.com/photos/EKLXDQ-dDRg'>Link</a> </p>"
            >
              <img
                className="img-responsive"
                src="https://images.unsplash.com/photo-1610448721566-47369c768e70?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
              />
            </a>
            <a
              data-lg-size="1600-1067"
              data-pinterest-text="Pin it3"
              data-tweet-text="lightGallery slide  4"
              className="gallery__item"
              data-src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
              data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@derekthomson' >Derek Thomson</a></h4><p>Location - <a href='https://unsplash.com/s/photos/mcway-falls%2C-united-states'>McWay Falls, United States</a> No caption <a href='https://unsplash.com/photos/TWoL-QCZubY'>Link</a> </p>"
            >
              <img
                className="img-responsive"
                src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
              />
            </a>
            <a
              data-lg-size="1600-2400"
              data-pinterest-text="Pin it3"
              data-tweet-text="lightGallery slide  4"
              className="gallery__item"
              data-src="https://images.unsplash.com/photo-1539678050869-2b97c7c359fd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
              data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@michaljaneck' >Michal Janek</a></h4><p>Location - <a href='https://unsplash.com/s/photos/big-sur%2C-united-states'>Big Sur, United States</a> Coast  </p>"
            >
              <img
                className="img-responsive"
                src="https://images.unsplash.com/photo-1539678050869-2b97c7c359fd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
              />
            </a>
            <a
              data-lg-size="1600-2400"
              data-pinterest-text="Pin it3"
              data-tweet-text="lightGallery slide  4"
              className="gallery__item"
              data-src="https://images.unsplash.com/photo-1446630073557-fca43d580fbe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
              data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@papillon' >Iris Papillon</a></h4><p>Location - <a href='https://unsplash.com/s/photos/big-sur%2C-united-states'>Big Sur, United States</a> Big Sur drive  </p>"
            >
              <img
                className="img-responsive"
                src="https://images.unsplash.com/photo-1446630073557-fca43d580fbe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
              />
            </a>
            <a
              data-lg-size="1600-1065"
              data-pinterest-text="Pin it3"
              data-tweet-text="lightGallery slide  4"
              className="gallery__item"
              data-src="https://images.unsplash.com/photo-1596370743446-6a7ef43a36f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
              data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@piyushh_dubeyy' >piyush dubey</a></h4><p>Published on August 2, 2020</p>"
            >
              <img
                className="img-responsive"
                src="https://images.unsplash.com/photo-1596370743446-6a7ef43a36f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
              />
            </a>
            <a
              data-lg-size="1600-2134"
              data-pinterest-text="Pin it3"
              data-tweet-text="lightGallery slide  4"
              className="gallery__item"
              data-src="https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
              data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@fynn_it' >fynn</a></h4><p>Location - <a href='https://unsplash.com/s/photos/big-sur%2C-united-states'>Big Sur, United States</a> Wasserauen, Appenzell Innerrhoden, Schweiz  </p>"
            >
              <img
                className="img-responsive"
                src="https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
              />
            </a>
            <a
              data-lg-size="1600-1060"
              data-pinterest-text="Pin it3"
              data-tweet-text="lightGallery slide  4"
              className="gallery__item"
              data-src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
              data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@danielleone' >Daniel Leone</a></h4><p>Location - <a href='https://unsplash.com/s/photos/poon-hill%2C-ghode-pani%2C-nepal'>Poon Hill, Ghode Pani, Nepal</a> Taken from the top of Poon Hill before sun rise </p>"
            >
              <img
                className="img-responsive"
                src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
              />
            </a>
            <a
              data-lg-size="1600-1037"
              data-pinterest-text="Pin it3"
              data-tweet-text="lightGallery slide  4"
              className="gallery__item"
              data-src="https://images.unsplash.com/photo-1510011560141-62c7e8fc7908?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
              data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@bboba' >Boba Jovanovic</a></h4><p>Location - <a href='https://unsplash.com/s/photos/bay-of-kotor'>Bay of Kotor</a> Boka kotorska bay </p>"
            >
              <img
                className="img-responsive"
                src="https://images.unsplash.com/photo-1510011560141-62c7e8fc7908?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
              />
            </a>
            <a
              data-lg-size="1600-899"
              data-pinterest-text="Pin it3"
              data-tweet-text="lightGallery slide  4"
              className="gallery__item"
              data-src="https://images.unsplash.com/photo-1586276393635-5ecd8a851acc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
              data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@svsdesigns' >Surendra Vikram Singh</a></h4><p>Location - <a href='https://unsplash.com/s/photos/lachung%2C-sikkim%2C-india'>Lachung, Sikkim, India</a> Cloud covered mountain </p>"
            >
              <img
                className="img-responsive"
                src="https://images.unsplash.com/photo-1586276393635-5ecd8a851acc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
              />
            </a>
            <a
              data-lg-size="1600-1067"
              data-pinterest-text="Pin it3"
              data-tweet-text="lightGallery slide  4"
              className="gallery__item"
              data-src="https://images.unsplash.com/photo-1471931452361-f5ff1faa15ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2252&q=80"
              data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@camadams' >Cam Adams</a></h4><p>Location - <a href='https://unsplash.com/s/photos/banff%2C-canada'>Banff, Canada</a> Lake along jagged mountains</p>"
            >
              <img
                className="img-responsive"
                src="https://images.unsplash.com/photo-1471931452361-f5ff1faa15ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
              />
            </a>
          </LightGallery>
        </div> */}
        {/* ------------------------------------------5th section start--------------------------------- */}
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            {/* <div class="flex flex-col text-center w-full mb-20">
              <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
                OUR TEAM
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven't heard of them.
              </p>
            </div> */}
            <div className="mx-auto md:w-8/12 my-8 flex justify-center items-center ">
              {/* <p className='text-yellow-600'>----{subHeading}---</p> */}
              <h3 className="text-4xl uppercase border-y-2 pt-4 font-bold font-serif text-#0284c7 text-sky-600">
                Student's Projet
              </h3>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="p-4 lg:w-1/2">
                <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src={Talha}
                  ></img>
                  <div class="flex-grow sm:pl-8">
                    <h2 class="title-font font-medium text-lg text-gray-900">
                      Talha Tarique
                    </h2>
                    <h3 class="text-gray-500 mb-3">Full Stack Developer</h3>
                    <p class="mb-4">
                    A conversational AI built with NLP that provides instant responses and assistance, improving user experience and efficiency.
                    </p>
                    <div className="flex gap-3">
                      <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                        <Link to="">
                          <a href="">
                            <IoLogoGithub size="1.7rem" color="#0284c7" />
                          </a>
                        </Link>
                      </motion.div>

                      <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                        <Link to="">
                          <a href="">
                            <VscLiveShare size="1.7rem" color="#0284c7" />
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
              <div class="p-4 lg:w-1/2">
                <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src={Roki}
                  ></img>
                  <div class="flex-grow sm:pl-8">
                    <h2 class="title-font font-medium text-lg text-gray-900">
                    Md Roki Sheik 
                    </h2>
                    <h3 class="text-gray-500 mb-3">Flutter Developer</h3>
                    <p class="mb-4">
                    An AI-powered tool that forecasts trends and insights by analyzing historical data, helping businesses make data-driven decisions.
                    </p>
                    <div className="flex gap-3">
                      <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                        <Link to="">
                          <a href="">
                            <IoLogoGithub size="1.7rem" color="#0284c7" />
                          </a>
                        </Link>
                      </motion.div>

                      <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                        <Link to="">
                          <a href="">
                            <VscLiveShare size="1.7rem" color="#0284c7" />
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
              <div class="p-4 lg:w-1/2">
                <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src={Sumai}
                  ></img>
                  <div class="flex-grow sm:pl-8">
                    <h2 class="title-font font-medium text-lg text-gray-900">
                    Sumaiya Kabir Tondra
                    </h2>
                    <h3 class="text-gray-500 mb-3">Job placement Executive</h3>
                    <p class="mb-4">
                    A machine learning model that detects and classifies objects within images, using computer vision techniques for various applications.
                    </p>
                    <div className="flex gap-3">
                      <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                        <Link to="">
                          <a href="">
                            <IoLogoGithub size="1.7rem" color="#0284c7" />
                          </a>
                        </Link>
                      </motion.div>

                      <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                        <Link to="">
                          <a href="">
                            <VscLiveShare size="1.7rem" color="#0284c7" />
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
              <div class="p-4 lg:w-1/2">
                <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src={Hum}
                  ></img>
                  <div class="flex-grow sm:pl-8">
                    <h2 class="title-font font-medium text-lg text-gray-900">
                    Humayra Khanom Rime
                    </h2>
                    <h3 class="text-gray-500 mb-3"> Machine Learning Engineer</h3>
                    <p class="mb-4">
                    An AI-based system that extracts insights from text data, identifying key themes, sentiments, and trends.
                    </p>
                    <div className="flex gap-3">
                      <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                        <Link to="">
                          <a href="">
                            <IoLogoGithub size="1.7rem" color="#0284c7" />
                          </a>
                        </Link>
                      </motion.div>

                      <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                        <Link to="">
                          <a href="">
                            <VscLiveShare size="1.7rem" color="#0284c7" />
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
          </div>
        </section>
        {/* ------------------------------------------5th section finish--------------------------------- */}
        {/* -------------------------------6th section start--------------------------------- */}
        <div className="mx-auto md:w-8/12 my-8 flex justify-center items-center ">
          {/* <p className='text-yellow-600'>----{subHeading}---</p> */}
          <h3 className="text-4xl uppercase border-y-2 pt-4 font-bold font-serif text-sky-600">
            Core Computer Science and Engineerig Courses
          </h3>
        </div>
        <div className="rounded-lg font-sans py-10">
          {accordionsData.map((PerAccordion, idx) => (
            <div
              key={idx}
              className="border-b border-black last-of-type:border-none"
            >
              <button
                onClick={() => toggle(idx)}
                className="flex h-full w-full justify-between py-4 text-left font-medium text-#0284c7 dark:text-#0284c7 text-sky-600" 
              >
                <span className="sm:text-lg md:text-xl">
                  {PerAccordion.title}
                </span>
                <span className="rounded-full p-2 ">
                  <svg
                    className="ml-8 mr-7 shrink-0 fill-#0284c7 dark:fill-#0284c7"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`origin-center transform transition duration-200 ease-out ${isOpen ===
                        idx && "!rotate-180"}`}
                    />
                    <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen ===
                        idx && "!rotate-180"}`}
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`grid overflow-hidden text-gray-800 transition-all duration-300 ease-in-out dark:text-black ${
                  isOpen === idx
                    ? "grid-rows-[1fr] pb-3 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden pr-4">
                  {PerAccordion.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* -------------------------------6th section finish--------------------------------- */}
      
    </div>
  );
};

export default CSE;
