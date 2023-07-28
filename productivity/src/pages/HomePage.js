import React from 'react'
import Navbar from '../components/Navbar'
import Timer from '../components/Timer'
import Todos from '../components/Todos'
import Notes from '../components/Notes'
import CurrentDate from '../components/CurrentDate'

function HomePage() {
  return (
    <div className="flex">
        <div className="flex-none">
            <Navbar />
        </div>

        <div className="flex-1 flex flex-col justify-center items-center p-6 py-4 space-y-4">
            <CurrentDate />
            <Timer />
            <Todos />
            <Notes />
        </div>

    </div>
  )
}

export default HomePage