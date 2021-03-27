
function isPrime2(a) {
    b = Math.sqrt(a);
    var V = Math.trunc(b);
  
    for (let i = 2; i <= V + 1; i++) {
      if (a == 2 || a == 3) {
        return true;
        break;
      } else if (a % i == 0) {
        return false;
        break;
      } else if (i == V) {
        return true;
      }
    }
  }
// N = prompt("Plzz enter a Number from 1 to 8");
// You can change the vakue if inout down here!
let N=3


let primes = [2, 3, 5, 7];
let m=[]
for (i = 10**(N-1)+1; i <=10**N ; i=i+2) {
  if (isPrime2(i)) {
    m.push(i)  
  }
}


let n=m.length
let mm=[];
let v=0
for (i=0;i<=m.length;i++) {
  let c=N-1
  while (true) {
    if (isPrime2(Math.trunc(m[i]/10**c))) {
      
      if (c==1) {
        //mm.push=m[i]
        console.log(m[i])
        break
      } 
      c--                
    }
    else {
      break
    }
     
    
  }
}
//console.log(mm)