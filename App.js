//Prototype, PrototypeChaining, Prototypal Inheritance...............................
// console.log("Hiiiiiiiiiiiiiii");
// let arr = [1, 2, 3, 4];

// Array.prototype.nikhil = "nikhil";
// Function.prototype.myfunc = function () {
//   console.log("hi how are you");
// };
// arr2 = [23, 4, 5, 3, 2];
// arr2.__proto__ = arr;
// // console.log(arr2.nikhil);

// function fun() {}

// Normal way of writing call,apply,bind method.............................................
// let name = {
//   firstName: "Chinni",
//   lastName: "Nikhil",
// };

// let printMyName = function (state, district, city) {
//   console.log(
//     this.firstName +
//       " " +
//       this.lastName +
//       " " +
//       state +
//       " " +
//       district +
//       " " +
//       city
//   );
// };
// printMyName.call(name, "ap", "bapatla", "bapatla");
// printMyName.apply(name, ["ap", "bapatla", "bapatla"]);
// let printMyNameUsingBind = printMyName.bind(name, "ap", "guntur");
// printMyNameUsingBind("guntur");

//Polyfill for bind method

// Function.prototype.myBind = function (context, ...args) {
//   context.fn = this;
//   return function (...nextargs) {
//     context.fn(...args, ...nextargs);
//   };
// };

// let printMyNameUsingMyBind = printMyName.myBind(name, "ap", "bapatla");
// printMyNameUsingMyBind("bapatla");

//Polyfill for call method

// Function.prototype.myCall = function (context, ...args) {
// console.log(this);
//   if (typeof this !== "function") throw new Error("Not a valid function");
//   context.fn = this;
//   context.fn(...args);
// };

// printMyName.myCall(name, "ap", "bapatla", "bapatla");

//Polyfill for apply method

// Function.prototype.myApply = function (context, args) {
// console.log(this);
//   if (typeof this !== "function") throw new Error("Not a valid function");
//   context.fn = this;
//   context.fn(...args);
// };

// printMyName.myApply(name, ["ap", "bapatla", "bapatla"]);

//Event bubbling and (Event Capturing aka Event trickling)...................................................
//So Ultimately flow shoudld go from capturing(trickling down) to bubbling(bubbling up)
// When true Capturing will happen and when false or not passed anything bubbling will happen
// We can use e.stopPropagation to when you want to stop propagating the event.

// document.querySelector("#grandparent").addEventListener(
//   "click",
//   (e) => {
//     console.log("Grand Parent Clicked !!");
//     e.stopPropagation();
//   },
//   true
// );

// document.querySelector("#parent").addEventListener(
//   "click",
//   () => {
//     console.log("Parent Clicked !!");
//   },
//   true
// );

// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("Child Clicked !!");
//   },
//   true
// );

//Event delegation.........................................................

// document.querySelector("#category").addEventListener("click", (e) => {
//   console.log(e);
//   if (e.target.tagName == "LI") {
//     window.location.href = "/" + e.target.id;
//   }
// });

//Cors and the explanation........................................................

// Debouncing and Throttling;.....................................................

// let count = 0;
// function myFunction() {
//   console.log("throttled or debounced......", count++);
// }

// function throttle(fn, limit) {
//   let flag = true;
//   return function () {
//     let context = this;
//     let args = arguments;
//     if (flag) {
//       fn.apply(context, args);
//       flag = false;
//       setTimeout(() => {
//         flag = true;
//       }, limit);
//     }
//   };
// }

// function debounce(fn, d) {
//   let timer;
//   return function () {
//     let context = this;
//     let args = arguments;
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(context, args);
//     }, d);
//   };
// }

// const betterFunction = debounce(myFunction, 300);
// const betterFunction = throttle(myFuntion, 3000);

//Spread Operator....................................................
// Concatenating arrays.
// let x = [1, 2];
// let y = [3, 4];
// let z = [...x, ...y];
// console.log(z); => z = [1, 2, 3, 4];

// Copying arrays or objects.
// let a = [...x];
// console.log(a); => a=[1,2]

// Passing array of values as individual arguments to a function.
// let b = [1, 3];
// function createExample(arg1, arg2) {
//   console.log(arg1, arg2);
// }
// createExample(...b);

