import React from 'react'

function AddNote() {
  return (
    <div>
        {/* Open the modal using ID.showModal() method */}
        <button className="btn btn-info w-48 font-bold" onClick={()=>window.my_modal_1.showModal()}>Add Note</button>
        <dialog id="my_modal_1" className="modal">
            <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click the button below to close</p>
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