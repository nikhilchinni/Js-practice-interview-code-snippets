// Remaining topics as of now to study are promise Apis, Debouncing, Throttling,local and session storage

let employee = {
  firstName: "Ravi",
  lastName: "Raju",
};

let printMyName = function (age, homeTown) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      `and his age is ${age} and his hometown is ${homeTown}`
  );
};

printMyName.call(employee, [24, "Bapatsdfla"]);
printMyName.apply(employee, [24, "Bapatla"]);

let printFullInfo = printMyName.bind(employee, "24", "gudivada");
printFullInfo();

// polyfill for call , apply and bind, push ,pop

Function.prototype.myCall = function (context, ...args) {
  console.log(this);
  if (typeof this !== "function") throw new Error("Invalid type");
  context.fn = this;
  context.fn(...args);
};

Function.prototype.myApply = function (context, args) {
  console.log(this, args);
  if (typeof this !== "function") throw new Error("Invalid type");
  context.fn = this;
  context.fn(...args);
};
printMyName.myApply(employee, [24, "Badsdspatla"]);

Function.prototype.myBind = function (context, ...args) {
  context.fn = this;
  return function (...params) {
    context.fn(...args, ...params);
  };
};

let printFullInfo1 = printMyName.myBind(employee, "12", "gudisdsvada");
printFullInfo1();

let arr = [3, 41, 3, 22, 3, 2, 2, 2];
Array.prototype.myPush = function (number) {
  this[this.length] = number;
  return this;
};

Array.prototype.myPop = function () {
  this.length = this.length - 1;
  return this;
};

// arr.myPush(4224)
arr.myPop();
console.log(arr);

// Spread and Rest Operators -------->

let arr1 = [2, 3, 4];
let arr2 = [45, 2, 1];
let mergearr = [...arr1, ...arr2];
console.log(mergearr, ...arr1, ...arr2);

// Adding the numbers using spread and rest operator

function sum(...args) {
  console.log("args", args);
  let add = 0;
  for (i = 0; i < args.length; i++) {
    add = add + args[i];
  }
  return add;
}

const finalResult = sum(...mergearr);
console.log(finalResult);

// Polyfills for map , filter and Reduce

let sampleArr = [2, 3, 22, 3, 86, 4, 21];
Array.prototype.myMap = function (callBackFn) {
  let final = [];
  for (i = 0; i < this.length; i++) {
    final.push(callBackFn(this[i], i, this));
  }
  return final;
};

const resultMap = sampleArr.myMap((x) => x * 2);
console.log(resultMap);

Array.prototype.myFilter = function (callBackFn) {
  let final = [];
  for (i = 0; i < this.length; i++) {
    if (callBackFn(this[i], i, this)) final.push(this[i]);
  }
  return final;
};

const resultFilter = sampleArr.myFilter((x) => x > 21);
console.log(resultFilter);

Array.prototype.myReduce = function (callBackFn, arg) {
  for (i = 0; i < this.length; i++) {
    if (arg) {
      arg = callBackFn(arg, this[i], i, this);
    } else arg = this[i];
  }
  return arg;
};

const resultReduce = sampleArr.myReduce((acc, curr) => acc + curr, 0);
console.log(resultReduce);

// Promises along with try and catch block

// const p1 = new Promise((resolve, reject) => {
//   resolve("Promise was successfull");
//   reject("Dataa was not successfull");
// });

// p1.then((res) => console.log(res)).catch((err) => console.log(err));

// const getData = async () => {
//   // Using try and catch
//   try {
//     const res = await fetch("https://api.apis.guru/v2/list.json");
//     const data = await res.json();
//     console.log(data);
//   } catch (e) {
//     console.log("This was error" + e.message);
//   }

//   //Using Native promise then and catch

//   fetch("https://api.apis.guru/v2/list.json")
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e.message));
// };

// getData();


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

// Event bubbling and Event Capturing

// document.querySelector("#grandparent").addEventListener('click',()=>{
//     console.log("Grand Parent Clicked");
// });

