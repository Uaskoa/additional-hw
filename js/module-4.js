// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// console.log(getWage(baseSalary, overtime, rate));


// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// employee.getWage();
// console.log(employee.getWage());

// const Hotel = function (name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
// };

// // В результате вызова
// const hotel = new Hotel('Resort Hotel', 5, 100);
// // Получаем такой объект
// console.log(hotel);
// // Hotel {name: "Resort Hotel", stars: 5, capacity: 100}


// const Manager = function (name = 'manager', sales = 0) {
//   this.name = name;
//   this.sales = sales;

//   this.sell = function (product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}.`;
//   };
// };

// const mango = new Manager('', 5);
// console.log(mango.sales); // 5
// console.log(mango.sell('TV')); // Manager Mango sold TV
// console.log(mango.sell('Microwave')); // Manager Mango sold Microwave
// console.log(mango.sales); // 7

// const poly = new Manager('Poly', 10);
// console.log(poly.sales); // 10
// console.log(poly.sell('TV')); // Manager Poly sold TV
// console.log(poly.sell('Microwave')); // Manager Poly sold Microwave
// console.log(poly.sales); // 12


// function likes(names) {

// for(const name of names){
//   if (names.length === 1) {
//     return `${name} likes this`;
//   }
//    if (names.length === 2) {
//      return `${names[0]} and ${names[1]} like this`;
//   }
  
//   if (names.length === 3) {
//     return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//   }

//    if (names.length === 4) {
//     return `${names[0]}, ${names[1]} and 2 others like this`;
//   }
 
//   if (names.length >=5) {
//     return `${names[0]}, ${names[1]} and ${names.length -2} others like this`;
//   }

//   }
//   return "no one likes this";

// } 

// console.log(likes([]));
// console.log(likes(['Peter']));
// console.log(likes(["Jacob", "Alex"]));
// console.log(likes(["Max", "John", "Mark"]));
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
// console.log(likes(["Alex", "Jacob", "Mark", "Max", "Maxim"]));


function highAndLow(numbers) {
 
  console.log(typeof numbers)

  console.log (Number.parseInt(numbers));
  for (const number of numbers) {
    console.log(typeof number);
    console.log(Number.parseInt(number));
  }

}
  console.log((highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")));

