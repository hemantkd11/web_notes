// let fruits = [[1, 2], [3, 4], 5];
// let veg = ["tomato", "potato", "redish"];
// let grocery = [...fruits, ...veg];
// console.log(grocery);
// console.log(String(grocery));

// fruits.splice(1, 1, "mango", "pineapple");
// console.log(fruits); // ['apple', 'mango', 'pineapple']

// let Hemant = { name: "hemant", age: 23 };
// let newHemanrt = [1, 2, 3, 4];
// console.log("fruits keys", newHemanrt.has(key));

// function Num(num) {
//   return num;
// }
// function newfnc(callback, a) {
//   return callback * a;
// }
// console.log(newfnc(Num(2), 4));

// state ={
//     value:1
//    }
//    componentDIdMount(){
//        console.log("mounted")
//        this.setState((prevState)=>{
//            return {value:prevState.value+1}
//        })
//        this.setState((prevState)=>{
//            return {value:prevState.value+1}
//        })
//    }
//    render(){
//        console.log("Rendered")
//        return(
//            <div>
//                Hi
//            </div>
//        )
//    }

let Student = {
  firstname: "jonaThan",
  lastName: "doe",
};
delete Student.firstname;
console.log(Student.firstname);

let num = 3;
if (num > 0) {
  console.log("Positice Number");
} else if (num < 0) {
  console.log("negative number");
} else {
  console.log("Zero");
}

let isLoggedIn = false;

console.log(!isLoggedIn ? "Welcome" : "Please log in.");
console.log(num % 2 == 0 ? "evem" : "odd");

let passworn = "secret";
let userInput;
while (userInput !== passworn) {
  userInput = "secret";
}

console.log("Assess granted");

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}

// let facNum = 4;
// for (let i = 1; i <= facNum; i++) {
//   let factorial = reduce((a, b) > a * i, 1);
//   return factorial;
// }

// console.log(factorial);

let newHemanrt = [1, 2, 3, 4];
let keys = newHemanrt.keys();
for (let keys of newHemanrt) {
  console.log(keys);
}

function person(name, age) {
  this.name = name;
  this.age = age;
}
const props = ["hemant", 26];
const jhone = new person(...props);
console.log(jhone.name);

let a = [{ name: "j" }, 2, 3, 4, 5];
let b = a.slice();
b[0] = "hemant";
b[4] = 6;
console.log(a[4]);
