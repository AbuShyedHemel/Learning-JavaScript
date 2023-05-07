function ArraySort(arr){
 let fruits = ["Banana", "Apple", "Pineaple"]
 let a = fruits.sort()
 let b = fruits.reverse()
 let number = [24,56,2,10,1]
 let c = number.sort(function(a,b) {return a-b})
 const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
  cars.sort(function(a,b){return a.year - b.year})
 document.getElementById("demo").innerHTML=cars
}