var moveZeros = function (arr) {

    let mass = []
    let mass2 = []

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            mass.push(arr[i])
        }else{
            mass2.push(arr[i])
        }
    }

    for(i of mass){
        mass2.push(mass[i])
    }  
    return mass2
  }


  // Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
  // moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]