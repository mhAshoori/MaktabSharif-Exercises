let a=prompt("Enter the bigger number: ")
let b=prompt("and the other one: ")
if (parseInt(a)<=parseInt(b)) {
    alert("Wrong Order!")
}
if ((b-a)%2!=0) {
    alert("Wrong Differece")
}
//for (i=1;i<a;i++) {
  //  if 
//}

let c="*"
let d=" "
let  myArray=[]
//let myG=''
for(i=0;i<a;i++) {
   myArray.push("*")
 //   myG=myG+myArray[i]
}

let myArray2=[...myArray]
//let myG2=' '
for(i=0;i<b;i++) {
    nn=(a-b)/2+i
    myArray2[nn]=" "
   // myG2=myG2+myArray2[i]
 }

cc=(a-b)/2

for (i=1;i<=a;i++) {
    if (((i)<=cc )||( Math.abs(i-a)<    cc)) {
        console.log(myArray)
    } else {
        console.log(myArray2)
    }
}