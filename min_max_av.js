let N=prompt("How many numbers do you have")
let aa=0;
let m=[];
for (i=0;i<N;i++) {
    x=prompt("ENter YOur Nums")
    m.push(x)
    aa=aa+parseInt(x); 
}
aa=aa/N;
let mini=Math.min(...m)
let maxi=Math.max(...m)
console.log("Minimum is: ",mini)
console.log("Maximum is: ",maxi)
console.log("Average is: ",aa)