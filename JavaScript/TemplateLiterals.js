function TempleLiterals(){
    let a = `"Hellow"`;
    let b = `World`
    let c = `${a} ${b}`
    let d = 5
    let e = 6
    let f = `${d+e}`
    document.getElementById("demo").innerHTML=f;
}