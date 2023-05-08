function randomNumber(){
    let random1 = Math.random()
    let a = Math.floor(Math.random() * 10);// Returns a random integer from 0 to 9:
    let b = Math.floor(Math.random() * 11);// Returns a random integer from 0 to 10:
    let c = Math.floor(Math.random() * 100);// Returns a random integer from 0 to 99:
    let d = Math.floor(Math.random() * 100)+1;// Returns a random integer from 0 to 100:
    document.getElementById("demo").innerHTML = b
}