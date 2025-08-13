function totalFine(fare){
    if(typeof fare === 'number' && fare > 0 ){
        const fine = fare + (fare * 20 / 100) + 30
        return fine;
    }else {
        return "Invalid"
    }
}

