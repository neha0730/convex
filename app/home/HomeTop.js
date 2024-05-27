import React from 'react'
import Image from "next/image";
const HomeTop = () => {
  return (
   
	<div className="grid md:grid-cols-main-page grid-cols-main-page-mobile col-span-full md:gap-x-2.5 grid-rows-[repeat(4,minmax(auto,max-content))] md:grid-rows-[repeat(2,minmax(auto,max-content))_1fr] md:pb-14">
    <div threshold="0.5" className="col-span-full row-span-3 row-start-1 md:row-span-2 md:row-start-1 animate-gradient" style={{ '--data-gradient-color': '#9CD2DE' }}></div>
    <div className="pb-8 pt-10 md:col-span-4 md:col-start-3 md:row-span-1 md:row-start-1 md:py-24 row-span-1 row-start-1 col-span-1 col-start-2">
        <h1 className="mb-3 lg:text-8xl text-5xl font-semibold">Elevating Energy Trading to the next level</h1>
    </div>
    <div className="row-span-2 row-start-3 py-14 md:py-0 md:col-span-2 md:col-start-3 md:row-span-2 md:row-start-2 md:pr-8 col-span-1 col-start-2">
        <div className="relative overflow-hidden aspect-2/3 hidden md:block">
            <Image alt="Man sitting at his desk looking at the computer" loading="lazy" width="500"  decoding="async" data-nimg="1" className="h-full w-full object-cover object-cover h-full w-full  inset-0" style={{ color: 'transparent' }}     src="/smart.jpg" 
			 height={807}
			 
			 />
        </div>
        <div className="relative overflow-hidden aspect-square block md:hidden">
            <Image alt="Man sitting at his desk looking at the computer" loading="lazy" width="500"  decoding="async" data-nimg="1" className="h-full w-full object-cover object-cover h-full w-full  inset-0" style={{ color: 'transparent' }}    src="/smart.jpg"
			 height={807}
			 
			  />
        </div>
    </div>
    <div className="highlight row-span-1 row-start-2 md:col-span-3 md:col-start-5 md:row-start-2 md:self-start md:pb-24 md:pt-4 col-span-1 col-start-2 lg:text-3xl text-3xl font-semibold">Convex Energy is a cutting-edge energy trading house. Our team of highly seasoned traders combines extensive market expertise with a proprietary technology stack, which elevates every aspect of the energy trading value chain.</div>
    <div className="col-span-1 col-start-2 row-span-1 row-start-5 pb-20 self-end md:col-span-2 md:col-start-5 md:row-start-3 md:pb-11 md:pt-32">
        <div className="richtext [&amp;_a]:text-hydro lg:text-2xl text-2xl">
            <h6 className='font-semibold'>State-of-the-art trading</h6>
            <p>At Convex Energy, we are committed to staying ahead of the curve by continuously developing the world’s most innovative energy trading solutions.</p>
            <p></p>
            <p><a href="/about" uuid="6689f6cd-5582-430c-bea7-537367363976" target="_self" linktype="story">ABOUT US<span className="mx-2 relative inline-block overflow-hidden"><span className="icon inline-block text-transparent bg-no-repeat anchor-icon bg-hydro" style={{ '--data-url': 'url(/assets/arrow_to_tr.svg)' }}>&nbsp;&nbsp;&nbsp;</span><span className="icon inline-block text-transparent bg-no-repeat anchor-icon absolute right-full top-full bg-hydro" style={{ '--data-url': 'url(/assets/arrow_to_tr.svg)' }}>&nbsp;&nbsp;&nbsp;</span></span></a></p>
        </div>
    </div>
</div>

  )
}

export default HomeTop
