function myLoop() {
    const fruits = ["Apple", "Banana"]
  let value = "";
  for (let i = 0; i <= 5; i++) {
    value += i +"<br>";
  }
  document.getElementById("demo").innerHTML = value;
}
