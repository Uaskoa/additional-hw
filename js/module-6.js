//////////////////////////////// №1 ////////////////////////

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки

//   orderedItems.forEach((item) => (totalPrice += item));

//   // Пиши код выше этой строки
//   return totalPrice;
// }

//////////////////////////////// №2 ////////////////////////

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Пиши код ниже этой строки

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Пиши код выше этой строки
//   return filteredNumbers;
// }

//////////////////////////////// №3 ////////////////////////

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки

//     firstArray.forEach(function (number) {
//         if (secondArray.includes(number)) {
//             commonElements.push(number)
//         }
//     })

//     return commonElements;
//     // Пиши код выше этой строки
//   }

//////////////////////////////// №4 ////////////////////////

// Пиши код ниже этой строки

// function calculateTotalPrice(quantity, pricePerItem) {
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// }

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

//////////////////////////////// №5 ////////////////////////

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

//////////////////////////////// №6 ////////////////////////

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };

//////////////////////////////// №7 ////////////////////////

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// };

//////////////////////////////// №8 ////////////////////////

// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];

//     firstArray.forEach((element) => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });

//     return commonElements;
// }

//////////////////////////////// №9 ////////////////////////

// function changeEven(numbers, value) {

//     const newArray = [];

//     numbers.forEach((number) => {
//         number % 2 === 0 ? newArray.push(number + value) : newArray.push(number)
//     }
//     )

//     return newArray
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));

//////////////////////////////// №10 ////////////////////////

// const planets = ["Земля", "Марс", "Венера", "Юпитер"];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map((planet) => planet.length);

// //////////////////////////////// №11 ////////////////////////
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
//   { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
// ];
// // Пиши код ниже этой строки

// const titles = books.map((book) => book.title);

//////////////////////////////// №12 ////////////////////////

// const books = [
//   {
//     title: "Последнее королевство",
//     author: "Бернард Корнуэлл",
//     genres: ["приключения", "историческое"],
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     genres: ["фантастика"],
//   },
//   {
//     title: "Красна как кровь",
//     author: "Ли Танит",
//     genres: ["ужасы", "мистика"],
//   },
// ];
// // Пиши код ниже этой строки

// const genres = books.flatMap((book) => book.genres);

// console.log(genres);

//////////////////////////////// №13 ////////////////////////

// // Пиши код ниже этой строки
// const getUserNames = users => users.map(user => user.name)
//   // Пиши код выше этой строки

//////////////////////////////// №14 ////////////////////////

//   // Пиши код ниже этой строки
// const getUserEmails = users => users.map(user => user.email)
//   // Пиши код выше этой строки

//////////////////////////////// №15 ////////////////////////

//  const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
//  // Пиши код ниже этой строки

//  const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);

//////////////////////////////// №16 ////////////////////////

//  const books = [
//    {
//      title: "Последнее королевство",
//      author: "Бернард Корнуэлл",
//      genres: ["приключения", "историческое"],
//    },
//    {
//      title: "На берегу спокойных вод",
//      author: "Роберт Шекли",
//      genres: ["фантастика", "мистика"],
//    },
//    {
//      title: "Красна как кровь",
//      author: "Ли Танит",
//      genres: ["ужасы", "мистика", "приключения"],
//    },
//  ];
//  // Пиши код ниже этой строки
//  const allGenres = books.flatMap((book) => book.genres);
//  const uniqueGenres = allGenres.filter(
//    (genre, index, array) => array.indexOf(genre) === index
//  );

//////////////////////////////// №17 ////////////////////////

// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
//   { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Бернард Корнуэлл";
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);

//////////////////////////////// №18 ////////////////////////

// Пиши код ниже этой строки
// const getUsersWithEyeColor = (users, color) => users.filter(user => (user.eyeColor === color));
// Пиши код выше этой строки

//////////////////////////////// №19 ////////////////////////

// const getUsersWithAge = (users, minAge, maxAge) =>
//     users.filter((user) => user.age >= minAge && user.age <= maxAge);

//////////////////////////////// №20 ////////////////////////

// const getUsersWithFriend = (users, friendName) =>
//     users.filter((user) => user.friends.includes(friendName));

//////////////////////////////// №21 ////////////////////////

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39,
  },
];

console.log(users);
const getFriends = users.flatMap((user) => user.friends)

console.log(getFriends);

const getUniqueFriend = (getFriends, friendName) => getFriends.filter((getFriend =>))