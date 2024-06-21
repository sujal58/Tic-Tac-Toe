import React from 'react'

function Box({value, onBoxClick, Active}) {

   
  return (
    <div className="bg-slate-700 rounded-lg flex justify-center items-center w-4/12 cursor-pointer" onClick={onBoxClick}>
        {<h1 className={`${Active ? "text-cyan-500" : "text-yellow-300"} font-bold text-2xl`}>{value}</h1>}
    </div>
  )
}

export default Box