//Rest Operator.................................................

// function Example(...args) {
// console.log(args); => [1,2,3,4]
// }
// Example(1, 2, 3, 4);

//Polyfill for map, filter and reduce....................................

// Array.prototype.myMap = function (callBackFn) {
//   let output = [];
//   for (i = 0; i < this.length; i++) {
//     output.push(callBackFn(this[i], i, this));
//   }
//   return output;
// };

// let newarr = [2, 4, 5].myMap((x) => x * 3);
// console.log("@@@@@@@@@", newarr);

// Array.prototype.myFilter = function (callBackFn) {
//   let output = [];
//   for (i = 0; i < this.length; i++) {
//     if (callBackFn(this[i], i, this)) {
//       output.push(this[i]);
//     }
//   }
//   return output;
// };

// let newarr1 = [2, 4, 5].myFilter((x) => x < 3);
// console.log("@@@@@@@@@", newarr1);

// Array.prototype.myReduce = function (callBackFn, initialValue) {
//   let accumulator = initialValue;
//   for (i = 0; i < this.length; i++) {
//     if (accumulator) accumulator = callBackFn(accumulator, this[i], i, this);
//     else accumulator = this[i];
//   }
//   return accumulator;
// };

// let newarr2 = [2, 1, 42, 3, 32].myReduce((acc, curr) => {
//   acc = acc + curr;
//   return acc;
// }, 0);

// console.log("***************", newarr2);
// Map,filter and Reduce Examples.........................................

// const Users = [
//   { firstName: "chinni", lastName: "nikhil", age: 26 },
//   { firstName: "elon", lastName: "musk", age: 50 },
//   { firstName: "donald", lastName: "trump", age: 75 },
//   { firstName: "kajal", lastName: "agarwal", age: 26 },
// ];

//1.list of full Names
//["chinni nikhil","elon musk", "donald trump","Kajal agarwal"]

// const fullNames = Users.map((item) => item.firstName + " " + item.lastName);
// console.log(fullNames);

//2.firstName of all the people whose age is less than 30
//['chinni', 'kajal']

// const firstNamesUsingReduce = Users.reduce((acc, curr) => {
//   if (curr.age < 30) acc.push(curr.firstName);
//   return acc;
// }, []);

// console.log(firstNamesUsingReduce);
// const firstNamesWithOutReduce = Users.filter((item) => item.age < 30).map(
//   (item) => item.firstName
// );
// console.log(firstNamesWithOutReduce);

//3.Output should be like this {26:2,75:1,50:1}

// const ageCounts = Users.myReduce((acc, curr) => {
//   if (!acc[curr.age]) acc[curr.age] = 1;
//   else acc[curr.age] = acc[curr.age] + 1;
//   return acc;
// }, {});

// console.log(ageCounts);

//Promises.....................................................

// function createCart() {
//     const p1 = new Promise((resolve,reject)=>{
//         if(false){
//             resolve("Promise was resolved");
//         }
//         reject("Promise was rejected");
//     })
//     return p1;
// }

// const Output =createCart();

// Output.then((res) => {console.log(res)})
// .catch((error)=> {console.log(error)});


//Promise Apis ...........................
// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("P1 Promise");
//     },1000)
// })

// const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("P2 Promise");
//     },3000)
// })

// const p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("P3 Promise");
//     },500)
// })

// We can use all,allSettled,race,any in the below expresions....
// Promise.any([p1,p2,p3]).then(res=> console.log(res))
// .catch(error=>console.error(error));



//Array Methods.....................................................

//map,reduce,filter,forEach,find,every,some,findIndex which takes callbackfunction
//at,indexOf,concat,join,slice,splice,split,reverse,includes,sort
//push,pop,shift,unshift

