import React from 'react';
import ActiveSlider from '../components/ActiveSlider';
const HomeCarousel = () => {
  return (
    <div>
      <section className="flex flex-col items-center justify-between bg-amber-100 z-0">
      
	  <div className="lg:max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex p-16">
	   <h1 className={`mb-3 lg:text-7xl text-5xl font-semibold`}>
EXCELLENCE IN ENERGY TRADING IS <span className={`mb-3 lg:text-7xl text-5xl font-semibold text-orange-700`}>A TEAM EFFORT</span>
</h1>
	  </div>
	  <ActiveSlider></ActiveSlider>

    </section>
    </div>
  )
}

export default HomeCarousel
