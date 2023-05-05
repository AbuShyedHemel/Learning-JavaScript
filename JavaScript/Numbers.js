function Numbers() {
  let a = 32;
  let b = 20;
  let c = a + b;
  let d = "The number is :" + a + b; //1020
  let e = a + b + " is a Good Number"; //30
  let f = "5";
  let g = a * f; //50
  let h = a / f; //2
  let i = a - f; //5
  let j = 10 / "Apple";//NaN
  let k = NaN;
  let l = isNaN(k - 5);//true
  let m = k + "5";//NaN5
  let n = 2 / 0;
  let o = -2 / 0; ///value -infinity
  let p = Infinity //type number
  let q = a.toString(2)//binary value
  let r = new Number(32)//type object
  document.getElementById("demo").innerHTML = a === r;
}
