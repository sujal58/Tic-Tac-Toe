export function computerIndex(playerSign:string, gamebox:(string | null)[]):number | undefined{
   const availableSlot = gamebox.map((val,index)=> val === null && index ? index : null).filter((index)=> index != null);

   const conditons = [
    [gamebox[0],gamebox[1],gamebox[2]],
    [gamebox[3],gamebox[4],gamebox[5]],
    [gamebox[6],gamebox[7],gamebox[8]],
    [gamebox[0],gamebox[4],gamebox[8]],
    [gamebox[2],gamebox[4],gamebox[6]],
    [gamebox[0],gamebox[3],gamebox[6]],
    [gamebox[1],gamebox[4],gamebox[7]],
    [gamebox[2],gamebox[5],gamebox[8]],
   ]

   let indextoreturn:number | null = null;

   for (let i = 0; i < conditons.length; i++) {
    const reducedString = conditons[i].reduce((prev:string | null, curr:string | null)=> {
        if (prev === null) {
        return curr !== null ? curr : "";  
    } else {
        return curr !== null ? prev + curr : prev;
    }
    }, "");

    if(reducedString === playerSign+playerSign){
        switch (i) {
            case 0:
                // console.log("012");

                for (let i = 0; i < conditons[0].length; i++) {
                    if(gamebox[i] === null){
                        return indextoreturn = i;
                    }
                }
                break;

            case 1:
                // console.log("345");

                for (let i = 3; i < 6; i++) {
                    if(gamebox[i] === null){
                       return indextoreturn = i;
                    }
                }
                break;

            case 2:
                // console.log("678");

                for (let i = 6; i < 9; i++) {
                    if(gamebox[i] === null){
                        return indextoreturn = i;
                    }
                }
                break;

            case 3:
                // console.log("048");

                if(gamebox[0] === null) return indextoreturn = 0;
                else if(gamebox[4] === null) return indextoreturn = 4;
                else return indextoreturn = 8;
                break;

            case 4:
                // console.log("246");
                if(gamebox[2] === null) return indextoreturn = 2;
                else if(gamebox[4] === null) return indextoreturn = 4;
                else return indextoreturn = 6;
                break;

            case 5:
                // console.log("036");

                if(gamebox[0] === null) return indextoreturn = 0;
                else if(gamebox[3] === null) return indextoreturn = 3;
                else return indextoreturn = 6;
                break;

            case 6:
                // console.log("147");
                if(gamebox[1] === null) return indextoreturn = 1;
                else if(gamebox[4] === null) return indextoreturn = 4;
                else return indextoreturn = 7;
                break;

            case 7:
                // console.log("258");
                if(gamebox[2] === null) return indextoreturn = 2;
                else if(gamebox[5] === null) return indextoreturn = 5;
                else return indextoreturn = 8;
                break;
        }
    }
   }

   if(indextoreturn === null){
         indextoreturn = availableSlot[Math.floor(Math.random() * availableSlot.length)]    
         if(indextoreturn) return indextoreturn;
   }
}
