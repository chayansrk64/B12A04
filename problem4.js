// Problem-04: Same Same But Different  😕 

function isSame(arr1 , arr2 ) {
    
}

console.log(isSame([1, undefined , 3] , [1, null ,3]))
 

{

    function compareArr(arr1, arr2){
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


    // console.log(compareArr([1, undefined , 3] , [1,null ,3]))

}



