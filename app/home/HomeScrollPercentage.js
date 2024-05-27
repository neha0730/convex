import React from 'react'

const HomeScrollPercentage = () => {
  return (
    <div className="flex flex-nowrap gap-x-2.5 md:col-span-4 md:col-start-1 col-span-1 col-start-2">
    <div className="col-span-2 row-start-3 flex basis-1/2 flex-col gap-y-2.5 py-2.5">
      <div className="flex text-hydro">
        <h3 className="h3">
          <span className="block tabular-nums">135</span>
        </h3>
        <span className="h3">%</span>
      </div>
      <div className="break flex text-coal highlight">ROE</div>
    </div>
    <div className="col-span-2 row-start-3 flex basis-1/2 flex-col gap-y-2.5 py-2.5">
      <div className="flex text-hydro">
        <h3 className="h3">
          <span className="block tabular-nums">112</span>
        </h3>
        <span className="h3">%</span>
      </div>
      <div className="break flex text-coal highlight">ROCE</div>
    </div>
  </div>
  
  )
}

export default HomeScrollPercentage