// //push -------->
// const arr4 = [3,2,2,67,42,2];
// arr4.push(930);
// console.log(arr4); [3,2,2,67,42,2,930]
// //pop --------->
// const arr7 = [3,2,2,67,42,2];
// arr7.pop();
// console.log(arr7); [3,2,2,67,42]
// //shift ------->
// const arr5 = [3,2,2,67,42,2];
// arr5.shift();
// console.log(arr5); [2,2,67,42,2];
// // unshift ---->
// const arr6 = [3,2,2,67,42,2];
// arr6.unshift(23);
// console.log(arr6); [23,3,2,2,67,42,2];
//slice ------->
// const arr9 = [3,2,2,67,42,2];
// const arr10 = arr9.slice(-5,-2); [2, 2, 67]
// const arr11 = arr9.slice(2,5); [2, 67, 42]
// console.log(arr11,arr10); 
//splice ------>
// splice(startIndex,number of elements to be deleted,elements to be added)
// const arr8 = [3,2,4,67,42,2];
// arr8.splice(2,2); 
// arr8.slice(2,1,97,30);
// console.log(arr8);

// const products = {
//     fruits: [
//      { name: 'apples', category: 'fruits' },
//      { name: 'oranges', category: 'fruits' },
//     ],
//     vegetables: [
//     { name: 'potatoes', category: 'vegetables' }]

//  };

// Call, bind, apply, map, reduce, filter









// <html>
//   <head>
//     <title>Practice</title>
//     <style>
//       div {
//         min-width: 300px;
//         min-height: 300px;
//         padding: 30px;
//         border: 1px solid black;
//       }
//     </style>
//   </head>
//   <body>
//     <!-- For Event bubbling and Capturing -->
//     <!-- <div id="grandparent">
//       <div id="parent">
//         <div id="child"></div>
//       </div>
//     </div> -->
//     <!-- For Event Delegation -->
//     <!-- <div>
//       <ul id="category">
//         <li id="laptops">laptops</li>
//         <li id="cameras">cameras</li>
//         <li id="shoes">shoes</li>
//       </ul>
//     </div> -->
//     <!-- For Debouncing or For Throttling -->
//     <input style="margin-top: 20px" type="text" onkeyup="betterFunction()" />
//     <script src="./App.js"></script>
//   </body>
// </html>









// const str1 = "this s javascript codee";

// function reverseString() {
//   let splitStr = str1.split(" ");
//   let splitStr1 = splitStr.join("").split("");
//   let count = splitStr1.reduce((acc, curr) => {
//     if (acc[curr]) {
//       acc[curr] = acc[curr] + 1;
//     } else {
//       acc[curr] = 1;
//     }
//     return acc;
//   }, {});

//   let max = 0;
//   console.log("@@@@@@@@@@",count);
//   for(i in count){
//     if(count[i]>max){
//         max=count[i];
//     }
//   }
  
//   for(i in count){
//     if(count[i]===max){
//         return i
//     }
//   }


// let res= {};
// let maxValue= Math.max(...Object.values(obj));
// for(let keys in obj){
//     if(obj[keys]===maxValue){
//         res[keys]=obj[keys];
//     }
// }
// }

// console.log(reverseString(str1));


// const cardNumber = "1234234534564567";

// let last4 = cardNumber.slice(cardNumber.length-4);
// let remaining = cardNumber.slice(0,cardNumber.length-4);

// let str ='';
// for(i=0;i<remaining.length;i++){
//     str= str+"*";
// }
// const maskednumber = str+last4;
// console.log(maskednumber);



// const products = [
// { name: 'apples', category: 'fruits' },
// { name: 'oranges', category: 'fruits' },
// { name: 'potatoes', category: 'vegetables' }
//  ];

// output:
// const products = {
//     fruits: [
//      { name: 'apples', category: 'fruits' },
//      { name: 'oranges', category: 'fruits' },
//     ],
//     vegetables: [
//     { name: 'potatoes', category: 'vegetables' }]

//  };



// const Total = products.reduce((acc,curr)=>{
//         if(acc[curr.category]){
//             acc[curr.category].push(curr);
//         }
//         else
//         {
//            acc[curr.category]=[curr] 
//         }
//         return acc;
//     },{})

// console.log(Total);


// const data= [
//     {a: 1, b: 2},
//     {b: 3, c: 4},
//     {a: 5, b: 6}
// ]

// const fruits = [
//     { apple: 4, orange: 7, grape: 3 },
//     { guava: 6, lemon: 4, banana: 8 },
//     { orange: 5, pineapple: 7, apple: 7 },
// ];


// const Total = fruits.reduce((acc,curr)=>{

