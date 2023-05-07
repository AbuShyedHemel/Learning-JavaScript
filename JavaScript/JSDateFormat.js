function DateFormat(){
    let msec = Date.parse("May 8, 2023");
    let a = new Date(msec)
    document.getElementById("demo").innerHTML= a
}