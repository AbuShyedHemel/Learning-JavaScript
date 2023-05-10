function whileLoop() {
  let text = "";
  let text2 = "";
  let i = 0;
  let j = 0;
  while (i < 10) {
    text += "<br>The number is " + i;
    i++;
  }
  do {
    text2 += "<br>I am from do while loop No. " + j;
    j++;
  } while (j < 5);

  document.getElementById("demo").innerHTML = text2;
  console.log(text);
}
