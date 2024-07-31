
//Activity 1 : array creation and access

//tast 1

const arr=[1,2,3,4,5];
// console.log(arr);

// //task2 access first and last element
// console.log(arr[0]);
// console.log(arr[arr.length-1]);

     //array method(Basic)//
//task1

let book=["physics","maths","chemistry"];

book.push("bio"); //push method is push element at end of the array

book.pop(); //pop remove element end of the array

book.shift();//shift method remove first element of the array

book.unshift("Hindi") //unshift method add element beginning of the array
// console.log(book)


  //multidimensional Array
//   let arr2=[[1,2,3],[4,5,6],[2,5,6]];
//   console.log(arr2[2][0]);

// let name=["nits","kabir","muc"];
// name.forEach((name,index)=>
// {
//      console.log(`index:${index} value: ${name}`);
// })

//slice and splice
let hero=["thor","ironman","hulk","lokey"]
// console.log(hero.slice(1,2));
// console.log(hero)
// console.log(hero.splice(3,1 ,101))
// console.log(hero)

//map return new Array 

let nums=[2,4,5,5]
 let newArray=nums.map((val)=>{
     // console.log(val)
      return val;
});

// console.log(newArray)

//reduce
let Arr=[4,55,67,89,12]
const outPut=Arr.reduce((prev,curr)=>
{
     return prev>curr?prev:curr;
})
console.log(outPut)