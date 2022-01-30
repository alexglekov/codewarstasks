function squareDigits(num){

    let mass = num.toString().split('').map(Number);

    let numStr = ''

    for (i = 0; i < mass.length; i++) {
        let a = (mass[i] = mass[i] * mass[i]).toString()
        numStr = numStr + a
      }
    return +numStr;
  }


  squareDigits(9119)

  //We need to convert for example 9119 to 811181 - it means that we should exponentiate each
  // nuber and get exponiadted number in output. NOTE: input number is integer and output number too!