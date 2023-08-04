import React from 'react'
import Navbar from '../components/Navbar'
import CurrentDate from '../components/CurrentDate'
import ProdRate from '../components/ProdRate'


function Charts() {
  return (
    <div>
        <div className="flex justify-center pt-6">
          <CurrentDate />
        </div>

        <div className="divider" />

        <div className="flex">
            <div className="flex-none">
                <Navbar />
            </div>

            <div className="flex-1 flex flex-col justify-center items-center p-6">
                <ProdRate />
            </div>

    </div>
    </div>
  )
}

export default Charts