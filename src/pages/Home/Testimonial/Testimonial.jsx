// import React, { useEffect, useState } from "react";
// import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";
// import { Rating } from "@smastrom/react-rating";
// import "@smastrom/react-rating/style.css";
// import "./Testimonial.css"; 
// import background from '../../../assets/lo.gif';


// const Testimonial = () => {
//   const [reviews, setReviews] = useState([]);
//   useEffect(() => {
//     fetch("reviews.json")
//       .then((res) => res.json())
//       .then((data) => setReviews(data));
//   }, []);
//   return (
//     <section className="my-6" style={{backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center", minHeight: "200px"}}>
      // <SectionTitle className=""
      //   heading={"Feedback Received"}
      // ></SectionTitle>
//       <Swiper pagination={{ clickable: true }} modules={[Pagination]} autoplay={{ delay: 2000 }} className="mySwiper">
//         {reviews.map((review) => (
//           <SwiperSlide color="black" key={review._id}>
//             <div className="flex flex-col items-center mx-24 my-8">
//               <div className="pb-4">
             
//               </div>
              
//               <img
//                 className="w-40 rounded-full"
//                 src={review.img}
//                 alt={review.name}
//               />
//               <p className="py-8">{review.details}</p>
//               <h3 className="text-2xl text-black">{review.name}</h3>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default Testimonial;


// import React, { useEffect, useState } from "react";
// import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";
// import { Rating } from "@smastrom/react-rating";
// import "@smastrom/react-rating/style.css";
// import "./Testimonial.css"; // Import your custom CSS file

// const Testimonial = () => {
//   const [reviews, setReviews] = useState([]);
  
//   useEffect(() => {
//     fetch("reviews.json")
//       .then((res) => res.json())
//       .then((data) => setReviews(data));
//   }, []);
  
//   return (
//     <section className="my-10">
//       <SectionTitle heading={"Visitors Says About Us"}></SectionTitle>
//       <Swiper
//         pagination={{ clickable: true }}
//         modules={[Pagination]}
//         autoplay={{ delay: 3000 }} // Autoplay with a delay of 3 seconds
//         loop={true} // Enable loop
//         slidesPerView={3} // Number of slides per view
//         spaceBetween={30} // Space between slides
//         className="mySwiper"
//       >
//         {reviews.map((review) => (
//           <SwiperSlide color="black" key={review._id}>
//             <div className="flex flex-col items-center mx-24 my-8">
//               <div className="pb-20">
//                 {/* <TfiThought className="" size='4.7rem' color='black'></TfiThought> */}
//               </div>
//               {/* <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly /> */}
//               <img
//                 className="w-40 rounded-full"
//                 src={review.img}
//                 alt={review.name}
//               />
//               <p className="py-8">{review.details}</p>
//               <h3 className="text-2xl text-orange-400">{review.name}</h3>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default Testimonial;


import React, { useState, useEffect } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import p1 from "../../../assets/p1.png";
import p2 from "../../../assets/p2.png";
import p3 from "../../../assets/p3.png";
import p4 from "../../../assets/p4.png"; // New image
import p5 from "../../../assets/p5.png"; // New image
import p6 from "../../../assets/106.png"; // New image

