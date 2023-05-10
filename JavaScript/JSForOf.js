function forOf(){
    let language = "JavaScript"
    text=""
    for(let x of language){
        text+=x
    }
    document.getElementById("demo").innerHTML=text
}