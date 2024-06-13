import React from 'react'

function Landing() {
  return (
    <div className='h-screen bg-slate-800'>
        <div className="container h-full mx-auto px-auto flex justify-center items-center">
            <div className="innerbox flex flex-col items-center gap-5 w-full">
                <div className="playersmark flex gap-4">
                    <h1 className='text-cyan-500 font-bold text-3xl'>X</h1>
                    <h1 className='text-yellow-300 font-bold text-3xl'>O</h1>
                </div>
                <div className="choosemark bg-slate-700 p-3 rounded-md flex flex-col gap-3">
                    <div>PICK PLAYER'S MARK</div>
                    <div className='flex w-full items-center justify-center bg-slate-800 rounded-lg'>
                        <div className='text-center  w-6/12 p-1 rounded-lg hover:bg-blue-200 cursor-pointer'>X</div>
                        <div className='text-center  w-6/12 p-1 rounded-lg hover:bg-blue-200 cursor-pointer'>O</div>

                    </div>
                </div>

                <div className="">
                    <button className='bg-yellow-300 p-2 rounded-lg '>NEW GAME</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Landing