import React from 'react'
import Navbar from '../components/Navbar'
import Timer from '../components/Timer'
import Todos from '../components/Todos'
import CompletedTodos from '../components/CompletedTodos'
import Notes from '../components/Notes'
import CurrentDate from '../components/CurrentDate'
import AddTodo from '../components/AddTodo'

function HomePage() {
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
        <div className="flex-1 flex flex-col justify-center items-center p-6 py-4 space-y-4">
            
            <Timer />
            <Todos />
            <CompletedTodos />
            <Notes />
        </div>
      </div>
    </div>

    
  )
}

export default HomePage