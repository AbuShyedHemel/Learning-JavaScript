function myMap(){
    let fruits = new Map([
        ["apple",500],
        ["banana",600],
        ["Lichi",100]
    ])
    let person = new Map();
    person.set("Hemel",5.3)
    person.delete("Hemel")//delete element from map
    let hasfunction = fruits.has("banana")//return true if the existing element is there

    text = "";
    fruits.forEach(function(key,value){
        text += value+" = "+key +"<br>"
    })
    text2=""
    for(const x of fruits.entries()){
        text2 +=x+"<br>";
    }



    document.getElementById("demo").innerHTML = text2
}