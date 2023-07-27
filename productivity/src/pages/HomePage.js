import React from 'react'
import Navbar from '../components/Navbar'
import Timer from '../components/Timer'
import Todos from '../components/Todos'

function HomePage() {
  return (
    <div className="flex">
        <div className="flex-none">
            <Navbar />
        </div>

        <div className="flex-1 flex flex-col justify-center items-center p-6">
            <Timer />
            <Todos />
        </div>

    </div>
  )
}

export default HomePage