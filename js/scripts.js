

function creditCard() {
  let validCode = "4102080860435620"
  let invalidCode = "4102080880435620"
  let actualNumbers = validCode.split("").map(Number);
  let doubledArray = [];
  for (let index = 0; index < actualNumbers.length; index +=2) {
    doubledArray.push(actualNumbers[index] * 2);
  }
  return doubledArray;
}
