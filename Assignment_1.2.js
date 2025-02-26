const _ = require('lodash');

const members = [
  { name: 'Aman Makhija', age: 20 },
  { name: 'Suresh Jsharma', age: 40 },
  { name: 'Vijay Sahu', age: 41 },
  { name: 'Rakesh Srivastava', age: 17 },
  { name: 'Chandraprakash Sharma' },
  { name: 'Swpril Ahuja', age: 45 },
  { name: 'Yogesh Khatri', age: 51 }
];

console.log(" 1. Get array of first names of everyone \n")

let first_name = _.map(members, (m) => _.head(_.split(m.name, " ")));
console.log(first_name)

console.log("2. Make everyone's last names in UPPERCASE in given array of objects\n")


console.log("3. Get entries where age is between 41-60\n")

console.log(_.filter(members, (val) => _.inRange(val.age, 41, 61)));

console.log("4. Get average age\n")

let ans = _.filter(members, (val) => val.age !== undefined);
let avg_age = _.meanBy(ans, (val) => val.age);
console.log(avg_age)

console.log("5. Get Person with maximum age")

console.log(_.maxBy(members, (val) => val.age));
// // console.log("6. Divide persons in three groups, result should look like 

// //       'young': [],
// //       'old': [],
// //       'noage': [],

// //     Less than 35yrs is young, above 35 is old")

// const obj = {

// }

_.groupBy(members, (val) => {
  if (!_.has(val.age)) return 'noage';
  return val.age < 35 ? 'young' : 'old';
})

console.log("7. add a new member to same members array instance at index 2")



console.log("8. extract first and second element using destructing")

let first_element = _.head(members)
let second_element = _.nth(members, 1)
console.log(first_element)
console.log(second_element)

console.log("9. Create a new array instance adding a new member at index 0,and keeping existing afterwards")

let arr = [{ name: "Jaya Chhabra", age: 48 }]
let new_arr = _.concat(arr, members)
console.log(new_arr)

console.log("10. Extract properties of object using destructuring")


console.log("11. Rename extracted property of object while destructing")



console.log("12. Destructure any property of an object and use spread operator to get remaining properties in an object")



console.log("13. Create a new object by copying using spread operator, override one of the properties to assign a new value in the same step")


console.log("14. Use reduce function on array and object")

let prices = [20, 65, 42, 89, 12]
console.log(_.reduce(prices, (h1, h2) => h1 + h2, 0))

console.log(_.reduce(members, (prev, next) => {
  console.log({prev,next})
  if(next.age) {
    prev = prev + next.age;
  }
  return prev
}, 0));
