// Problem-03 : FIFA Best Team Award 

function bestTeam( player1, player2 ) {
    if(typeof player1 === 'object' && typeof player2 === 'object'){
        let fairPlayCount1 = player1.foul + player1.cardY + player1.cardR;
        let fairPlayCount2 = player2.foul + player2.cardY + player2.cardR;
            if(fairPlayCount1 === fairPlayCount2){
                return "Tie"
            }else if(fairPlayCount1 < fairPlayCount2){
                return player1.name
            }else{
                return player2.name
            }
    }else{
        return "Invalid"
    }  
}


const obj1 = { name: "Brazil", foul: 5, cardY: 1, cardR: 0 }
const obj2 = { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }

console.log(bestTeam(obj1, obj2))

