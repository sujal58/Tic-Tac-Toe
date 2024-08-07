import {useState} from 'react'
import Gamaepage from './Gamepage';

function Landing() {
    const [playerMark, setPlayerMark] = useState<string>("");
    const [startGame, setStartGame] = useState(false);
    const [isComputer, setIsComputer] = useState(false);


    const handlePlay = (who:string) =>{
        if(playerMark){
            if(who === "computer") setIsComputer(true);
            setStartGame(true);
        }

    }
  return (
    (startGame ? <Gamaepage choosedMark={playerMark} isComputer= {isComputer}/> : 
        <div className='h-screen bg-slate-800'>
        <div className="h-full w-screen flex justify-center items-center">
            <div className="innerbox flex flex-col items-center gap-5 w-full">
                <div className="playersmark flex gap-4">
                    <h1 className='text-cyan-500 font-bold text-3xl'>X</h1>
                    <h1 className='text-yellow-300 font-bold text-3xl'>O</h1>
                </div>
                <div className="choosemark flex flex-col justify-center items-center gap-3 text-white bg-slate-700 p-3 w-9/12 md:w-6/12 rounded-md ">
                    <div className='font-bold'>PICK PLAYER'S MARK</div>
                    <div className='flex w-full items-center justify-center bg-slate-800 rounded-lg'>
                        <div className={`text-center  w-6/12 p-1 rounded-lg font-bold text-2xl cursor-pointer ${playerMark === "X" && "bg-blue-200 text-cyan-500"} hover:bg-blue-200 hover:text-cyan-500`} onClick={()=>setPlayerMark("X")}>X</div>
                        <div className={`text-center  w-6/12 p-1 rounded-lg font-bold text-2xl cursor-pointer ${playerMark === "O" && "bg-blue-200 text-yellow-300"} hover:bg-blue-200 hover:text-yellow-300`} onClick={()=>setPlayerMark("O")}>O</div>

                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <button className='bg-yellow-300 p-2 w-9/12 h-12 md:w-6/12 rounded-lg ring-4 shadow shadow-yellow-700 font-bold ' onClick={()=> handlePlay("friend")}>NEW GAME (VS FRIEND)</button>
                </div>
                 <div className="w-full flex justify-center">
                    <button className='bg-yellow-300 p-2 w-9/12 h-12 md:w-6/12 rounded-lg ring-4 shadow shadow-yellow-700 font-bold ' onClick={()=> handlePlay("computer")}>NEW GAME (VS COMPUTER)</button>
                </div>
            </div>

        </div>
    </div>
    )
    
    
  )
}

export default Landing