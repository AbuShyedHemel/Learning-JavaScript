function StringFetch(){
    let x = "Abu \"Shyed\" Hemel"
    let y = "It\'s Abu Shyed \n Hemel"
    let a = new String("Hemel")
    var b = "Hemel"
    // document.getElementById("demo").innerHTML = typeof a+ "<br>" + typeof y+"<br>"+a;
    document.getElementById("demo").innerHTML =a==b;//only checking value but not checking type
    //document.getElementById("demo").innerHTML = a===b; checking both
    //object can not compare with (==) or (===)
}