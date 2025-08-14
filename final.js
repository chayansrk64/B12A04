function totalFine( fare ) {
     if(typeof fare === 'number' && fare > 0 ){
        const fine = fare + (fare * 20 / 100) + 30
        return fine;
    }else {
        return "Invalid"
    }
}


function onlyCharacter( str ) {
    if(typeof str === 'string'){
        let cap = str.trim().split(' ').join('').toUpperCase()
        return cap;
    }else{
        return "Invalid"
    }
}

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

function isSame(arr1 , arr2 ) {
     if(Array.isArray(arr1) && Array.isArray(arr2)){
            if(arr1.length !== arr2.length){
                return false;
        }
        for(let i = 0; i < arr1.length; i++){
            if(arr1[i] !== arr2[i]){
                return false;
            }
        }
        return true;
        }else{
            return "Invalid"
        }
}