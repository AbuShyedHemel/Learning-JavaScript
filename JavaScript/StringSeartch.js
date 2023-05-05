function StringSearch(){
let a = "Please Come Here, Please"
let b = a.indexOf("Please")
let c = a.lastIndexOf("Please");
let d = a.indexOf("Please",7)
let e = a.lastIndexOf("Please", 7)
const f = a.match(/ea/g)//g = global and gi=global caseinsensitive
let g =  Array.from(a.matchAll(/Please/gi))
let h = a.includes("Please",7)
let i = a.startsWith("Please",7)
let j = a.endsWith("Please")
document.getElementById("demo").innerHTML=j;
}