//     for(let i in curr){
//         console.log(i);
//         if(acc[i]){
//             acc[i]=acc[i]+curr[i];   
//        }
//        else{
//            acc[i]=curr[i];
//        }
//     }
  
//     return acc
// },{})

// console.log(Total)



// const obj1= {name: "Bittu", age: 24, Address: {city:"BLR", state: "Karnataka"}}
// const obj2= {name: "Bittu", age: 24, Address: {city:"BLR", state: "Karnataka"}}
// const obj3= {name: "Rahul", age: 25, Address: {city:"Ranchi", state: "Jharkhand"}}

// console.log(JSON.stringify(obj1)==JSON.stringify(obj3));



// function flattenArray(array){
//     let flattened =[];
//     console.log(flattened);
//     array.forEach(element => {
//             if(Array.isArray(element)){
//             let flattened2=flattenArray(element);
//             console.log(flattened2);
//             flattened.push(...flattened2);

//             }
//             else {
//                 flattened.push(element);
//             }
//     });

//     return flattened;
// }


// console.log(flattenArray([1, 2, 3, [4, 5], [3,2,3,2] ,10]));


// let obj1 = { name: "fdf", details: { city: "blr" } };

// // Shallow copy of 'obj1'
// let obj2 = Object.assign({}, obj1);
// let obj23 = {
//     ...obj1,
//     details:{
//         ...obj1.details,
//         city:"chennai"
//     }
// }

// // Modify 'obj2', 'obj1' affected
// obj2.details.age = 24;

// console.log("Shallow Copy - Object with Nested Values:",obj1,obj23);
// console.log(obj1.details.age);   // 24
// console.log(obj2.details.age); 


// function missing(arr){
//     let missingArray=[];
//     let min= Math.min(...arr);
//     let max= Math.max(...arr);

//     for(let i=min; i<=max; i++){
//         if(!arr.includes(i)){
//             missingArray.push(i);
//         }

//     }
//     return missingArray;
// }

// console.log(missing([1,2,3,6]))
// console.log(missing([-1,2,3,6]))
// console.log(missing([1,2]))



// function toCamelCase(str) {
//     if (!str) {
//         return '';
//     }
//     const words = str.split(' ');
//     words[0] = words[0].toLowerCase();

//     for (let i = 1; i < words.length; i++) {
//         console.log(words,words[i].toLowerCase());
//         let lowercaseWord = words[i].toLowerCase();
//         let camelCaseWord = lowercaseWord.charAt(0).toUpperCase() + lowercaseWord.slice(1);
//         words[i] = camelCaseWord;
//     }

//     return words.join('');
// }

// console.log(toCamelCase("hello world"));


// function palindrome(str) {
//     let removeSpace = /\s/g;

//     let str1 = str.toLowerCase().replace(removeSpace, "")
//     let str2 = str1.split("").reverse().join("")
//     return str1 === str2;
// }

// console.log(palindrome("never odd or even"));


// const sampleArr = [
//     {
//         title:"c",
//         author:"d"
//     },
//     {
//         title:"java",
//         author:"a"
//     },
//     {   
//         title:"python",
//         author:"b"
//     },
//     {
//         title:"java",
//         author:"a"
//     }
// ]

// const removeDuplicates = sampleArr.filter((item,index)=>{
//           return index=== sampleArr.findIndex((item1)=>item.title===item1.title && item.author === item1.author);
// // })
// console.log(removeDuplicates);

// const phone = "7032636263";
// const phoneLength = phone.length;
// const lastFour = phone.slice(phoneLength-4);
// const remaining = phone.slice(0,phoneLength-4);
// const maskedNumber ="*".repeat(remaining.length) + lastFour;
// console.log(maskedNumber);

// const str = "This is infosys interview";
// const str1 = str.split(" ");
// const str2 = str1.map(i=>i.split("").reverse().join(""));
// const str3 = str2.join(" ");
// console.log(str3);

// const name = "This is infosys interview"
// let name1 = name.split("i").join("")
// console.log(name1,name.split("i"));


//.  Collect books from array of objects and return collection of books as an array
//  let bookData =[
//     {name : 'raj', books : ['book1', 'book2'] },
//     {name : 'raj1', books : ['book3', 'book4'] },
//     {name : 'raj2', books : ['book5'] },
//     {name : 'raj3', books : ['book6', 'book7'] }
// ]

