import React from 'react'

function ProdRate() {
  return (
    <div className="">
        <div className="card w-96 bg-base-300 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Productivity Rate</h2>

                <div className="divider" />
                


                <div className="flex flex-col items-center space-y-4">
                    <div className="flex items-center">
                        <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":90}}>90%</div>
                        
                    </div>
                    <div>
                        <h1 className="font-bold text-lg">90% Productive</h1>
                    </div>
                    
                </div>
                
                <div className="divider" />
                
                <div className="card-actions justify-center">
                    <button className="btn btn-info btn-sm font-bold">More Info</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProdRate