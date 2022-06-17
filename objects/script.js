const gabriele = {
  firstName: "Gabriele",
  secondName: "Sozzi",
  birthYear: 1991,
  calcAge: (birthYear) => {
    return 2022 - birthYear;
  },
  getSummary: function () {
    return `Hi, my name is ${this.firstName} ${
      this.secondName
    }. I was born in ${this.birthYear} and I'm ${this.calcAge(
      this.birthYear
    )} years old.`;
  },
};

console.log(gabriele.getSummary());

console.log(gabriele.firstName);

console.log(gabriele.height);
gabriele.height = "175 cm";
console.log(gabriele.height);

console.log(gabriele.getSummary() + " " + `I'm ${gabriele.height} tall.`);

const car = {
  brand: "citroen",
  type: "c3",
  color: "black",
  parking: function () {
    return `Now the car is parked`;
  },
  go: function () {
    return `${this.brand} ${this.type} is now ready to go!`;
  },
};

console.log(car.type);
car.type = "c5 aircross";
car.color = "white";
console.table(car);

console.log(car.go(), car.parking());

car.stop = function () {
  return `Stop the car at the red light.`;
};

console.table(car);

console.log(car.stop());
