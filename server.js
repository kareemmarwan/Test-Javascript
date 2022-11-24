/// sort

const users = [
  {
    id: 1,
    first_name: "Kareem",
    last_name: "Kemoo",
    age: 27,
  },
  {
    id: 3,
    first_name: "Amr",
    last_name: "Dar",
    age: 24,
  },
  {
    id: 2,
    first_name: "Bahi",
    last_name: "Mahmood",
    age: 22,
  },

  {
    id: 4,
    first_name: "Ahmed",
    last_name: "Sameer",
    age: 22,
  },
];

var input = [
  { Fname: "Jan", age: 16 },
  { Fname: "Reem", age: 30 },
  { Fname: "Ali", age: 66 },
  { Fname: "March", age: 20 },
  { Fname: "Basma", age: 25 },
  { Fname: "Ahamed", age: 25 },
  { Fname: "Ahmed", age: 16 },
  { Fname: "Manal", age: 16 },
  { Fname: "Ahmed", age: 17 },
  { Fname: "Kemo", age: 25 },
  { Fname: "Kemo", age: 32 },
  { Fname: "samer" },
  { Fname: "join", num: 32 },
  true,
  false,
  "Hi",
];
let copyFNmae = [];
let copyFNmae1 = [];

const FName = ["Marawn", "asmaa", "ccc", "ahmad", "marim"];

// input.map((item, index) => {
//   let inserted;
//   let isLoading;
//   copyFNmae.map((i, x) => {
//     if (!isLoading) {
//       if (item.Fname.toUpperCase() < i.Fname.toUpperCase()) {
//         inserted = true;
//         copyFNmae.splice(x, 0, item);
//         isLoading = true;
//       }
//     }
//   });

//   !inserted ? copyFNmae.push(item) : null;
// });
// input.map((item, index) => {
//   let inserted;
//   let isLoading;
//   copyFNmae.map((i, x) => {
//     if (!isLoading) {
//       if (item.Fname.toUpperCase() < i.Fname.toUpperCase()) {
//         inserted = true;
//         copyFNmae.splice(x, 0, item);
//         isLoading = true;
//       }
//     }
//   });

//   !inserted ? copyFNmae.push(item) : null;
// });

const Users = {};

// Function For Sorting Array of Objects

// console.log({ ...Users });
// console.log(input);

// input.map((item, index) => {
//   let inserted;
//   let isLoading;
//   copyFNmae.map((i, x) => {
//     if (!isLoading) {
//       if (item.age < i.age) {
//         inserted = true;
//         copyFNmae.splice(x, 0, item);

//         isLoading = true;
//       }
//     }
//   });

//   !inserted ? copyFNmae.push(item) : null;
// });

// console.log(copyFNmae);

const Sorting = (sorting) =>
  [...sorting].sort((a, b) => {
    if (a.Fname < b.Fname) {
      return -1;
    }
    if (a.Fname > b.Fname) {
      return 1;
    }
    return 0;
  });
input.map((item) => {
  const age = item.age || 0;
  Users[age] = Sorting([...(Users[age] || []), item]);
});
// console.log(Users);

// let NNew = Object.values(Users);
// console.log(
//   NNew.forEach((item) => {
//     return console.log(item);
//   })
// );
// const NewAreeay = Object.values(Users);
// let Arraybas = [];
// NewAreeay.map((item, index) => {
//   let inserted;
//   let isLoading;
//   Arraybas.map((i, x) => {
//     console.log(i[x]);
//   });

//   !inserted ? Arraybas.push(item) : null;
// });
// console.log(Arraybas);

// ----------------------------------------------------\\

// Regular Function VS Arrow Function
//var variable = "Global Level Variable";
//let myObject = {
//variable: "Object Level Variable",
//arrowFunction: (...n) => {
//  console.log(...n);
//},
// regularFunction() {
//   console.log(arguments[2]);
//   console.log(arguments[1]);
//   console.log(arguments[0]);
//   console.log(arguments[3]);
// },
//};
//myObject.arrowFunction(1, 2, 4);
// myObject.regularFunction(2, 3, 4, 3);

// const people = [
//   { name: "kareem", age: 27 },
//   { name: "amer", age: 20 },
//   { name: "reem", age: 39 },
//   { name: "samer", age: 47 },
//   { name: "kareem", age: 17 },
//   { name: "lubna", age: 31 },
//   { name: "kareem", age: 12 },
// ];

// let getSum = people
//   .filter((people) => people.age > 15 && people.age <= 50)
//   .filter((people) => people.name == "kareem")
//   .map((people) => people.age)
//   .reduce((prev, curr) => (prev || 0) + curr);

// console.log(getSum);

// function Employee(Fname, Age, Email, JobTitle, Sdata, ExpiryData) {
//   this.Fname = Fname;
//   this.Age = Age;
//   this.Email = Email;
//   this.JobTitle = JobTitle;
//   this.Sdata = Sdata;
//   this.ExpiryData = ExpiryData;

//   console.log(
//     `Hello Eng ${this.Fname}
//      Yor age ${this.Age}
//       And Your Email ${this.Email}
//       Start Data ${this.Sdata}
//        Expiry data ${this.ExpiryData}`
//   );
// }

// const kareem = new Employee(
//   "kareem",
//   27,
//   "kareem@gmail.com",
//   "React Native",
//   "11/4/2022",
//   "11/2/2023"
// );
// console.log(kareem.Fname);

// function Employee() {
//   this.massge = function () {
//     console.log(
//       `Hello Eng ${this.Fname}
//        Yor age ${this.Age}
//         And Your Email ${this.Email}
//         Start Data ${this.Sdata}
//          Expiry data ${this.ExpiryData}`
//     );
//   };
// }

// const kareem = new Employee();
// kareem.Fname = "kareem";
// kareem.Age = 27;
// kareem.Email = "kareem@gmail.com";
// kareem.Sdata = "11/4/2022";
// kareem.ExpiryData = "11/2/2023";
// kareem.massge();

// console.log(x);
// let User_ = { name: "kareem", age: 27, phone: "059774712" };
// User_.job = "react";
// console.log(User_);
// var is function scoped and let is block scoped

// function Hedgehog() {
//   let speed = 10000; // this is private
//   this.name = "Sonic";
//   this.zoom = function () {
//     // both name and speed are accessible from here
//     console.log(
//       `${this.name} zooms with the speed of ${speed} miles per second!`
//     );
//   };
// }

// const sonic = new Hedgehog();

// console.log(sonic.name); //valid value
// console.log(sonic.speed); // undefined

function getMonthDifference() {
  const startDate = new Date(Start_Data);
  const endDate = new Date(End_Date);
  const res =
    endDate.getMonth() -
    startDate.getMonth() +
    12 * (endDate.getFullYear() - startDate.getFullYear());

  return res;
}

let MAN = {
  name: "kareem",
  age: 27,
  mass: function () {
    console.log(`Hello ${this.name} Your Age ${this.age}`);
  },
};
const { age } = MAN;
console.log(age);
// const Newan = { ...MAN };
// const { age } = Man;
// Newan.name = "kemoo";
// Newan.mass();
