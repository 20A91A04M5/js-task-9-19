
//////////// nested loops ////////////

var nam=prompt("enter username")
var pass=prompt("enter password")
if(nam=="username"){
    if (pass=="password"){
        console.log("valid")
    }else{
        console.log("invalid pass")
    }
}
else{
    console.log("invalid user")
}

///////////// next prime number ///////////
let n=7
c=0
while (c==0){
    n++
    fac=0
    for(i=2;i<n;i++){
        if(n%i==0){
            fac++
        }
    }
    if(fac==0){
        console.log(n)
        c++
    }
}

// while loop:-

i=0
while(i<=5){
    console.log(i)
    i++
}

// sum of numbers
// let num=1
// let sum=0
// while(num<=10){
//    sum+=num 
//    num++
// }
// console.log(sum)

/////////////// sum of +ve numbers ///////////
let num=0
let sum=0
while(num>=0){
    sum+=num 
    num=parseInt(prompt("enter two +ve number and one -ve number:-"))
}
console.log(sum)

///////do-while ///////////

i=0
do{
    console.log(i)
    i++
}
while(i<=5)

/////////////// sum of negative numbers ///////////
// let sum=0
// let num=0
// do{
// sum+=num
// num=parseInt(prompt("enter number:-"))
// }
// while(num<=0)
//     console.log(sum)

