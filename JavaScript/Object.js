const person = {
  firstName: "Abu Shyed",
  lastName: "Hemel",
  hieght: 5.3,
  start: function () {
    console.log("Car Has Started");
  },
  drive: function () {
    return alert(this.firstName + " " + this.lastName);
  },
};
