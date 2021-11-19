//Business logic

function beepBoop(number) {
  const numberToBeep = parseInt(number);
  let numbersAndBeeps = [];

  for (let i = 0; i <=numberToBeep; i++) {
    if(numberToBeep === 0) {
      numbersAndBeeps[i] = 0;
      return numbersAndBeeps;
    }
  }
  return numbersAndBeeps;
}

//UI Logic