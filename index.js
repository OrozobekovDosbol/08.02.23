// function num(a) {
//   if(a % 2 === 0) {
//     console.log("chot")
//   }
//   else{
//     console.log("nechot")
//   }
// }

// num(6);

function numbers(a, b) {
  for(let i = a; i <= b; i++){
    console.log(i)
  }
}
// number(3, 9)

function number(a, b) {
  for(let i = b; i >= a; i--){
    console.log(i)
  }
}

// number(3, 8)

function num(a, b) {
  if (a > b) {
    number(a, b);
  }
  else {
    numbers(a, b)
  }
}

num(9, 0)

// let massa = [
//   "Bakyt",
//   "Joldos",
//   "Aijan",
//   "Amir"
// ]
// // console.log(massa);

// for (let massa.toLowerCase) {
//   console.log("Hello, my name is " + massa[i]);
// }

let Name = ["Name 1", "name 2", "Name 3"]

// for (let i = 0; i < names.toLowerCase; i++) {
//   let name = names[i];
//   console.log(name.toLowerCase);
// }

// for (let i = 0; i < 5; i++) {
//   let names = Name[i];
//   console.log(names.toUpperCase())
// }


// let total = 0;
// for (let i = 0; i < nums.length; i++) {
//   let num = nums[i];
// }

let numss = [55, 41, 245, 111, 351];
arrays(numss)
function arrays(numss) {
  let result = 0
  for (let i = 0; i < numss.length; i++) {
    result = result + numss[i];
  }
  console.log(result)
}

function newArray(str, num) {
  let result = [];
  for (let i = 0; i < num; i++) {
    result.push(str);
  }
  console.log(result);
}

newArray("a", 3);
newArray("b", 5);
newArray("Karakol", 2);

function reverse(arr) {
  let example = ["a", "b", "c"]
  for(let i = b; i >= a; i--){
    console.log(i)
  }
}