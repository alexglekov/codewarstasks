function sumTwoSmallestNumbers(numbers) {
    
    let a = Number.MAX_VALUE
    let b = Number.MAX_VALUE
    
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < Number.MIN_VALUE){
            continue
        }

        if (numbers[i] < a){
            a = numbers[i]
        }

    }

    let delNum = numbers.indexOf(a)

    numbers.splice(delNum,1)

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < Number.MIN_VALUE){
            continue
        }

        if (numbers[i] < b){
            b = numbers[i]
        }

    }

    return a+b
  }

  console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))

  //We shuld find sum of 2 smallest numbers in array