const Testimonial = () => {
  const [currentPhase, setCurrentPhase] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhase((prevPhase) => (prevPhase % 5) + 1); // Cycles through 1 to 6
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <SectionTitle
        className=""
        heading={"Feedback Received"}
      ></SectionTitle>
      <div className="flex items-center justify-center py-4">
        {/* Testimonial 1 */}
        <div className={`max-w-4xl p-8 rounded-lg ${currentPhase === 1 ? '' : 'hidden'}`}>
          <p className="text-xl italic font-light text-black mb-4">
            "This is an age of modern science and technology and we are in the 21st century. Every individual who has interest in education whether within the country or beyond is warmly welcome to REC community, preferably in person, and that will be a privilege of mine."
          </p>
          <div className="flex items-center">
            <img className="w-16 h-16 rounded-full" src={p1} alt="Emily Johnson"></img>
            <div className="ml-4">
              <p className="text-sm font-semibold text-sky-600">Ashraful Alam Al-Amin</p>
              {/* <p className="text-sm text-gray-500">Founder of Glamour & Glow</p> */}
            </div>
          </div>
        </div>
        {/* Testimonial 2 */}
        <div className={`max-w-4xl p-8 rounded-lg ${currentPhase === 2 ? '' : 'hidden'}`}>
          <p className="text-xl italic font-light text-black mb-4">
            "Ever since the inception of the institution, our mission has been to educate and develop the student's capabilities and"
          </p>
          <div className="flex items-center">
            <img className="w-16 h-16 rounded-full" src={p2} alt="Sarah Williams"></img>
            <div className="ml-4">
              <p className="text-sm font-semibold text-sky-600">Md Idrish Ali</p>
              {/* <p className="text-sm text-gray-500">Beauty Blogger at Beauty Bliss</p> */}
            </div>
          </div>
        </div>
        {/* Testimonial 3 */}
        <div className={`max-w-4xl p-8 rounded-lg ${currentPhase === 3 ? '' : 'hidden'}`}>
          <p className="text-xl italic font-light text-black mb-4">
          "As the principal of Rangpur Engineering College I would like to welcome you to the arena of science, technology"
          </p>
          <div className="flex items-center">
            <img className="w-16 h-16 rounded-full" src={p3} alt="Lisa Brown"></img>
            <div className="ml-4">
              <p className="text-sm font-semibold text-sky-600">Professor Nirod Boran Nath</p>
              {/* <p className="text-sm text-gray-500">Makeup Artist and Beauty Consultant</p> */}
            </div>
          </div>
        </div>
        {/* Testimonial 4 */}
        <div className={`max-w-4xl p-8 rounded-lg ${currentPhase === 4 ? '' : 'hidden'}`}>
          <p className="text-xl italic font-light text-balck mb-4">
          "Congratulations, Rangpur Engineering College! I am impressed by the commitment to growth and development "
          </p>
          <div className="flex items-center">
            <img className="w-16 h-16 rounded-full" src={p4} alt="Anna Lee"></img>
            <div className="ml-4">
              <p className="text-sm font-semibold text-sky-600">Mr. SABIT RAIHAN</p>
              {/* <p className="text-sm text-gray-500">Fashion Influencer</p> */}
            </div>
          </div>
        </div>
        {/* Testimonial 5 */}
        <div className={`max-w-4xl p-8 rounded-lg ${currentPhase === 5 ? '' : 'hidden'}`}>
          <p className="text-xl italic font-light text-balck mb-4">
          "REC is committed to providing quality education and to nurturing creativity for producing successful graduates who will serve society and the world."
          </p>
          <div className="flex items-center">
            <img className="w-16 h-16 rounded-full" src={p5} alt="Sophie Turner"></img>
            <div className="ml-4">
              <p className="text-sm font-semibold text-sky-600">Dr.Rabiul Islam</p>
              {/* <p className="text-sm text-gray-500">Professional Makeup Artist</p> */}
            </div>
          </div>
        </div>
        {/* Testimonial 6 */}
        {/* <div className={`max-w-4xl p-8 rounded-lg ${currentPhase === 6 ? '' : 'hidden'}`}>
          <p className="text-xl italic font-light text-gray-800 mb-4">
            "Kawaivelvet always delivers on quality and service. I wouldn't shop anywhere else!"
          </p>
          <div className="flex items-center">
            <img className="w-12 h-12 rounded-full" src={j6} alt="Mia Clark"></img>
            <div className="ml-4">
              <p className="text-sm font-semibold text-gray-700">Mia Clark</p>
              <p className="text-sm text-gray-500">Beauty Enthusiast</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Testimonial;



