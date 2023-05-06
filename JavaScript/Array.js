function newArray(){{
    const cars = ["Volvo", "Honda", "BMW"];
    const person = {firstName:"John", lastName:"Doe", age:46};
    cars.push("Suzuki");
    const array = new Array("Volvo", "Honda", "BMW")
    function myfunction(value){
        console.log(value)
    }
    const a = typeof cars;///returns object but its a array
    const b = Array.isArray(cars)///true
    const c = cars instanceof Array

    document.getElementById("demo").innerHTML=c;
}}