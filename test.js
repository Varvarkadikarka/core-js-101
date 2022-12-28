function toNumber(value, def) {
  let a = +value;
  console.log(a);
  console.log(!isNaN(a) ? a : def);
}


toNumber('test', 0);