// document.querySelector("parent").addEventListener('click',()=>{
//     console.log("Parent Clicked");
// });

// document.querySelector("child").addEventListener('click',()=>{
//     console.log("Child Clicked");
// })


// Js topics + Coding Challenges --------->

//Closures

function outer (){
  var a =23;
  return function (){
    console.log(a)
  }
}

outer()();

//Currying
// Using closures
const addThree = (a) =>{
  return (b) =>{
    return (c) =>{
      return a+b+c;
    }
  }
};

const finalSum =addThree(9)(8)(4)
console.log(finalSum);


// for ... in
// for ... of


let arr14= [1,2,4,5,6,3];
for(const ele of arr14){
  console.log(ele); 1,2,4,5,6,3
}

let obje1 = {a:2,b:8,c:9}
for(let key in obje1)
{
  console.log(obje1[key]);  2,8,9
}

let arr12=[1,2,3,4];

let [a,b,c,d]= arr12;
console.log(a);
console.log(b);
console.log(c);

let obj1={name:"bittu", age: 30};

let {name: name1, age:age} = obj1;

console.log(name1);
console.log(age);


const [a1, b1, c1 ] = [5, 40];

console.log(a1); 
console.log(b1); 
console.log(c1);


// Example for demonstrating the value of this using regular function and arrow function with respect to object
var age2=20;
var person= {
    age: 25,
    city: "Blr", 
    displayAge: function(){
        console.log(this)
        console.log(this.age);
        console.log("city:", this.city);
    },
    nestedObject: {
        age: 40,
        city: "Pune",  
        displayAge: function(){
            console.log(this)
            console.log(this.age);
        }
    },
    arrowMethod: {
        age: 50,
        city: "Mumbai",  
        displayAge: () => {
            console.log(this)
            console.log(this.age2);
        }
    }

}

person.displayAge();
person.nestedObject.displayAge();
person.arrowMethod.displayAge();





















let name10 ="Javascripppppt is verrry parrot";

const finalResult1 =name10.split(" ").join("").split("").reduce((acc,curr)=>{
  if(acc[curr]) acc[curr]= acc[curr]+1
  else acc[curr] =1
  return acc
},{});


let max = Math.max(...Object.values(finalResult1));

let res ={};

for(let i in finalResult1){
  if(finalResult1[i]===max){
    res[i]=finalResult1[i];
  }
}
console.log(res)

const cardNumber = '1234234534564567'
const last4 = cardNumber.slice(cardNumber.length-4);
const rest = cardNumber.slice(0,cardNumber.length-4);
let str ='';
for(i=0;i<rest.length;i++){
  str =str +'*'
}
const maskedNumber = str+last4;
console.log(maskedNumber);


const products = [
{ name: 'apples', category: 'fruits' },
{ name: 'oranges', category: 'fruits' },
{ name: 'potatoes', category: 'vegetables' }
 ];

// output:
// const products = {
//     fruits: [
//      { name: 'apples', category: 'fruits' },
//      { name: 'oranges', category: 'fruits' },
//     ],
//     vegetables: [
//     { name: 'potatoes', category: 'vegetables' }]

//  };


const productsResult= products.reduce((acc,curr)=>{
  if(acc[curr.category]){
    acc[curr.category].push(curr);
  }
  else{
    acc[curr.category]=[curr];
  }
  return acc
},{});

console.log(productsResult)


 const data= [
      {a: 1, b: 2},
      {b: 3, c: 4},
      {a: 5, b: 6}
  ];

  const dataResult =data.reduce((acc,curr)=>{
    for(i in curr){
      if(acc[i]){
        acc[i]=acc[i]+curr[i];
      }
      else{
        acc[i]=curr[i];
      }
    }
    return acc;
  },{});

  console.log(dataResult)

  let characters = [
    {
        "name": "Alice",
        "age": 25,
        "gender": "Male",
        "height_cm": 168,
        "city": "New York"
    },
    {
        "name": "Bob",
        "age": 30,
        "gender": "Male",
        "height_cm": 183,
        "city": "Los Angeles"
    },
    {
        "name": "Charlie",
        "age": 35,
        "gender": "Male",
        "height_cm": 178,
        "city": "Chicago"
    },
    {
        "name": "Diana",
        "age": 28,
        "gender": "Male",
        "height_cm": 162,
        "city": "Houston"
    },
    {
        "name": "Eva",
        "age": 22,
        "gender": "Male",
        "height_cm": 173,
        "city": "Miami"
    }
];


