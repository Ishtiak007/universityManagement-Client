import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto md:w-4/12 my-8'>
           {/* <p className='text-yellow-600'>----{subHeading}---</p> */}
           <h3 className='text-4xl uppercase border-y-2 py-4 font-bold text-sky-600'>{heading}</h3> 
           {/* <h3 className='text-4xl uppercase border-y-2 py-4' style={{borderStyle: 'dashed'}}>{heading}</h3>  */}
        </div>
    );
};

export default SectionTitle;