function ArrayMethod(){
    let person = ["hemel", "Moni","Medha"]
    let car = ["Volvo", "Honda"]
    let a = person.toString();
    let b = person.join("+")
    person.pop()
//let c = person.push("Runa")
    // person.shift()
    // person.unshift("Wohab")
    let d = person.concat(car)
    let e = [[1,2],[3,4],[3,5]]
    let f = e.flat()
    let g = car.splice(1,1,"Suzuki","BMW") 
    //let h = person.splice(1,1)
    let i = person.slice(1,2)
    document.getElementById("demo").innerHTML=i
    
}