import React from 'react'

function Gamaepage() {
  return (
    <div className='flex bg-slate-800 h-screen justify-center items-center'>
        <div className="h-3/4 justify-center w-6/12 flex flex-col  ">
            <div className='flex justify-between items-end w-full flex-1'>
                <div className="playersmark flex gap-1">
                    <h1 className='text-cyan-500 font-bold text-xl'>X</h1>
                    <h1 className='text-yellow-300 font-bold text-xl'>O</h1>
                </div>
                <div className="flex gap-1 text-white">
                    <h1 className='font-bold text-xl'>X</h1>
                    <h1 className='font-bold text-xl'>TURN</h1>
                </div>
                <div className="text-white text-xl">@</div>
            </div>
            <div className="flex flex-col gap-3 h-2/3">
                <div className="flex justify-between w-full h-1/3 gap-2">
                    <div className="bg-slate-700 rounded-lg flex justify-center items-center w-4/12 cursor-pointer">
                    {<h1 className='text-cyan-500 font-bold text-xl'>X</h1>}
                    </div>
                    <div className="bg-slate-700 rounded-lg flex justify-center items-center w-4/12 cursor-pointer">
                    <h1 className='text-yellow-300 font-bold text-xl'>O</h1>
                    
                    </div>
                    <div className="bg-slate-700 rounded-lg flex justify-center items-center w-4/12 cursor-pointer">3</div>
                </div>
                <div className="flex justify-between w-full h-1/3 gap-2">
                    <div className="bg-slate-700 rounded-lg flex justify-center items-center w-4/12 cursor-pointer">1</div>
                    <div className="bg-slate-700 rounded-lg flex justify-center items-center w-4/12 cursor-pointer">2</div>
                    <div className="bg-slate-700 rounded-lg flex justify-center items-center w-4/12 cursor-pointer">3</div>
                </div>
                <div className="flex justify-between w-full h-1/3 gap-2">
                    <div className="bg-slate-700 rounded-lg flex justify-center items-center w-4/12 cursor-pointer">1</div>
                    <div className="bg-slate-700 rounded-lg flex justify-center items-center w-4/12 cursor-pointer">2</div>
                    <div className="bg-slate-700 rounded-lg flex justify-center items-center w-4/12 cursor-pointer">3</div>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Gamaepage