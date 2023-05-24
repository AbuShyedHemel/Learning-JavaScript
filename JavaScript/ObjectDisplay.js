const person = {
    firstName : "Abu Shyed",
    lastName : "Hemel"
}

//const myArr = Object.values(person)
const myArr = JSON.stringify(person)
console.log("The Array is "+ myArr)