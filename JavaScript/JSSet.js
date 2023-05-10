function mySet() {
  const letters = new Set(["a", "b", "c"]);

  // List all Elements
  let text = "f";
  letters.forEach(function (value) {
    text = text + value + "<br>";
  });
  document.getElementById("demo").innerHTML = text;
}
