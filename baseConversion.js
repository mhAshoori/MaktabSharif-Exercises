let x = parseInt(prompt("Enter Your Number: "));
let n = parseInt(prompt("Enter its Base: "));
let m = parseInt(prompt("and the Target Base: "));
let  z=parseInt(x);
y=1;
h=0;
p=1;
if (n!=10) {
    z=Math.trunc(0);
    while (x!=0)
    {
        r=Math.trunc(x%10);
        x=Math.trunc(x/10);
        z=Math.trunc(z+y*r);
        y=Math.trunc(y*n);
    }
}
while(z!=0) {
    r=Math.trunc(z%m);
    z=Math.trunc(z/m);
   
    h=Math.trunc(h+p*r);
    p=Math.trunc(p*10);
}
console.log("the changed number is: ",h)