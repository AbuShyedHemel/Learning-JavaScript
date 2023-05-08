function getDates(){
    let newDate = new Date()
    let getYear = newDate.getFullYear()
    let getDate = newDate.getDate()
    let getMonth = newDate.getMonth()
    let setYear = newDate.setFullYear(2022)
    document.getElementById("demo").innerHTML=newDate
}