function totalFine(fare){
    if(typeof fare === 'number' && fare > 0 ){
        const fine = fare + (fare * 20 / 100) + 30
        return fine;
    }else {
        return "Invalid"
    }
}

function onlyCharacter(str){
    if(typeof str === 'string'){
        let cap = str.trim().split(' ').join('').toUpperCase()
        return cap;
    }else{
        return "Invalid"
    }
}