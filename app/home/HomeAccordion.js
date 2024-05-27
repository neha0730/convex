"use client";
import React, { useState } from 'react';
import Image from 'next/image'; 
import AccordionApi from './AccordionApi';

const HomeAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0); 

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div className="lg:max-w-7xl w-full lg:p-24 p-8 accordion-title-main text-5xl lg:text-7xl"> TRADING IN 3 LOCATIONS</div>
      { AccordionApi.map((item, index) => (
        <div key={index} className={`w-full p-24 py-5 lg:flex justify-evenly accordion-item accordion-item-${index}`}>
          <div className="lg:max-w-7xl w-full accordion-title text-base lg:text-7xl" onClick={() => handleAccordionClick(index)}>
            {item.question}
          </div>
          <div className={`accordion-content ${activeIndex === index ? 'open' : ''}`}>
            
            <Image
              src={item.image}
              alt="Image single"
              width={907}
              height={510}
              priority
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeAccordion;
