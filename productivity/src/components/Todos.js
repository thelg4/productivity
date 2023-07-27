import React from 'react'

function Todos() {
  return (
    <div className="card w-full bg-base-300 shadow-xl">
        <div className="card-body">
            <h2 className="text-2xl font-bold">Todos</h2>

            <div className="divider" />

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="text-lg text-center">Completed</th>
                            <th className="text-lg text-center">Task</th>
                            <th className="text-lg text-center">Due Date</th>
                            <th className="text-lg text-center">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover">
                            <th>
                                <div className="flex justify-center">
                                    <input type="checkbox" checked="checked" className="checkbox" />
                                </div>
                            </th>
                            <td className="font-bold text-center">AZ 900 practice test</td>
                            <td className="font-bold text-center">07/30/23</td>
                            <td>
                                <div className="flex justify-center">
                                    <button className="btn btn-primary btn-sm">Edit</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="divider" />

            <div className="card-actions justify-center">
                <button className="btn btn-info font-bold w-48">Add Todo</button>
                {/* <button className="btn btn-primary">Buy Now</button> */}
            </div>
        </div>
    </div>
  )
}

export default Todos