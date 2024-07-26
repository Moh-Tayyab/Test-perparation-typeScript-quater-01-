function allAdd(...num: number[]): number {
  let result = 0;
  for (let i = 0; i < num.length; i++) {
    result +=  num[i]
  }
  return result
}

console.log(allAdd(12, 10, 11, 5, 5) );

