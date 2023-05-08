function loopForIn() {
  let person = {
    name: "Hemel",
    height: 5.3,
    age: 25,
  };
  txt = "";
  for (x in person) {
    txt += person[x]+" ";
  }
  document.getElementById("demo").innerHTML = txt;
}
