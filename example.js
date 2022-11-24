//https://www.section.io/engineering-education/sorting-algorithms-in-js/
// Encapsulation

// class Car {
//   setAtter(model, year) {
//     (this.model = model), (this.year = year);
//   }

//   getModel() {
//     console.log(this.model);
//   }

//   getYear() {
//     console.log(this.year);
//   }
// }

// const Car2 = new Car();

// Car2.setAtter("KIA", 2020);
// Car2.getModel()
// Car2.getYear()

//Abstraction

// function Person(name, age) {
//   (this.name = name), (this.age = age);
//   const address = "Gaza";

//   const findAddress = () => console.log(address);

//   this.getAddress = () => {
//     console.log(name, age);
//     findAddress();
//   };
// }

// const p = new Person("kareem", 27);
// // p.getAddress()

// //polymorphism
// class firstClass {
//   add() {
//     console.log("First Method");
//   }
// }
// class secondClass extends firstClass {
//   add() {
//     console.log(30 + 40);
//   }
// }
// class thirdClass extends secondClass {
//   add() {
//     super.add();
//     console.log("Last Method");
//   }
// }
// var ob = new firstClass();
// var ob2 = new secondClass();
// var ob3 = new thirdClass();
// ob.add();
// ob2.add();
// ob3.add();

// let a;
// let s = null;

// const o = () => (a === s ? console.log("yes") : console.log("on"));

// o()
// console.log(typeof(null))

// const randomNumbers = [4, 11, 42, 14, 39];
// const filteredArray = randomNumbers.filter((n) => {
//   return n > 5;
// });

// console.log(filteredArray)

// const Name = [
//   "kareem",
//   "kamel",
//   "reem",
//   "ramadan",
//   "samer",
//   "salam",
//   "Marawn",
//   "Ahamed",
// ];

// const serech = (l) => {
//   const filterName = Name.filter((n) => {
//     return n == l;
//   });
// };

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

// let newUser = [...users].sort((a, b) => {
//   const nameA = a.first_name;
//   const nameB = b.first_name;

//   if (nameA < nameB) {
//     return -1;
//   }
//   if (nameA > nameB) {
//     return 1;
//   }

//   return 0;
// });
// console.log(newUser);

// const users2 = userw.find((a, b) => a.first_name == b.first_name);
// console.log(users);
// console.log(newUser);

// const months = ["March", "Jan", "Feb", "Dec"];
// const anoher = [...months].sort();
// console.log(months);
// console.log(anoher);

// Sorting with for

// let output = [];
// let inserted;
// for (var i = 0; i < users.length; i++) {
//   inserted = false;

//   for (var j = 0; j < output.length; j++) {
//     if (input[i] < output[j]) {
//       inserted = true;

//       output.splice(j, 0, input[i]);

//       break;
//     }
//   }
//   if (!inserted) output.push(input[i]);
// }

// console.log(output);

// var input = [
//   { Fname: "Jan", age: 16 },
//   { Fname: "Reem", age: 30 },
//   { Fname: "Ali", age: 66 },
//   { Fname: "March", age: 20 },
//   { Fname: "Ahamed", age: 25 },
// ];

// const array = [12, 3, 45, 61, 23, 45, 6, 7];

// function sortArray(array) {
//   for (var i = 0; i < array.length; ++i) {
//     for (var j = 0; j < array.length - 1 - i; ++j) {
//       if (array[j] > array[j + 1]) {
//         [array[j], array[j + 1]] = [array[j + 1], array[j]];
//       }
//     }
//   }
//   return array;
// }

// console.log(sortArray(users));

// let num = [1, 44, 56, 2, 9, 8];
// let num_1 = [1, 2, 3, 4, 5, 6];
// num.map((item, index) => {
//   let x = 0;
//   num_1.map((i) => {
//     x += item * i;
//   });
//   console.log(`x -> ${x} with ${item}* num_1`);
// });

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
  { Fname: "Kemos", ages: 32 },
  "test",
  true,
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
/**
 *
 * {
 * 19 : [
 * {...},
 * {...}],
 * 22 : [
 * {...}]
 * }
 */

const Users = {};

// Function For Sorting Array of Objects

// const Sorting = (sorting) => {
// const sorting = [...FName].sort((a, b) => {
//   if (a < b) {
//     return -1;
//   }
//   if (a > b) {
//     return 1;
//   }
//   return 0;
// });

console.log(FName);

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

input.map((item) => {
  const age = item.age || 0;
  Users[age] = [...(Users[age] || []), item];
});

// This funcation You Can Do Sorting  By Fname and Age
// const Sorting = (sorting) =>
//   [...sorting].sort((a, b) => {
//     if (a.Fname < b.Fname) {
//       return -1;
//     }
//     if (a.Fname > b.Fname) {
//       return 1;
//     }
//     return 0;
//   });
// input.map((item) => {
//   const age = item.age || 0;
//   Users[age] = Sorting([...(Users[age] || []), item]);
// });
// console.log(Users);
