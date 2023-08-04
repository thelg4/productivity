import React from 'react'
import AddNote from './AddNote'

function Notes() {
  return (
    <div className="card w-full bg-base-300 shadow-xl">
        <div className="card-body">
            <h2 className="text-2xl font-bold">Notes</h2>

            <div className="divider" />
            <p>Table goes here</p>
            <p>shows the notes you've taken and links to them</p>

            <div className="divider" />
            <div className="card-actions justify-center">
                {/* <button className="btn btn-info w-48">Add Note</button> */}
                <AddNote />
            </div>
        </div>
    </div>
  )
}

export default Notes