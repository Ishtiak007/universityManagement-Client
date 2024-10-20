import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../../assets/1.webp";
import img2 from "../../../assets/2.webp";
import img3 from "../../../assets/3.webp";
import img4 from "../../../assets/4.webp";
import img5 from "../../../assets/5.webp";
const Banner = () => {
    return (
        <div className='pt-0'>
            <Carousel autoPlay={true} interval={2000} infiniteLoop={true} showArrows={false}>
                <div>
                    <img src={img1} />
                    
                </div>
                <div>
                    <img src={img2} />
                    
                </div>
                <div>
                    <img src={img3} />
                    
                </div>
                <div>
                    <img src={img4} />
                    
                </div>
                <div>
                    <img src={img5} />
                    
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
// import React, { useEffect } from 'react';
// import { useState } from 'react';
// export const Banner = () => {
//     const [currentSlider, setCurrentSlider] = useState(0);
//     const sliders = ['https://i.ibb.co/Lz6PBDX/3.webp','https://i.ibb.co/CKQTWP9/2.webp','https://i.ibb.co/Lz6PBDX/3.webp','https://i.ibb.co/CKQTWP9/2.webp','https://i.ibb.co/Lz6PBDX/3.webp'];
//     const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === sliders.length - 1 ? 0 : currentSlider + 1));
//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             nextSlider();
//         }, 3000);
//         return () => clearInterval(intervalId);
//     }, [currentSlider]);
//     return (
//         <div className=''>
//             <div className="w-full mx-auto h-[240px] md:h-[470px] lg:h-[600px] flex flex-col lg:flex-row items-center justify-center overflow-hidden gap-5 lg:gap-10 px-10">
//                 <div className="relative overflow-hidden">
//                     {/* dots */}
//                     <div className="flex h-fit w-fit rounded-full z-50 absolute right-0 bottom-1/2 w-fit gap-1 rotate-90">
//                         {sliders.map((_, inx) => (
//                             <button key={inx} onClick={() => setCurrentSlider(inx)}
//                                 className={`rounded-full duration-300 bg-white ${currentSlider === inx ? 'w-10' : 'w-2'} h-2`}>
//                             </button>
//                         ))}
//                     </div>
//                     {/* slider container */}
//                     <div className="ease-linear duration-300 flex flex-col h-[340px] md:h-[670px] transform-gpu relative" style={{ transform: `translateY(-${currentSlider * 100}%)` }}>
//                         {/* sliders */}
//                         {sliders.map((_, inx) => (
//                             <div key={inx} className="min-w-full duration-200 before:content-['Image'] before:bg-black/20 before:-z-10 before:absolute before:text-3xl before:flex before:justify-center before:items-center before:text-black/40 before:inset-0 relative">
//                                 <img src={_} className="w-full h-[340px] md:h-[670px] object-cover" alt={`Slider - ${inx + 1}`} />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
        
//         </div>
//     );
// };

// export default Banner;