///////////////////////////No 13

// const apartment = {
//   descr: "Просторная квартира в центре",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);


// for (const key of keys) {
//   console.log(apartment[key]);
//   values.push(apartment[key]);
// }
// console.log(values);


////////////////////////////////////////////////////////////////////No14
// function countProps(object) {
//   // Пиши код ниже этой строки
//   let propCount = 0;

//   const keys =  Object.keys(object)
//   for (const key of keys) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

// let propCount = Object.keys(object).length;
// return propCount;

//   return propCount;
//   // Пиши код выше этой строки
// }

// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
// Задача. Подсчёт свойств 2.0
// Задание
// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и
// , возможно, цикл for...of.

// Тесты
// Объявлена функция countProps(object).
// Вызов countProps({}) возвращает 0.
// Вызов countProps({ name: 'Mango', age: 2 }) возвращает 2.
// Вызов countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })
// возвращает 3.
// Функция подсчитывает только собственные свойства объекта.
// Функция использует метод Object.keys() и, возможно, цикл for...of.

// No16

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Пиши код ниже этой строки

//     const salariesValue = Object.values(salaries);
//     console.log(salariesValue);

//   for (const salaryValue of salariesValue) {
//     totalSalary += salaryValue;
//   }
//   // Пиши код выше этой строки
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// No 17

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки

// for (const color of colors) {

//     hexColors.push(color.hex)
//     rgbColors.push(color.rgb)

// }

// console.log(hexColors);
// console.log(rgbColors);

// No 18
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     if (productName === product.name) {
//       return product.price;
//     }
//   }
//   return null;
// }

// console.log(getProductPrice("Захват"));

// No 19
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки
//   const propValues = []

//   for (const product of products) {

//     if (product[propName]) {
//       propValues.push(product[propName])

//     }
//   }

//   return propValues
//   // Пиши код выше этой строки
// }

// console.log(getAllPropValues("name"));

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// console.log(highIcon);

// No 26
// // Пиши код ниже этой строки
// function calculateMeanTemperature(forecast) {

//   const { today: {low: todayLow, high: todayHigh} , tomorrow: {low: tomorrowLow, high: tomorrowHigh }, } = forecast

//   // Пиши код выше этой строки
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// calculateMeanTemperature({
//   today: { low: 28, high: 32 },
//   tomorrow: { low: 25, high: 29 },
// });

// No 30

// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
//   // Пиши код ниже этой строки
//   const newObject = {
//     category: "Общее",
//     priority: "Обычный",
//     ...data,
//     completed: false,
//   };
// return newObject;
//   // Пиши код выше этой строки
// }

// console.log(makeTask({}))
// console.log(makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' }))

// No 31

// // Пиши код ниже этой строки
// function add(...args) {
//   let total = 0;

//   for (const arg of args) {
//   total += arg
//   }
//   // Пиши код выше этой строки
//   return total
// }

// console.log(add(12, 4, 11, 48))

// No 32

// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstNumber){
//     total += arg;}
//   }

//   return total;
//   // Пиши код выше этой строки
// }

// No 33
// function findMatches(arr, ...string) {
//   const matches = []; // Не изменяй эту строку

//   for (const item of string) {

//   if (arr.includes(item)) {

//     matches.push(item)
//     }
//     }
//   // Пиши код выше этой строки
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

// No34
// const bookShelf = {
//   // Пиши код ниже этой строки
//   books: ["Последнее королевство", "Страж снов"],
//   getBooks() {
//     return "Возвращаем все книги";
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },

//   removeBook(bookName) {
//     return `Удаляем книгу ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Обновляем книгу ${oldName} на ${newName}`;
//   },
//   // Пиши код выше этой строки
// };

// console.log(bookShelf.updateBook("Пески Дюны", "Дюна"));
// console.log(bookShelf.addBook("Мгла"));

// No35

// const bookShelf = {
//   books: ["Последнее королевство", "Мгла", "Страж снов"],
//   updateBook(oldName, newName) {
//     // Пиши код ниже этой строки

//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
//     // Пиши код выше этой строки
//   },
// };

// No36
// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: [],
//   // Пиши код выше этой строки
// };

// No 37

// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   getPotions(){
//   return this.potions
//   }

//   // Пиши код выше этой строки
// };

// No 38
// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   addPotion(potionName) {
//     // Пиши код ниже этой строки
//     return this.potions.push(potionName)
//     // Пиши код выше этой строки
//   },
// };

// No 39

// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   removePotion(potionName) {
//     // Пиши код ниже этой строки
//     const potionIndex = this.potions.indexOf(potionName);
//      return this.potions.splice(potionIndex, 1)
//     // Пиши код выше этой строки
//   },
// };

// No40

// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//   updatePotionName(oldName, newName) {
//     // Пиши код ниже этой строки
//     const potionIndex = this.potions.indexOf(oldName);
//     return this.potions.splice(potionIndex, 1, newName);
//     // Пиши код выше этой строки
//   },
// };

// No41

const atTheOldToad = {
  potions: [
    { name: "Зелье скорости", price: 460 },
    { name: "Дыхание дракона", price: 780 },
    { name: "Каменная кожа", price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    for (const potion of this.potions) {
      if (potion.name === potionName.name) {
        return `Зелье ${potionName.name} уже есть в инвентаре!`;
      }
    }

    this.potions.push(potionName);
    
  },

  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);
    console.log(potionIndex);
    for (const potion of this.potions) {
      console.log(potion)
       console.log(this.potions.indexOf(potion));
      if (potionIndex === -1 ) {
        return `Зелья ${potionName} нет в инвентаре!`;
      }
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Зелья ${oldName} нет в инвентаре!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Пиши код выше этой строки
};

console.log(atTheOldToad.getPotions());
atTheOldToad.addPotion({ name: "Невидимка", price: 620 });
console.log(atTheOldToad.getPotions());
atTheOldToad.removePotion("Дыхание дракона");
console.log(atTheOldToad.getPotions());