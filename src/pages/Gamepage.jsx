import React, { useEffect, useState } from 'react'
import Box from '../components/Box'
import {ArrowClockwise} from 'react-bootstrap-icons';


function Gamaepage({choosedMark}) {
    const [isXActive, setIsXActive] = useState(choosedMark);
    const [boxData, setBoxData] = useState([Array(9).fill(null)])

    useEffect(()=>{
        console.log(boxData);
        
    },[boxData])

     const handleClick = (index) => {
        const nextSquare = boxData.slice();

        if(isXActive){
            nextSquare[index] = "X";            
        }else{
            nextSquare[index] = "O";            
        }
        setBoxData(nextSquare);
        setIsXActive(!isXActive);
    }

    const handleReload = () => {
        const copiedData = boxData.slice();
        for (let i = 0; i < boxData.length; i++) {
            copiedData[i] = null;
        }
        setBoxData(copiedData)
        setIsXActive(true);
    }

  return (
    <div className='flex bg-slate-800 h-screen justify-center items-center'>
        <div className="h-3/4 justify-center w-6/12 flex flex-col  ">
            <div className='flex justify-between items-end w-full flex-1'>
                <div className="playersmark flex gap-1">
                    <h1 className='text-cyan-500 font-bold text-xl'>X</h1>
                    <h1 className='text-yellow-300 font-bold text-xl'>O</h1>
                </div>
                <div className="flex gap-1 text-white">
                    <h1 className='font-bold text-xl'>{isXActive ? "X" : "O"}</h1>
                    <h1 className='font-bold text-xl'>TURN</h1>
                </div>
                <div className="text-white text-xl" onClick={handleReload}><ArrowClockwise/></div>
            </div>
            <div className="flex flex-col gap-3 h-2/3">
                <div className="flex justify-between w-full h-1/3 gap-2">
                    <Box value={boxData[0]} onBoxClick={()=>handleClick(0)} Active = {isXActive}/>
                    <Box value={boxData[1]} onBoxClick={()=>handleClick(1)} Active = {isXActive}/>
                    <Box value={boxData[2]} onBoxClick={()=>handleClick(2)} Active = {isXActive}/>
                </div>
                <div className="flex justify-between w-full h-1/3 gap-2">
                    <Box value={boxData[3]} onBoxClick={()=>handleClick(3)} Active = {isXActive}/>
                    <Box value={boxData[4]} onBoxClick={()=>handleClick(4)} Active = {isXActive}/>
                    <Box value={boxData[5]} onBoxClick={()=>handleClick(5)} Active = {isXActive}/>

                </div>
                <div className="flex justify-between w-full h-1/3 gap-2">
                    <Box value={boxData[6]} onBoxClick={()=>handleClick(6)} Active = {isXActive}/>
                    <Box value={boxData[7]} onBoxClick={()=>handleClick(7)} Active = {isXActive}/>
                    <Box value={boxData[8]} onBoxClick={()=>handleClick(8)} Active = {isXActive}/>
                    
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Gamaepage