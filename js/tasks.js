// function checkForSpam(message) {
//   let result;
//   // Пиши код ниже этой строки
//   //console.log(message.toLowerCase());
//   //result = message.toLowerCase().includes("spam" || "sale");
//   console.log(message.toLowerCase().(includes"spam" || "sale"));

//   // Пиши код выше этой строки
//   return result;
// }

// i = a || b

// i = a }|| i = b

// checkForSpam("Latest technology news");
// checkForSpam("JavaScript weekly newsletter");
// checkForSpam("Get best sale offers now!");
// checkForSpam("Amazing SalE, only tonight!");
// checkForSpam("Trust me, this is not a spam message");
// checkForSpam("Get rid of sPaM emails. Our book in on sale!");
// checkForSpam("[SPAM] How to earn fast money?");

// // console.log(checkForSpam("Latest technology news"));
// // console.log(checkForSpam("JavaScript weekly newsletter"));
// // console.log(checkForSpam("Get best sale offers now!"));
// // console.log(checkForSpam("Amazing SalE, only tonight!"));

// function getExtremeElements(array) {
// Пиши код ниже этой строки

//   return console.log(array);
//   const deletedArray = array.splice(1, array.length - 2);
//   console.log(deletedArray);
//   console.log(array);
//     // Пиши код выше этой строки
//   }

// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(['Земля', 'Марс', 'Венера']);
// getExtremeElements(['яблоко', 'персик', 'груша', 'банан']);

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(['Земля', 'Марс', 'Венера']));
// console.log(getExtremeElements(['яблоко', 'персик', 'груша', 'банан']));

// function splitMessage(message, delimeter) {
//   let words;

//   // Пиши код ниже этой строки
//   words = message.split();

//   // Пиши код выше этой строки
//   return words;

//   console.log(words);
// }

// console.log(splitMessage("Манго спешит на поезд", " "));

// function slugify(title) {
//   // Пиши код ниже этой строки
//   let slug;
//   let array
//  title = title.toLowerCase();
//  console.log(title);
//   array = title.split(" ");
//   slug = array.join('-')
//    console.log(slug);
//   return slug;

//   // Пиши код выше этой строки
// }

// slugify("Массивы для новичков");
// console.log(slugify("Массивы для новичков"));

// function makeArray(firstArray, secondArray, maxLength) {
//   // Пиши код ниже этой строки

//   let newArray = firstArray.concat(secondArray);

//   if (newArray.length > maxLength) {
//     newArray = newArray.slice(0, maxLength);
//   }

//   return newArray;
//   // Пиши код выше этой строки
// }

// makeArray(["Манго", "Поли"], ["Аякс", "Челси"], 3);
// console.log(makeArray(["Манго", "Поли"], ["Аякс", "Челси"], 3));
// makeArray(["Манго", "Поли", "Хьюстон"], ["Аякс", "Челси"], 4);
// console.log(makeArray(["Манго", "Поли", "Хьюстон"], ["Аякс", "Челси"], 4));
// makeArray(["Манго"], ["Аякс", "Челси", "Поли", "Хьюстон"], 3);
// console.log(makeArray(["Земля", "Юпитер"], ["Нептун", "Уран"], 2));
// makeArray(["Земля", "Юпитер"], ["Нептун", "Уран"], 2);
// makeArray(["Земля", "Юпитер"], ["Нептун", "Уран", "Венера"], 0);
// console.log(makeArray(["Земля", "Юпитер"], ["Нептун", "Уран", "Венера"], 0));

// function calculateTotal(number) {
//   // Пиши код ниже этой строки
//   let sum = 0;
//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }
//   return sum;
//   // Пиши код выше этой строки
// }

// calculateTotal(1);
// console.log(calculateTotal(1));
// calculateTotal(3);
// console.log(calculateTotal(3));
// calculateTotal(7);
// console.log(calculateTotal(7));
// calculateTotal(18);
// console.log(calculateTotal(18));
// calculateTotal(24);
// console.log(calculateTotal(24));
// calculateTotal(103);
// console.log(calculateTotal(103));

// const fruits = ["яблоко", "слива", "груша", "апельсин"];

// for (let i = 0; i < fruits.length; i += 1) {
//   // Дополни эту строку
//   const fruit = fruits[i]; // Дополни эту строку
//   console.log(fruit);
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   console.log(total);
//   // Пиши код выше этой строки
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);
// calculateTotalPrice([28, 361, 4, 99, 76]);

// function findLongestWord(string) {
//   // Пиши код ниже этой строки
//   const array = string.split(' ');

//   let longestWord = array[0];

//   for (let i = 1; i < array.length; i += 1) {
//     if (array[i].length > longestWord.length) {
//       longestWord = array[i];
//     }

//     // Пиши код выше этой строки
//   }
//   return longestWord;
// }

// findLongestWord('The quick brown fox  jumped over the lazy dog')
// console.log(findLongestWord("The quick brown fox  jumped over the lazy dog"));

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Пиши код ниже этой строки
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(numbers[i])

//   }
//   // Пиши код выше этой строки
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3))

// console.log(createArrayOfNumbers(14, 17));

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Пиши код ниже этой строки
//   while (min <= max) {
//     numbers.push(min++);
//     // Пиши код выше этой строки
//     return numbers;
//   }

// }

// console.log(createArrayOfNumbers(1, 3))

// console.log(createArrayOfNumbers(14, 17));

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   let filtered = [];
//   for (const number of numbers) {
//     console.log(number);

//     if (number > value) {
//       filtered.push(number);
//     }
//   }

//   return filtered;

//   // Пиши код выше этой строки
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   let filtered = [];
//   for (let i = 0; i < numbers.length; i += 1) {

//     if (numbers[i] > value) {
//       filtered.push(numbers[i]);
//     }
//   }
//   return filtered;
//   // Пиши код выше этой строки
// }

// function checkFruit(fruit) {
//   const fruits = ["яблоко", "слива", "груша", "апельсин"];

//   return fruits.includes(fruit); // Дополни эту строку
// }

// checkFruit("слива");

// console.log(checkFruit("Груша"));

// function getCommonElements(array1, array2) {
  // Пиши код ниже этой строки

//   const array3 = [];

//   for (let array of array1) {
//     if (array2.includes(array)) {
//       array3.push(array);
//     }
//   }

//   return array3;
//   // Пиши код выше этой строки
// }

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));


// function getEvenNumbers(start, end) {
//   // Пиши код ниже этой строки
//   const array = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       array.push(i);
//     }
//   }

//   return array;
//   // Пиши код выше этой строки
// }


function includes(array, value) {
  // Пиши код ниже этой строки

  const isInclude = true;
  for (const item of array) {
    if (item === value) {
      return isInclude;
    } 
  }

  return !isInclude;

  // Пиши код выше этой строки
}

console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));
console.log(
  includes(["Земля", "Марс", "Венера", "Юпитер", "Сатурн"], "Юпитер")
);
console.log(includes(["Земля", "Марс", "Венера", "Юпитер", "Сатурн"], "Уран"));
console.log(includes(["яблоко", "слива", "груша", "апельсин"], "слива"));
console.log(includes(["яблоко", "слива", "груша", "апельсин"], "киви"));
