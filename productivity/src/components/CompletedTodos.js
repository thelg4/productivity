import React from 'react'

function CompletedTodos() {
  return (
    <div className="card w-full bg-base-300 shadow-xl">
        <div className="card-body">
            <h2 className="text-2xl font-bold">Completed Todos</h2>

            <div className="divider" />

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="text-lg text-center">Task</th>
                            <th className="text-lg text-center">Due Date</th>
                            <th className="text-lg text-center">Date Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover">
                            
                            <td className="font-bold text-center">AZ 900 practice test</td>
                            <td className="font-bold text-center">07/30/23</td>
                            <td className="font-bold text-center">07/29/23</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="divider" />
        </div>
    </div>
  )
}

export default CompletedTodos