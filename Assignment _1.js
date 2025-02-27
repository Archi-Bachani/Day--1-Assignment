const { last, forEach } = require("lodash");

const members = [
    {name: 'Aman Makhija', age: 20},
    {name: 'Suresh Jsharma', age: 40},
    {name: 'Vijay Sahu', age: 41},
    {name: 'Rakesh Srivastava', age: 17},
    {name: 'Chandraprakash Sharma'},
    {name: 'Swpril Ahuja', age: 45},
    {name: 'Yogesh Khatri', age: 51}
  ];

  
console.log(" 1. Get array of first names of everyone \n")
let names = members.map((val) => val.name)
//console.log(names)
let first_names = (names.map((val) => val.split(" ")[0]));
console.log(first_names)

console.log("2. Make everyone's last names in UPPERCASE in given array of objects\n")

console.log(names[names.length - 1])
console.log(names.map((val) => {
  let parts = val.split(" ");
  parts[parts.length -1]= parts[parts.length -1].toUpperCase();
  return parts.join(" ")

}
));

console.log("3. Get entries where age is between 41-60\n")

let new_age = members.filter((val) => {
    if(val.age > 40 && val.age < 60){
      return val
    }
})
console.log(new_age)

console.log("4. Get average age\n")

 console.log(members.reduce((prev,next) => {
if(next.age){
prev = prev + next.age;}
  //console.log(prev);
  return prev
  
},0)/members.length);

console.log("5. Get Person with maximum age")

console.log(members.reduce(( max_person , current_person) => {
  return (current_person.age > max_person.age) ? current_person : max_person;
}).name);

// console.log("6. Divide persons in three groups, result should look like 
    
//       'young': [],
//       'old': [],
//       'noage': [],
    
//     Less than 35yrs is young, above 35 is old")
    
const obj = {
  
}

console.log(members.reduce((obj,person) => {
   if(person.age < 35 ){
        obj.young.push(person)  
   }
   else if(person.age > 35)
   {
    obj.old.push(person)
   }
   else{
    obj.noage.push(person)
   }

   return obj;
  },{young : [],old : [],noage: []}));    


console.log("7. add a new member to same members array instance at index 2")

members.splice(1, 0 , {name: "Rachit Sharma", age: 18});
console.log(members);

console.log("8. extract first and second element using destructing")

let [first , second ] = members
console.log(first,second)

console.log("9. Create a new array instance adding a new member at index 0,and keeping existing afterwards")  

let arr = [{name : "Jaya Chhabra", age: 48},...members]
console.log(arr)

console.log("10. Extract properties of object using destructuring")

let first_obj = members[0]
let {name, age} = first_obj
//{name:name, age:age}
console.log(name, age)

console.log("11. Rename extracted property of object while destructing")

let rename = members[0]
let {name: new_name, age: to_age} = first_obj
console.log(new_name)

console.log("12. Destructure any property of an object and use spread operator to get remaining properties in an object")

let obje = members[0]
let {name : first_name ,...remaining} = obje
console.log(remaining)

console.log("13. Create a new object by copying using spread operator, override one of the properties to assign a new value in the same step")
 

let new_object = {...obje , age: 19};
console.log(new_object);

console.log("14. Use reduce function on array and object")

let prices = [20,65,42,89,12]
console.log(prices.reduce((h1,h2) => {
  return h1 + h2;

},0));

console.log(members.reduce((previous , current ) => {
  if(current.age){
  previous = previous + current.age;}
  return previous
},0));


