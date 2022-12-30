function swapHeadAndTail(arr) {
  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const middle = arr.slice(center, -center);
  const right = arr.slice(-center);
  console.log([...right, ...middle, ...left]);
}

swapHeadAndTail([ 1, 2, 3]);