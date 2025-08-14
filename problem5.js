// Problem-05: Exam Result Report Generator

/**
 * step 1: for loop in array and check above or equal to 40 filter then and count length
 * if less than 40 then count how many and called then fail;
 * step 2: final score; find average;
 * step 4: retuan an object;
 * 
 */


function resultReport( marks ) {
    if(Array.isArray(marks)){
        let totalScrore = marks.reduce(function(a, b){return a + b},0)
        let finalScore = totalScrore > 0 ? Math.round(totalScrore / marks.length) : 0;
         
    let passedSub = []
    let failedSub = []
    for(let mark of marks){
        mark >= 40 ? passedSub.push(mark) : failedSub.push(mark);
    }
    
    let pass = passedSub.length
    let fail = failedSub.length
    
    return {finalScore: finalScore, pass: pass, fail: fail}
 
    } else {
        return "Invalid"
    }   
}

console.log(resultReport([98, 87, 67, 91, 92, 33, 87]))