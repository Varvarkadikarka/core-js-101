function getDigitalRoot(num) {
  return num
    .toString()
    .split('')
    .map(Number)
    .reduce((a, b) => a + b)
    
}

console.log(getDigitalRoot(45121232));