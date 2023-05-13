function myErrHandler(){
    try{
        all("Hi There")
    }catch(err){
        document.getElementById("demo").innerHTML=err.name
    }

    let value = 10

    try {
        if(value<5) throw "Value is too low"
        if (value>5) throw "Value is too hi gh"
    }catch(err){
        document.getElementById("demo").innerHTML=err
    }
}