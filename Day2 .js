// programe addition subtraction multiplication
let a=8;
let b=5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

//assignment operator
 let a=5;
 let b=9;
 console.log(a+=b);
 console.log(b-=a);

//Comparison Operators

let a=4;
let b=5;
// let result=a>b;
// let ans=a<b;
let result=a>b&&a<b;
let ans=a>b||a<b;
console.log(result)
console.log(ans)

//control structures

 let number=30;
 switch(number)
 {
    case 1:
        console.log("sunday");
        break;
    case 2:
        console.log("Monday")
    case 3:
        console.log("tuesday");
        break;
        default:
        console.log("tere liye kuch nahi hai")
 }


let marks = 65; // Change this value to test different marks

let grade;

switch (true) {
    case marks >= 90:
        grade = 'A+';
        break;
    case marks >= 80:
        grade = 'A';
        break;
    case marks >= 70:
        grade = 'B';
        break;
    case marks >= 60:
        grade = 'C';
        break;
    case marks >= 50:
        grade = 'D';
        break;
    case marks >= 40:
        grade = 'E';
        break;
    default:
        grade = 'F';
}

console.log(`For marks ${marks}, the grade is ${grade}`);

//using ternary operator even odd
let num=60050006666;
let result=(num%2===0)?"even" :"odd";
console.log(`${num} is ${result}`);


let year=1956;
if((year%4===0 && year%100!==0) || (year%400===0))
{
    console.log("leap year")
}
else{
    console.log("not a leap year")
}