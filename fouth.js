function sortArray(array) {

    let mass = []
    let counter = -1;

    for(let i = 0; i < array.length; i++){
        if (array[i]%2 !== 0){
            mass.push(array[i])
        }else{
            continue
        }
    }

    mass.sort(function(a, b) {
        return a - b;
      });

    for (let j = 0; j < array.length; j++){
        if (array[j]%2 !== 0){
            counter++
            array[j] = mass[counter]
        }else{
            continue
        }
    }

    return array
  }


  // You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
  // [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
    //[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]