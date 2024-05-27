import React from 'react'
import Image from "next/image";
const Homebanner = () => {
  return (
    <div>
      <section className="bg-sky-300">
      
      <div className="lg:w-10/12 w-full items-center justify-between font-mono lg:flex p-8 lg:p-24 lg:pl-56">
       <h1 className={`mb-3 lg:text-8xl text-5xl font-semibold`}>
  ELEVATING ENERGY TRADING TO THE NEXT LEVEL
  </h1>
      </div>
      <div className="w-10/12 justify-end lg:flex">
          <div className="hidden max-w-4xl w-full lg:p-24"></div>
      <div className="lg:max-w-2xl w-full lg:p-24 p-8">
      <p className={`mb-3 text-lg font-semibold`}>
            Convex Energy is a cutting-edge energy trading house. Our team of highly seasoned traders combines extensive market expertise with a proprietary technology stack, which elevates every aspect of the energy trading value chain.
          </p>
          </div>
          </div>
      
        <div className="max-w-7xl w-full justify-between items-end lg:flex">
      <div className="max-w-7xl w-full img-with-text-image">
      <Image
                src="/smart.jpg"
                alt="Image with text"
                width={3000}
                height={807}
                priority
              />
      </div>
      <div className="img-with-text-text p-8">
      <p className={`mb-3 text-lg font-semibold`}>
            Convex Energy is a cutting-edge energy trading house. Our team of highly seasoned traders combines extensive market expertise with a proprietary technology stack, which elevates every aspect of the energy trading value chain.
          </p>
      </div>
      </div>
  
      </section>
    </div>
  )
}

export default Homebanner