const charactersResult = characters.sort((a,b)=>
{
  const aName =a.name.toLowerCase();
  const bName =b.name.toLowerCase();
  if(aName<bName){
    return 1;
  }
  else if(aName>bName){
    return -1;
  }
  else{
    return 0;
  }
}
);

console.log(charactersResult);


let arr61= [1,2,3,1,1,1,2,3,3,4,2,5];

const removeDuplicates=arr61.filter((x,i,arr)=> arr.indexOf(x)===i);
console.log(removeDuplicates);

let newArr = []
// arr61.forEach((x)=>{
//   if(!newArr.includes(x)){
//     newArr.push(x);
//   }
// })

for(i=0;i<arr61.length;i++){
  if(!newArr.includes(arr61[i])){
    newArr.push(arr61[i]);
  }
}
console.log(newArr);


const sampleArr1 = [
      {
          title:"c",
          author:"d"
      },
      {
          title:"java",
          author:"a"
      },
      {   
          title:"python",
          author:"b"
      },
      {
          title:"java",
          author:"a"
      }
  ]

  const removeDuplicates1 = sampleArr1.filter((item,index)=>{
    console.log(index,sampleArr1.findIndex((item1)=>item.title===item1.title && item.author === item1.author) )
          return index=== sampleArr1.findIndex((item1)=>item.title===item1.title && item.author === item1.author);
})
console.log(removeDuplicates1);


let inp = [1,2,3,4,5,6]
let rotation =4

for(i=0;i<rotation;i++)
{
  inp.unshift(inp.pop())
}
console.log(inp)




const str21 = "this is javascript codee";
let newARR =[]
let split1 = str21.split(" ");
for(i=0;i<split1.length;i++){
  newARR.push(split1[i].split("").reverse().join(""));
}
let finalStr=newARR.join(" ");
console.log(finalStr,split1.reverse().join(" "));


const str2 = " this is javascript code and you have to find max character";
function findNumberOfChar(str) {
    let str1 = str.split("");
    let charCount = {};

    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];
        if (char !== ' ') {
            if (charCount[char]) {
                charCount[char]++;
            } else {
                charCount[char] = 1;
            }
        }
    }
    return charCount;

}

console.log(findNumberOfChar(str2))


let obj = { t: 4, h: 3, i: 4, s: 3, j: 1 };

function findMaxValue(obj) {
    let max = 0;
    for (let data in obj) {
        // console.log(obj[data])
        if (obj[data] > max) {
            max = obj[data];
        }
    }
    for (let data in obj) {
        if (obj[data] === max) {
            console.log( data)
        }
    }
}

findMaxValue(obj);


function countCharacter(str) {
  let charCount = {};
  for (let s of str) {
      if (s !== " ") {
          charCount[s] = (charCount[s] || 0) + 1
      }
  }
  return charCount
}

console.log("cc",countCharacter("my name is bittu"));


const schoolData = [
  {
    class: "Math",
    students: [
      { name: "Alice", grade: 90, activities: ["Chess", "Debate"] },
      { name: "Bob", grade: 80, activities: ["Soccer", "Debate"] },
    ],
  },
  {
    class: "Science",
    students: [
      { name: "Charlie", grade: 85, activities: ["Chess", "Drama"] },
      { name: "Diana", grade: 95, activities: ["Soccer", "Drama"] },
    ],
  },
];

// [ { class: 'Math', grade: 85 }, { class: 'Science', grade: 90 } ]

let schoolResult =schoolData.map((classData)=>{
  return {
    class:classData.class,
    grade : classData.students.reduce((acc,curr)=>acc+curr.grade,0)/classData.students.length
  }
  
})