// let newData =[];
// bookData.forEach((data)=>{
//     newData.push(...data.books)
// });

// console.log(newData);

// const books = [
//     { title: 'Book 1', author: 'Author A', genre: 'Fantasy' },
//     { title: 'Book 2', author: 'Author B', genre: 'Science Fiction' },
//     { title: 'Book 3', author: 'Author C', genre: 'Fantasy' },
//     { title: 'Book 4', author: 'Author D', genre: 'Science Fiction' },
//     { title: 'Book 5', author: 'Author E', genre: 'Mystery' }
//   ];
  
  
//  function groupBooksByGenre(books){
//     const obj= {}
//     books.forEach((book)=>{
//         if(!obj[book.genre]){
//             obj[book.genre]=[book];
//         }
//         else{
//         obj[book.genre].push(book);
//         }
//     })
//     return obj;
//  }

// const output=  groupBooksByGenre(books);
// console.log(output); 


// input: 'hello'
// output: 'helo'
// const str ="hello";
// const str1= str.split("");
// const finalOutput = str1.filter((ele,i,arr)=>arr.indexOf(ele)===i)
// console.log(finalOutput.join(""),[...new Set(str)].join(""));
// let newArr= []
// for(i=0;i<str.length;i++){
//     if(!newArr.includes(str[i]))
//     {
//         newArr.push(str[i])
//     }
// }
// console.log(newArr.join(""));


// 3. write a function to move all zero to the end of the array while maintaining the relative order of the non-zero elements.
// input: [0,1,0,3,12]
// output: [1,3,12, 0, 0]
// const arr= [0,1,0,3,12]
// let firstArr=[];secondArr=[];
// for(i=0;i<arr.length;i++)
// {
//     if(arr[i]===0){
//         secondArr.push(arr[i]);
//     }
//     else{
//         firstArr.push(arr[i]);
//     }
// }

// const finalOutput = [...firstArr,...secondArr];
// console.log(finalOutput);


// example for when we have plane sentence with space only, there we need to remove space and compare 
// const str = "never odd or even";
// const str1= str.split(" ");
// const str7 = str1.join("");
// console.log(str7);
// const str8= str7.split("").reverse().join("");
// console.log(str8===str7);
// console.log(palindrome("never odd or even"));



// 6. write a function which return first non-repeating character, if not available then return -1
// example:
// input: "aabbcc"
// output: -1
// input: "aabbcd"
// output: "c"
// const str = "aabbcd";
// const str1 = str.split("");
// const finalOutput = str1.reduce((acc,curr)=>{
//     if(acc[curr]){
//         acc[curr]=acc[curr]+1;       
//     }
//     else{
//         acc[curr]=1;
//     }
//     return acc;
// },{});
// console.log(finalOutput)
// let final;
// for(i in finalOutput){
//     if(finalOutput[i]===1)
//     {
//         final = i
//         break;
//     }
// }
// console.log(i);


// // 14. Write a program to generate 6 digits random OTP 
// function generateOTP() {
//     let otp = "";
//     for (let i = 0; i < 6; i++) {
//         otp = otp + Math.floor(Math.random() * 10);
//     }
//     return otp;
// }


// 15. Write a program to find intersection of two arrays.
// function commonElementArray1(arr1, arr2) {
//     return arr1.filter(element => arr2.includes(element));
// }
//  console.log(commonElementArray1([1,2,3,4,5], [3,4,5,6,7]));


// // 17 Write a JavaScript program to capitalize the first letter of each word of a given string.
// const str = "my name is nikhil";
// const str1=str.split(" ");
// let newArr=[];
// for(i=0;i<str1.length;i++){
//     newArr.push(str1[i].charAt(0).toUpperCase()+str1[i].slice(1));
// }
// console.log(newArr.join(" "));

// const input = [
//     { key: "sample 1", data: "Data1" },
//     { key: "sample 1", data: "Data1" },
//     { key: "sample 2", data: "Data2" },
//     { key: "sample 1", data: "Data1" },
//     { key: "sample 3", data: "Data1" },
//     { key: "sample 4", data: "Data1" }
// ];

