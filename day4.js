// functions
// odd and even no

//  function oddEven(num)
//  {
//     if(num%2==0)
//     {
//         console.log("num is even");
    
//     }
//     else{
//         console.log("num is odd")
//     } 
//  }
// oddEven(48);

//  square
// function square(num)
// {
//     let result=num*num;
//     console.log(result)
// }
// square(9)

// ///max of two number
// function maximum(num1,num2)
// {
//     if(num1>num2)
//     {
//         return num1;
//     }
//     else{
//         return num2;
//     }
// }
// console.log(maximum(4,6));


// function concanate(str1,str2)
// {
//      let result =str1+str2;
//     let result=str1.concat(str2)
//      return result;
// }
// console.log(concanate("nitesh","kabir"));

  
// //arrow Function
//  const sum=(a,b)=>a+b;
//  console.log(sum(7,4))

// const contains=(str,char)=>str.includes(char);
// console.log(contains('Hello','u'));

// const fun=(a,b=5)=>a*b;
// console.log(fun(4));

// function message(name,age=22)
// {
//     console.log(`name is ${name} and age is ${age}`);
// }
// message("nitesh");
 
//for each
let name=["pune","banglore","mumbai"]
name.forEach((val) => {
    console.log(val.toUpperCase());
});

//squre
let squar=[8,33,67]
squar.forEach((val)=>
{
    console.log(val*val);
})