console.log(schoolResult)


const fruits = [
  { apple: 4, orange: 7, grape: 3 },
  { guava: 6, lemon: 4, banana: 8 },
  { orange: 5, pineapple: 7, apple: 7 },
];


const fruitsResult = fruits.reduce((acc,curr)=>{
  for(i in curr){
    if(acc[i])
    {
      acc[i]=acc[i]+curr[i]
    }
    else
    {
      acc[i]=curr[i];
    }
  }
  return acc;
},{});
console.log(fruitsResult)

let arr22 = ["apple", "banana", "cherry"];


// { "apple": 0, "banana": 0, "cherry": 0 }

let re1 ={}

for(i of arr22){
  re1[i]=0;
}
console.log(re1);

let finaltrans= arr22.reduce((acc,curr)=>{
    acc[curr]=0;
    return acc;
},{})

console.log(finaltrans);



let group = [{name: 'A', age: 20, city: 'BLR'}, {name: 'B', age: 20, city: 'DEL'}, {name: 'C', age: 21, city: 'BLR'}] 
// { "BLR": [{name: 'A', age: 20}, {name: 'C', age: 21}], "DEL": [{name: 'B', age: 20}] }.


let groupFinal = group.reduce((acc,curr)=>{
  if(acc[curr.city])
  {
    acc[curr.city].push({name:curr.name,age:curr.age})
  }
  else{
    acc[curr.city]=[{name:curr.name,age:curr.age}]
  }
  return acc;
},{});

console.log(groupFinal);



let arr25 = [1, 2, 2, 3, 3, 3, 4];

// { '1': 1, '2': 2, '3': 3, '4': 1 }

Array.prototype.Myreduce = function(callBackFn,acc){
  for(i=0;i<this.length;i++){
    if(acc){
      acc=callBackFn(acc,this[i],i,this);
    }
    else{
      acc=this[i]
    }
  }
  return acc;
}

let finalocur= arr25.Myreduce((acc,curr)=>{
  if(acc[curr]){
    acc[curr]=acc[curr]+1;
  }
  else{
    acc[curr]=1
  }
  return acc;
},{})
console.log(finalocur);




let arr15 = [1, [2, [3, 4, 5]]]
// [1, 2, 3, 4, 5]

function flattenArr(arr15) {
  let res = []
  for (let data of arr15) {
    if (Array.isArray(data)) {

      let flatData = flattenArr(data)
      console.log("fladtat@@@@@@@@@@@@@@@@@@@@",flatData);
      res.push(...flatData);
    } else {
      res.push(data);
    }
  }
  return res
}

console.log(flattenArr(arr15))


function anagramChecker(str1, str2) {
  if (str1.length !== str2.length) {
      return false;
  }
  console.log(str1.split("").sort());
  const formatStr = str => str.toLowerCase().split("").sort().join("");

  return formatStr(str1) === formatStr(str2);
}

console.log(anagramChecker('listen', 'silent'))


let arr89 =[1, 2, 4, 5]

function findMissingNumber(arr){
  arr.sort((a,b)=> a-b);
  for(i=0;i<arr.length;i++){
    if(arr[i]!==i+1)
    {
      return i+1
    }
  }
  return arr.length+1;
}

console.log(findMissingNumber(arr89))


const data12= [
  {a: 1, b: 2},
  {b: 3, c: 4},
  {a: 5, b: 6}
]

  // { a: 2, b: 3, c: 1 }
  //{a:6, b:11 ,c:4}


const getPropertyFrequency = data12.reduce((acc,curr)=>{
    for(i in curr){
      if(acc[i]){
        acc[i]=acc[i]+curr[i];
      } 
      else{
        acc[i] = curr[i]
      }
    }
    return acc;
},{});

console.log(getPropertyFrequency);


