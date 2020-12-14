// No 13

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

// function countProps(object) {
//   // Пиши код ниже этой строки
//   let propCount = 0;

//   const keys =  Object.keys(object)
//   for (const key of keys) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

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
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Пиши код ниже этой строки
  const propValues = []
  
  for (const product of products) {
    
    if (product[propName]) { 
      propValues.push(product[propName])


    }
  }
  
  return propValues
  // Пиши код выше этой строки
}


console.log(getAllPropValues("name"));