export const checkWinner = (square:(string | null)[]): boolean => {
    let isWinnner:boolean = false;
    const userInputRows = [
        [square[0], square[1], square[2]],
        [square[3], square[4], square[5]],
        [square[6], square[7], square[8]],
    ]

    const userInputCols = [
        [square[0], square[3], square[6]],
        [square[1], square[4], square[7]],
        [square[2], square[5], square[8]],
    ]

    const userInputDia = [
        [square[0], square[4], square[8]],
        [square[2], square[4], square[6]],
    ]

    for (let i = 0; i < userInputRows.length; i++) {
       const reducedvalue:string | null =  userInputRows[i].reduce((total:string | null, currentval: string | null)=>{
        if(total === null || currentval === null) return null;

         return total + currentval;
       },"");

       if(reducedvalue === "XXX" || reducedvalue === "OOO"){
         return isWinnner = true;
       }
    }

    for (let i = 0; i < userInputCols.length; i++) {
       const reducedvalue:string | null =  userInputCols[i].reduce((total:string | null, currentval: string | null)=>{
        if(total === null || currentval === null) return null;

         return total + currentval;
       },"");

       if(reducedvalue === "XXX" || reducedvalue === "OOO"){
         return isWinnner = true;
       }
    }

    for (let i = 0; i < userInputDia.length; i++) {
       const reducedvalue:string | null =  userInputDia[i].reduce((total:string | null, currentval: string | null)=>{
        if(total === null || currentval === null) return null;

         return total + currentval;
       },"");

       if(reducedvalue === "XXX" || reducedvalue === "OOO"){
         return isWinnner = true;
       }
    }

     return isWinnner;
}