const books12 = [
    { title: 'Book 1', author: 'Author A', genre: 'Fantasy' },
    { title: 'Book 2', author: 'Author B', genre: 'Science Fiction' },
    { title: 'Book 3', author: 'Author C', genre: 'Fantasy' },
    { title: 'Book 4', author: 'Author D', genre: 'Science Fiction' },
    { title: 'Book 5', author: 'Author E', genre: 'Mystery' }
  ];
  

  // {
//   "Fantasy": [
//       {
//           "title": "Book 1",
//           "author": "Author A",
//           "genre": "Fantasy"
//       },
//       {
//           "title": "Book 3",
//           "author": "Author C",
//           "genre": "Fantasy"
//       }
//   ],
//   "Science Fiction": [
//       {
//           "title": "Book 2",
//           "author": "Author B",
//           "genre": "Science Fiction"
//       },
//       {
//           "title": "Book 4",
//           "author": "Author D",
//           "genre": "Science Fiction"
//       }
//   ],
//   "Mystery": [
//       {
//           "title": "Book 5",
//           "author": "Author E",
//           "genre": "Mystery"
//       }
//   ]
// }
  
 const groupBooksByGenre = books12.reduce((acc,curr)=>{
    if(acc[curr.genre]){
      acc[curr.genre].push(curr);
    }
    else{
      acc[curr.genre] = [curr]
    }
    return acc;
  },{})

  console.log(groupBooksByGenre)

  let res11 ={};
  books12.forEach((item)=>{
    if(res11[item.genre]){
      res11[item.genre].push(item);
    }
    else{
      res11[item.genre]=[item];
    }
  });

  console.log(res11);


  let bookData =[
    {name : 'raj', books : ['book1', 'book2'] },
    {name : 'raj1', books : ['book3', 'book4'] },
    {name : 'raj2', books : ['book5'] },
    {name : 'raj3', books : ['book6', 'book7'] }
]
 // [ 'book1', 'book2', 'book3', 'book4', 'book5', 'book6', 'book7' ]

const bookList = bookData.reduce((acc,curr)=>{
    acc.push(...curr.books);
    return acc;
},[]);

 console.log(bookList);


 const arr90 = [2, 4, 11, 6];

// let targetSum = 15;

for(i=0;i<arr90.length;i++){
  for(j=i+1;j<arr90.length;j++)
  {
    if(arr90[i]+arr90[j]===8)
    {
      console.log([arr90[i],arr90[j]]);
      break;
    }
  }
}


let inpit = {a:1, b:2, a:3, b: 4};
// outout: {a:[1,3], b: [2,4]}
let oup ={}
for( i in inpit){
  if(oup[i]){
    oup[i].push(inpit[i]);
  }
  else{
    oup[i]=[inpit[i]]
  }
}

console.log(oup);


// input
const cars = [
  { id: 1, brand: "Toyota", model: "Camry", price: 24000 },
  { id: 2, brand: "Honda", model: "Civic", price: 22000 },
  { id: 3, brand: "Toyota", model: "Corolla", price: 20000 },
  { id: 4, brand: "Honda", model: "Accord", price: 26000 },
  { id: 5, brand: "Ford", model: "Mustang", price: 30000 },
  { id: 6, brand: "Ford", model: "Focus", price: 19000 }
];

// output: 
        /*
              [{
                  brand: "Toyota",
                  totalValue: 44000
              }, {
                  brand: "Honda",
                  totalValue: 48000
              }, {
                  brand: "Ford",
                  totalValue: 49000
              }]
        */


// console.log(carsOutput);


// const result = Object.values(
  const result = cars.reduce((acc, { brand, price }) => {
    if (!acc[brand]) {
      acc[brand] = { brand, totalValue: 0 };
      console.log(acc);
    }
    acc[brand].totalValue += price;
    return acc;
  }, {})
// );

console.log(result);


// input : [0,1,0,3,12]
// output: [1,3,12,0,0]

let input14 = [0,1,0,3,12];

let res01 = [];
let res02= [];

for(let i=0; i<input14.length; i++){
  if(input14[i]===0){
    res02.push(0);
  }
  else{
    res01.push(input14[i]);
  }
}
console.log([...res01,...res02]);


