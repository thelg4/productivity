import React from 'react'

function EditTodo() {
  return (
    <div>
        {/* Open the modal using ID.showModal() method */}
        <button className="btn btn-primary btn-sm" onClick={()=>window.my_modal_5.showModal()}>Edit</button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <form method="dialog" className="modal-box">
            
            <h1 className="text-xl font-bold">Edit Todo</h1>

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


                <div className="modal-action">
                    <div className="flex justify-center">
                        <button className="btn btn-primary">Close</button>
                    </div>
                    {/* if there is a button in form, it will close the modal */}
                   
                </div>
            </form>
        </dialog>
    </div>
  )
}

export default EditTodo