console.log("hello")

//1.

function Fibo(x) {
  fibArr = [1,2]
    for (var i=0; i<x; i++) {
    fibArr.push(fibArr[i]+fibArr[i+1])
}
    return fibArr
}

console.log(Fibo(20))

//2.
function ascii(x) {
  var y ="1"
  for (var i=0; i<x; i++) {
      y += "1"
  }
  return y;
}

  console.log(ascii(9))





