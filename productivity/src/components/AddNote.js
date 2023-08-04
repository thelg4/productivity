import React from 'react'

function AddNote() {
  return (
    <div>
        {/* Open the modal using ID.showModal() method */}
        <button className="btn btn-info w-48 font-bold" onClick={()=>window.my_modal_1.showModal()}>Add Note</button>
        <dialog id="my_modal_1" className="modal">
            <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Add Note</h3>

                <div className="divider" />

                <div className="space-y-4">
                  <h3 className="font-bold">Title</h3>

                  <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />

                  <h3 className="font-bold">Note</h3>
                  <textarea className="textarea textarea-info w-full" placeholder="Bio"></textarea>

                </div>

                <div className="divider" />
                
                <div className="modal-action">
                {/* if there is a button in form, it will close the modal */}

                

                <div className="flex justify-center">
                  <button className="btn btn-info">Add Note</button>
                </div>

                
                </div>
            </form>
        </dialog>
    </div>
  )
}

export default AddNote