function PalindromeNumberOrString(item){
  if(typeof item ==='string'){
    return item.split("").reverse().join("") === item;
  }
  return item.toString().split("").reverse().join("") == item;
}



console.log(PalindromeNumberOrString("malayalam"));
console.log(PalindromeNumberOrString(12122341));

let inputString = 'nikhil';
let resString ='';
console.log(resString,inputString.length-1,inputString[0])
for(let i=inputString.length-1;i>=0;i--){
  // console.log(resString,inputString[length-1])
  resString =resString+inputString[i];
}

console.log(resString);



// console.log(missing([1,2,3,6]))
// console.log(missing([-1,2,3,6]))
// console.log(missing([1,2]))


const greaterInput = [
  {name:"Alice",department:"IT",salary:70000},
  {name:"Bob",department:"HR",salary:50000},
  {name:"Charlie",department:"IT",salary:80000},
  {name:"David",department:"Finance",salary:70000},
  {name:"Eve",department:"HR",salary:55000},
  {name:"Frank",department:"Finance",salary:75000}
]

// Ouput [
//   {name:"Charlie",department:"IT",salary:80000},
//   {name:"Eve",department:"HR",salary:55000},
//   {name:"Frank",department:"Finance",salary:75000}
// ]

const maxSalaries =greaterInput.reduce((acc,curr)=>{
    if(acc[curr.department]){
      acc[curr.department]= Math.max(acc[curr.department],curr.salary);
    }
     else{
      acc[curr.department]=curr.salary
     }
     return acc;
},{});

console.log(maxSalaries);

const maxSalaritesOutput = greaterInput.filter(item => item.salary === maxSalaries[item.department] );
console.log(maxSalaritesOutput);


const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
  ];
  
  const flatArray = nestedArray.reduce((acc, arr) => acc.concat(arr), []);
  console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]


  const students = [
    { name: "Mahesh", grade: "A" },
    { name: "Hema", grade: "B" },
    { name: "TATA", grade: "A" },
    { name: "Sudha", grade: "C" },
    ];
    // Group the students by their grade.
    // Output: {
// A: [{ name: "Mahesh", grade: "A" }, { name: "TATA", grade: "A" }],
// B: [{ name: "Hema", grade: "B" }],
// C: [{ name: "Sudha", grade: "C" }]
// }


let studentsResult = students.reduce((acc,curr)=>{
  if(acc[curr.grade]){
    acc[curr.grade].push(curr);
  }
  else{
    acc[curr.grade]=[curr];
  }

  return acc;
},{})
console.log(studentsResult);


const data78 = [
  { id: 1, name: "Sudha" },
  { id: 2, name: "Mahesh" },
  { id: 1, name: "Sudha" },
];

const removeDuplicateObj= data78.filter((i,index,arr)=>{
  return index === arr.findIndex(ele =>ele.id===i.id);
})
console.log(removeDuplicateObj);


function swap(str){
  if(str.length<2){
      return str;
  }
  return str.charAt(str.length-1) + str.substring(1, str.length-1) +  str.charAt(0);
}

console.log(swap("Bittu"))

console.log([1,2,5].concat([9,8,7]));


function printPattern(n) {
  for (let i = 1; i <= n; i++) {
  let row = ""; // Initialize an empty string for each row
  for (let j = 1; j <= i; j++) {
  row += "* "; // Append a star and a space for each column
  }
  console.log(row); // Print the row
  }
  }
  printPattern(5);

  


  // const array1 = [
  //   { id: 1, name: "Hema" },
  //   { id: 2, name: "Mahesh" },
  //   ];
  //   const array2 = [
  //   { id: 1, age: 25 },
  //   { id: 2, age: 30 },
  //   ];

  //   const newPost = {
  //     title: "My New Post",
  //     body: "This is the content of the post.",
  //     userId: 1,
  //     };


fetch("url", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newPost)
})
  .then((response) => {
    if (!response.ok) throw new Error("Not a successfull response");
    return response.json()
  }).then(data => console.log(data))
  .catch(error => console.log(error));