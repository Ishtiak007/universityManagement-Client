// import React from "react";
// import { Link } from "react-router-dom";

// const REDetails = () => {
//   return (
//     <div>
//       <Link to="/cricket">
//       <div>
//         <p>hggggggggggggggggggggg</p>
//         <img src="https://i.ibb.co/pxTDWWp/khela.webp" alt="" />
//       </div>
//       </Link>
//     </div>
//   );
// };

// export default REDetails;

import React, { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
export const REDetails = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = ['https://i.ibb.co/Lz6PBDX/3.webp','https://i.ibb.co/CKQTWP9/2.webp','https://i.ibb.co/Lz6PBDX/3.webp','https://i.ibb.co/CKQTWP9/2.webp','https://i.ibb.co/Lz6PBDX/3.webp'];
    const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === sliders.length - 1 ? 0 : currentSlider + 1));
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);
        return () => clearInterval(intervalId);
    }, [currentSlider]);
    return (
        <>
        <Helmet>
        <title>REC |Cricket</title>
      </Helmet>
        <div className=''>
            <Link to="/cricket">
            <div className="w-full mx-auto h-[240px] md:h-[470px] lg:h-[600px] flex flex-col lg:flex-row items-center justify-center overflow-hidden gap-5 lg:gap-10 px-10">
                <div className="relative overflow-hidden">
                    {/* dots */}
                    <div className="flex h-fit w-fit rounded-full z-50 absolute right-0 bottom-1/2 w-fit gap-1 rotate-90">
                        {sliders.map((_, inx) => (
                            <button key={inx} onClick={() => setCurrentSlider(inx)}
                                className={`rounded-full duration-300 bg-white ${currentSlider === inx ? 'w-10' : 'w-2'} h-2`}>
                            </button>
                        ))}
                    </div>
                    {/* slider container */}
                    <div className="ease-linear duration-300 flex flex-col h-[340px] md:h-[670px] transform-gpu relative" style={{ transform: `translateY(-${currentSlider * 100}%)` }}>
                        {/* sliders */}
                        {sliders.map((_, inx) => (
                            <div key={inx} className="min-w-full duration-200 before:content-['Image'] before:bg-black/20 before:-z-10 before:absolute before:text-3xl before:flex before:justify-center before:items-center before:text-black/40 before:inset-0 relative">
                                <img src={_} className="w-full h-[340px] md:h-[670px] object-cover" alt={`Slider - ${inx + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </Link>
        
        </div>
        </>
    );
};

export default REDetails;