// // OUTPUT   
// /*
//   {  
//     "sample 1": [  { "key": "sample 1", "data": "Data1" },
//                     { "key": "sample 1", "data": "Data1" },
//                     { "key": "sample 1", "data": "Data1" } 
//                 ],
//     "sample 2": [ { "key": "sample 2", "data": "Data2" } ],
//     "sample 3": [ { "key": "sample 3", "data": "Data1" } ],
//     "sample 4": [ { "key": "sample 4", "data": "Data1" } ]
//   }

// */

// const finalOutput =input.reduce((acc,curr)=>{
//     if(acc[curr.key]){
//         acc[curr.key].push(curr);
//     }
//     else{
//         acc[curr.key]=[curr]
//     }
//     return acc;
// },{})

// console.log(finalOutput);




// const obj1= {name: "Bittu", age: 24, Address: {city:"BLR", state: "Karnataka"}}
// const obj2= {name: "Bittu", age: 24, Address: {city:"BLR", state: "Karnataka"}}
// const obj3= {name: "Rahul", age: 25, Address: {city:"Ranchi", state: "Jharkhand"}}

// console.log(JSON.stringify(obj1)==JSON.stringify(obj3));



// function flattenArray(array){
//     let flattened =[];
//     console.log(flattened);
//     array.forEach(element => {
//             if(Array.isArray(element)){
//             let flattened2=flattenArray(element);
//             console.log(flattened2);
//             flattened.push(...flattened2);

//             }
//             else {
//                 flattened.push(element);
//             }
//     });

//     return flattened;
// }


// console.log(flattenArray([1, 2, 3, [4, 5], [3,2,3,2] ,10]));


// let obj1 = { name: "fdf", details: { city: "blr" } };

// // Shallow copy of 'obj1'
// let obj2 = Object.assign({}, obj1);
// let obj23 = {
//     ...obj1,
//     details:{
//         ...obj1.details,
//         city:"chennai"
//     }
// }

// // Modify 'obj2', 'obj1' affected
// obj2.details.age = 24;

// console.log("Shallow Copy - Object with Nested Values:",obj1,obj23);
// console.log(obj1.details.age);   // 24
// console.log(obj2.details.age); 


// function missing(arr){
//     let missingArray=[];
//     let min= Math.min(...arr);
//     let max= Math.max(...arr);

//     for(let i=min; i<=max; i++){
//         if(!arr.includes(i)){
//             missingArray.push(i);
//         }

//     }
//     return missingArray;
// }

// console.log(missing([1,2,3,6]))
// console.log(missing([-1,2,3,6]))
// console.log(missing([1,2]))



// function toCamelCase(str) {
//     if (!str) {
//         return '';
//     }
//     const words = str.split(' ');
//     words[0] = words[0].toLowerCase();

//     for (let i = 1; i < words.length; i++) {
//         console.log(words,words[i].toLowerCase());
//         let lowercaseWord = words[i].toLowerCase();
//         let camelCaseWord = lowercaseWord.charAt(0).toUpperCase() + lowercaseWord.slice(1);
//         words[i] = camelCaseWord;
//     }

//     return words.join('');
// }

// console.log(toCamelCase("hello world"));


// function palindrome(str) {
//     let removeSpace = /\s/g;

//     let str1 = str.toLowerCase().replace(removeSpace, "")
//     let str2 = str1.split("").reverse().join("")
//     return str1 === str2;
// }

// console.log(palindrome("never odd or even"));



// Practice on Jan 28 2025 ---------------------------------------------------------------->

// Ways to create an object 
// let count =0;
// const getDatafast = () =>{
//     console.log("Fetching Data ..........",count++);
// }

// const debounce = (fn, d)=>{
//     let timer;
//     return function(){
//         let context = this;
//         let args = arguments;
//         clearTimeout(timer);
//          timer = setTimeout(()=>{
//             fn.apply(context,args);
//         },d)
//     }
// }

// const throttle = (fn,limit)=>{
//     let flag =true
//     return function () {
//         let context = this;
//         let args = arguments;
//         if (flag) {
//             flag = false;
//             fn.apply(context, args);
//             setTimeout(() => {
//                 flag = true;
//             }, limit);
//         }   
//     }
// }

// const betterFunction = throttle(getDatafast,1000);
