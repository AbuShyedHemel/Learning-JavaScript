let number = [4, 60, 40, 4, 5];
function myFunction(value, index, arr) {
  // console.log(value);
  // console.log(index);
  // console.log(arr)
  // console.log("..............")
  // return value > 6;
  //console.log(total)
  // console.log(total)
  // console.log(".......")
  // return total+value
  let fruits = ["Apple", "Banana"];
  let newIndex = fruits.indexOf("Apple") + 1;
  let newInclude = fruits.includes("Apple");
  
  //document.getElementById("demo").innerHTML=newInclude
  return value > 18;
  //return value > 18;
}
//let newForeach = number.forEach(myFunction)
// let newmap = number.map(myFunction)
// let newFilter = number.filter(myFunction)
//let newReduce = number.reduce(myFunction,2)
//let newEvery = number.every(myFunction); ///check every array element
//let newSome = number.some(myFunction); ///check every array element
// let newSome = number.some(myFunction); ///check every array element
// //and need every value to be true so that the expression is true
let newFind = number.find(myFunction); ///find the 1st correct value from array
let newFindIndex = number.findIndex(myFunction); ///find the 1st correct value from array

console.log(newFindIndex);
console.log(typeof Array.from("ABC"));
