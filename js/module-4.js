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

///////////////////////////////////////////////////////////////////////////
// function order(words) {
//   const array = words.split(" ");
//   let revisedArray = [];
//   console.log(array);

//     for (let i = 1; i <= 9; i++) {
//              for (const item of array) {
//                if (item.includes(i)) {
//                  revisedArray.splice(i - 1, 0, item);
//                  console.log(revisedArray);
//                }
//              }
//     }
//     return revisedArray.join(' ')
// }

// console.log(order("is2 Thi1s T4est 3a"));
// console.log(order("4of Fo1r pe6ople g3ood th5e the2"))

// ///////////////////////////////////////////////////////////////////
// function findUniq(arr) {
//   let uniqueNum = arr[0];
//   for (let i = 1; i < arr.length; i += 1) {
//     if (arr[i] !== arr[0] && arr[i] !== arr[i + 1]) {
//       return (uniqueNum = arr[i]);
//     }
//   }
//   return (uniqueNum = arr[0]);
// }

// function findUniq(arr) {
//   let uniqueNum = arr[0];
//   for (let i = 1; i < arr.length; i += 1) {

//     if (
//       arr[i] === arr[arr.length - 1] &&
//       arr[i] !== arr[i - 1] &&
//       arr[i] !== arr[i - 2]
//     ) {
//       uniqueNum = arr[i];
//       break;
//     }
    
//     if (arr[i] !== arr[i-1] && arr[i] !== arr[i + 1]) {
//       uniqueNum = arr[i];
//       break;
      

//     }
//   }
//   return uniqueNum;
// }

// console.log(findUniq([0, 1, 0]));
// console.log(findUniq([1, 1, 1, 2, 1, 1]));
// console.log(findUniq([3, 10, 3, 3, 3]));
// console.log(findUniq([3, 3, 3, 3, 9]));
// console.log(findUniq([3, 3, 3, 4, 3]));
// console.log(findUniq([10, 3, 3, 3, 3]));


/////////////////////////// No 3 //////////////////////////////

// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// makePizza("Роял гранд", function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });
// // Пиши код ниже этой строки

// makePizza("Ультрасыр", function eatPizza(pizzaName) {
//   console.log(`Едим пиццу ${pizzaName}`);
// });




/////////////////////////// No 4 //////////////////////////////

// const pizzaPalace = {
//   pizzas: ["Ультрасыр", "Аль Копчино", "Четыре нарезона"],
//   order(pizzaName, onSuccess, onError) {
//     //pizzaName = 
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     }
//     return onOrderError(pizzaName);
//   },
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! В ассортименте нет пиццы с названием ${error}.`;
// }

// Вызовы метода с колбэками
// pizzaPalace.order("Аль Копчино", makePizza, onOrderError);
// pizzaPalace.order("Четыре нарезона", makePizza, onOrderError);
// pizzaPalace.order("Биг майк", makePizza, onOrderError);
// pizzaPalace.order("Венская", makePizza, onOrderError);

// console.log(pizzaPalace.order("Аль Копчино", makePizza, onOrderError));
// console.log(pizzaPalace.order("Четыре нарезона", makePizza, onOrderError));
// console.log(pizzaPalace.order("Биг майк", makePizza, onOrderError));
// console.log(pizzaPalace.order("Венская", makePizza, onOrderError));


/////////////////////////// No 5 //////////////////////////////

// const pizzaPalace = {
//   pizzas: ["Ультрасыр", "Аль Копчино", "Четыре нарезона"],
//   // Пиши код ниже этой строки
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `В ассортименте нет пиццы с названием «${pizzaName}».`;
//     }

//     return `Заказ принят, готовим пиццу «${pizzaName}».`;
//   },
//   // Пиши код выше этой строки
// };

// console.log(pizzaPalace.order("Аль Копчино"));
// console.log(pizzaPalace.order("Четыре нарезона"));
// console.log(pizzaPalace.order("Биг майк"));
// console.log(pizzaPalace.order("Венская"));


/////////////////////////// No 6 //////////////////////////////

// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
//   // Пиши код ниже этой строки
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Пиши код выше этой строки
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']

/////////////////////////// No 7 //////////////////////////////
const orders = [
  { email: "solomon@topmail.ua", dish: "Burger" },
  { email: "artemis@coldmail.net", dish: "Pizza" },
  { email: "jacob@mail.com", dish: "Taco" },
];

// Пиши код ниже этой строки
// function composeMessage(position) {

  
//   for (const order of orders) {
//      if (position === orders.indexOf(order) - 1) {
      
    
//    }
//   }
//         return `Готовим ${this[position - 1].dish} 
//      для ${this[position - 1].email}. 
//   Ваш заказ ${position}-й в очереди.`;
// }

// const messages = orders.map((order, position) => composeMessage.call(order, position -=1));


// const messages = orders.map((order, index) =>
//   composeMessage.call(order, (index += 1))
// );


function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
}


const messages = orders.map((order, index) =>
  composeMessage.call(order, (index += 1))
);

console.log(messages);

console.log(composeMessage.call(orders, 2));
// console.log(messages);




// const getUsersWithGender = (users, gender) =>
//   users
//     .filter((user) => {
//       if (user.gender === gender) {
//         return user;
//       }
//     })
//     .map((user) => user.name);