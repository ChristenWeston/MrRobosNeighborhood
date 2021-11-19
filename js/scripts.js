//Business logic

function beepBoop(number) {
  const numberToBeep = parseInt(number);
  let numbersAndBeeps = [];
  for (let i = 0; i <=numberToBeep; i++) {
    if(i === 0) {
      numbersAndBeeps[i] = 0;
    }
    else if (i > 0 && i.toString().includes("3")) {
      numbersAndBeeps[i] = "Won't you be my neighbor?";
    }
    else if (i > 0 && i.toString().includes("2")) {
      numbersAndBeeps[i] = "Boop";
    }
    else if (i > 0 && i.toString().includes("1")) {
      numbersAndBeeps[i] = "Beep!";
    }
    else {
      numbersAndBeeps[i] = i;
    }
  }
  return numbersAndBeeps;
}

//UI Logic