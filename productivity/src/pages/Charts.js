import React from 'react'
import Navbar from '../components/Navbar'

function Charts() {
  return (
    <div>
        <h1>Charts</h1>

        <div className="flex">
            <div className="flex-none">
                <Navbar />
            </div>

            <div className="flex-1 flex flex-col justify-center items-center p-6">
                <h1>
                    Charts go here
                </h1>
            </div>

    </div>
    </div>
  )
}

export default Charts