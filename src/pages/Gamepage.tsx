import { useEffect, useState } from 'react'
import {ArrowClockwise} from 'react-bootstrap-icons';
import Box from '../components/Box';
import { checkWinner } from '../utils/checkWinner';
import Confetti from 'react-confetti'

type gamepageprops = {
    choosedMark: string,
    isComputer: boolean;
}


function Gamepage(props:gamepageprops) {
    const [nextMove, setnextMove] = useState<string>(props.choosedMark);
    const [playerturn, setPlayerTurn] = useState<boolean>(true)
    const [boxData, setBoxData] = useState<(string | null)[]>(Array(9).fill(null));
    const [isWinner, setIsWinner] = useState(false);
    const [aPoint, setApoint] =  useState(0);
    const [bPoint, setBpoint] =  useState(0);
    const [drawPoint, setDrawPoint] = useState(0);
    const [isDraw, setIsDraw] = useState(false);


    const [windowSize, setWindowSize] = useState<{width:number, height:number}>({
        width:window.innerWidth,
        height:window.innerHeight
    })

    function handleWindowSize(){
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    useEffect(()=>{
        handleWindowSize();
    }, [onresize])
    
    function computerMoves(){
         if(props.isComputer && !isWinner){
            if(!playerturn){
                const nextSquare = [...boxData];
                const availableSlot = nextSquare.map((val,index)=> val === null && index ? index : null).filter((index)=> index != null)
                if(availableSlot.length > 0){
                    setTimeout(() => {               
                        const randomMoves = availableSlot[Math.floor(Math.random() * availableSlot.length)]    
                        if(randomMoves) nextSquare[randomMoves] = nextMove;
                        setBoxData(nextSquare);
                        nextMove === "X" ? setnextMove("O") : setnextMove("X");
                    }, 2000);
                }
            }
            setPlayerTurn(true);
         }
        }
    


    useEffect(()=>{
        const winner = checkWinner(boxData);
        if(winner){
            setIsWinner(true);
            nextMove === props.choosedMark ? setBpoint(bPoint=> bPoint + 1)  :  setApoint(aPoint=> aPoint+1);
            return;
        }
       
        let isBoxFull = boxData.some(val=> val === null);
        if(!isBoxFull && !isWinner){
            setDrawPoint(draw => draw + 1);
            setIsDraw(true);  
        } 

        (!playerturn && props.isComputer) && computerMoves();
    },[boxData])

     const handleClick = (index:number) => {
        const nextSquare = [...boxData];
        if(nextSquare[index] || isWinner){
            return ;
        }
        nextSquare[index] = nextMove;
        nextMove === "X" ? setnextMove("O") : setnextMove("X");
        setBoxData(nextSquare);
        setPlayerTurn(false);
    }

    const handleReload = () => {
        const copiedData= boxData.slice();
        for (let i = 0; i < boxData.length; i++) {
            copiedData[i] = null;
        }
        setBoxData(copiedData);
        setIsWinner(false)
    }

    
  return (
    <div className='flex bg-slate-800 h-screen justify-center items-center'>
        <div className="h-3/4 justify-center w-6/12 flex flex-col  ">
        {isWinner && <Confetti width={windowSize.width} height={windowSize.height}/>}
            <div className='flex justify-between items-end w-full flex-1 mb-2'>
                <div className="playersmark flex gap-1">
                    <h1 className='text-cyan-500 font-bold text-xl'>X</h1>
                    <h1 className='text-yellow-300 font-bold text-xl'>O</h1>
                </div>
                <div className="flex gap-1 text-white">
                   {!isWinner ? <h1 className='font-bold text-sm bg-slate-700 rounded-md p-1'>{nextMove === "X" ? "X" : "O"} TURN</h1>
                   : <div>
                       <h1 className={`font-bold text-sm bg-slate-700 rounded-md p-1 ${isDraw && "hidden"}`}>{nextMove === "X" ? "O" : "X"} is WINNER</h1>
                       <h1 className={`font-bold text-sm bg-slate-700 rounded-md p-1 ${isWinner && "hidden"}`}>{isDraw && "Game Draw"}</h1>

                   </div>
                    } 
                </div>
                <div className="text-black text-lg bg-slate-400 p-1 rounded-md cursor-pointer" onClick={handleReload}><ArrowClockwise/></div>
            </div>
            <div className="flex flex-col gap-3 h-2/3">
                <div className="flex justify-between w-full h-1/3 gap-2">
                    <Box value={boxData[0]} onBoxClick={()=>handleClick(0)} />
                    <Box value={boxData[1]} onBoxClick={()=>handleClick(1)} />
                    <Box value={boxData[2]} onBoxClick={()=>handleClick(2)} />
                </div>
                <div className="flex justify-between w-full h-1/3 gap-2">
                    <Box value={boxData[3]} onBoxClick={()=>handleClick(3)} />
                    <Box value={boxData[4]} onBoxClick={()=>handleClick(4)} />
                    <Box value={boxData[5]} onBoxClick={()=>handleClick(5)} />

                </div>
                <div className="flex justify-between w-full h-1/3 gap-2">
                    <Box value={boxData[6]} onBoxClick={()=>handleClick(6)} />
                    <Box value={boxData[7]} onBoxClick={()=>handleClick(7)} />
                    <Box value={boxData[8]} onBoxClick={()=>handleClick(8)} />
                    
                </div>
            </div>
            <div className="flex justify-between mt-2 w-full gap-4">
                <div className={`flex flex-col items-center font-bold text-sm bg-slate-700 ${props.choosedMark === "X" ? "bg-cyan-500" : "bg-yellow-300"} rounded-md p-1 w-4/12`}>
                    <p>Player1 ({props.choosedMark === "X" ? "x" : "O"})</p>
                    <p>{aPoint}</p>
                </div>
                <div className="flex flex-col items-center font-bold text-sm bg-slate-400 rounded-md p-1 w-4/12">
                    <p>Draw</p>
                    <p>{drawPoint}</p>
                </div>
                <div className={`flex flex-col items-center font-bold text-sm bg-slate-700 ${props.choosedMark === "X" ? "bg-yellow-300" : "bg-cyan-500"} rounded-md p-1 w-4/12`}>
                    <p>Player2 ({props.choosedMark === "X" ? "O" : "X"})</p>
                    <p>{bPoint}</p>
                </div>

            </div>
        </div>  
    </div>
  )
}

export default Gamepage