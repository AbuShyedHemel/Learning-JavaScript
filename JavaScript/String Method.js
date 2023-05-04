function StringMethod(){
    let x = 'AbuShyed';
    let con = "Hemel"
    let added = x.concat(" ", con)///concatinate another string

    let characters = "abcd"
    let myarray = characters.split("")
    console.log(myarray)
    let cahrPoss = x.charAt(0);
    const cahrPoss2 = x.charCodeAt(0);
    y = x.slice(-4,-1);
    a = x.substring(1,3);
    b = x.substr(-2)
    c = document.getElementById('demo').innerHTML;
    let d = "I love honda. Honda is a good brand from honda"
    d =x.replaceAll('honda', 'toyota');
    d =x.replaceAll('Honda', 'Toyota');////replace honda to toyota

    document.getElementById('tag1').innerHTML=typeof myarray +" "+ typeof characters
    document.getElementById('demo').innerHTML=c.replace(/There/g, "Hemel");
    // document.getElementById('demo').innerHTML= myarray
}