//Business logic

function beepBoop(number) {
  const numberToBeep = parseInt(number);
  let numbersAndBeeps = [];

  for (let i = 0; i <=numberToBeep; i++) {
    if(i === 0) {
      numbersAndBeeps[i] = 0;
      return numbersAndBeeps;
    }
 //   else if (numberToBeep) {}
  }
  return numbersAndBeeps;
}

//UI Logic