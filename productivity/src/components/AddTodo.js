import React from 'react'

function AddTodo() {
  return (
    <div>
        {/* You can open the modal using ID.showModal() method */}
        <button className="btn btn-info w-48 font-bold" onClick={()=>window.my_modal_3.showModal()}>Add Todo</button>
        <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <h3 className="font-bold text-xl">Add Todo</h3>

            <div className="divider" />

            <div className="flex flex-col space-y-4 ">
                
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="input input-bordered w-full max-w-xs" 
                />

                <input 
                  type="text" 
                  placeholder="Due Date" 
                  className="input input-bordered w-full max-w-xs" 
                />

            </div>

            <div className="divider" />

            <div className="flex justify-center">
              <button className="btn btn-info w-48 font-bold">Add Todo</button>
            </div>

            
        </form>
        </dialog>
    </div>
  )
}

export default AddTodo