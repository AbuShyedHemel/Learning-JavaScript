function myCondition()
{
    let newHour = new Date().getHours();
    if(newHour<11)
    {
        document.getElementById("demo").innerHTML = "Good Morning"
    
    }else if(newHour<20)
    {
        document.getElementById("demo").innerHTML = "Good evening"
    }else{
        document.getElementById("demo").innerHTML = "Good Night"
    }
    switch (new Date().getDay()) {
        case 0:
            document.getElementById("demo").innerHTML  = "Sunday";
          break;
        case 1:
            document.getElementById("demo").innerHTML  = "Monday";
          break;
        case 2:
            document.getElementById("demo").innerHTML = "Tuesday";
          break;
        case 3:
            document.getElementById("demo").innerHTML = "Wednesday";
          break;
        case 4:
            document.getElementById("demo").innerHTML = "Thursday";
          break;
        case 5:
            document.getElementById("demo").innerHTML = "Friday";
          break;
        default:
            document.getElementById("demo").innerHTML = "Saturday";
      }

}