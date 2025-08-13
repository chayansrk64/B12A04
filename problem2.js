// Problem-02 : Clean & Capitalize Characters

function onlyCharacter(str){
    if(typeof str === 'string'){
        let cap = str.trim().split(' ').join('').toUpperCase()
        return cap;
    }else{
        return "Invalid"
    }
}

console.log(onlyCharacter("  h e llo wor   ld" ))