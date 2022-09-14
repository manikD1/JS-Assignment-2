// ---
// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const products = [
//   { product: 'banana', price: 3 },
//   { product: 'mango', price: 6 },
//   { product: 'potato', price: ' ' },
//   { product: 'avocado', price: 8 },
//   { product: 'coffee', price: 10 },
//   { product: 'tea', price: '' },
// ]
// ---
// - Explain the difference between forEach, map, filter, and reduce.
// - Define a callback function before you use it in forEach, map, filter or reduce.
// - Use forEach to console.log each name in the names array.
// - Use forEach to console.log each country in the countries array.
// - Use forEach to console.log each number in the numbers array.
// - Use map to create a new array by changing each country to uppercase in the countries array.
// - Use map to create an array of countries length from countries array.
// - Use map to create a new array by changing each number to square in the numbers array
// - Use map to change to each name to uppercase in the names array
// - Use map to map the products array to its corresponding prices.
// - Use filter to filter out countries containing land.
// - Use filter to filter out countries having six character.
// - Use filter to filter out countries containing six letters and more in the country array.
// - Use filter to filter out country start with 'E';
// - Use filter to filter out only prices with values.
// - Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
// - Use reduce to sum all the numbers in the numbers array.
// - Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
// - Explain the difference between some and every
// - Use some to check if some names' length greater than seven in names array
// - Use every to check if all the countries contain the word land
// - Explain the difference between find and findIndex.
// - Use find to find the first country containing only six letters in the countries array
// - Use findIndex to find the position of the first country containing only six letters in the countries array
// - Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
// - Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.



const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];


// ******************************************************


// FREE TO COMMENT OR UNCOMMENT AS NEEDED


// - Explain the difference between forEach, map, filter, and reduce.

// countries.forEach(e => {
//     console.log(e);
// });


// let myMap = new Map();
// myMap.set('FIN', countries[0]);
// myMap.set('SWE', countries[1]);
// myMap.set('DEN', countries[2]);
// myMap.set('NOR', countries[3]);
// myMap.set('ICE', countries[4]);
// console.log(myMap);


// let myFilter = countries.filter(e => e.length>6);
// console.log(myFilter);


// let sum = numbers.reduce((prev, cur) => prev + cur);
// console.log(sum);



// ******************************************************





// - Define a callback function before you use it in forEach, map, filter or reduce.
// - Use forEach to console.log each name in the names array.


// function display(e){
//     console.log(e);
// }

// names.forEach(display);

// - Use forEach to console.log each country in the countries array.

// countries.forEach(display);


// - Use forEach to console.log each number in the numbers array.

// numbers.forEach(display);




// ******************************************************




// - Define a callback function before you use it in forEach, map, filter or reduce.
// - Use map to create a new array by changing each country to uppercase in the countries array.


// function countryUpper(e) {
//     return e.toUpperCase();
// }

// let mapUpperCountry = new Map();

// let newCountries = [];

// countries.forEach(e => {
//     mapUpperCountry.set(e, countryUpper(e));
//     newCountries.push(mapUpperCountry.get(e));
// });

// console.log(newCountries);


// ******************************************************



// - Use map to create an array of countries length from countries array.


// function countryLength(e){
//   return e.length;
// }

// let countriesLength = [];

// let mapCountryLength = new Map();

// countries.forEach(e => {
//   mapCountryLength.set(e, countryLength(e));
//   countriesLength.push(mapCountryLength.get(e));
// });

// console.log(countriesLength);




// ******************************************************



// - Use map to create a new array by changing each number to square in the numbers array

// function numberSquare(e){
//   return e*e;
// }

// let numberSquareArr = [];

// let mapNumber = new Map();

// numbers.forEach(e => {
//   mapNumber.set(e,numberSquare(e));
//   numberSquareArr.push(mapNumber.get(e));
// });

// console.log(numberSquareArr);


// ******************************************************




// - Use map to change to each name to uppercase in the names array


// function nameUpper(e) {
//   return e.toUpperCase();
// }

// let nameUpperArr = [];

// let nameMap = new Map();

// names.forEach(e => {
//   nameMap.set(e, nameUpper(e));
//   nameUpperArr.push(nameMap.get(e));
// });


// console.log(nameUpperArr);



// ******************************************************




// - Use map to map the products array to its corresponding prices.


// const products = [
//   { product: 'banana', price: 3 },
//   { product: 'mango', price: 6 },
//   { product: 'potato', price: ' ' },
//   { product: 'avocado', price: 8 },
//   { product: 'coffee', price: 10 },
//   { product: 'tea', price: '' },
// ];


// let mapProductPrice = new Map();

// function productToPrice(obj){

//   let sampArr = [];

//   for (let k in obj) {
//     sampArr.push(obj[k]);
//   };

//   mapProductPrice.set(sampArr[0],sampArr[1]);
    
// }

// products.forEach(e => productToPrice(e));

// console.log(mapProductPrice);




// ******************************************************


// - Define a callback function before you use it in forEach, map, filter or reduce.
// - Use filter to filter out countries containing land.


// function checkLand(el){

//  if (el.includes('and')){   //For both 'land' and 'Land'
//   return el;
//  }

// //  if (el.includes('land')){   // For only 'land'
// //   return el;
// //  }

// }


// console.log(countries.filter(e => checkLand(e))); 



// ******************************************************




// - Use filter to filter out countries having six character.


// function checkLen(el){
//  if (el.length == 6){   
//   return el;
//  }
// }


// console.log(countries.filter(e => checkLen(e))); 




// ******************************************************




// - Use filter to filter out countries containing six letters and more in the country array.



// function checkLen(el){
//   if (el.length >= 6){   
//    return el;
//   }
//  }
 
 
//  console.log(countries.filter(e => checkLen(e))); 
 
 



// ******************************************************



// - Use filter to filter out country start with 'E';


// function startE(el){
//   if (el[0]=='E'){   
//    return el;
//   }
//  }
  
//  console.log(countries.filter(e => startE(e))); 



// ******************************************************




// - Use filter to filter out only prices with values.


// const products = [
//   { product: 'banana', price: 3 },
//   { product: 'mango', price: 6 },
//   { product: 'potato', price: ' ' },
//   { product: 'avocado', price: 8 },
//   { product: 'coffee', price: 10 },
//   { product: 'tea', price: '' },
// ];


// function notEmpty(obj){
//   if((obj['price']!=' ') && (obj['price']!='')){
//     return obj;
//   }
// }

// console.log(products.filter(e => notEmpty(e)));




// ******************************************************




// - Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

// function getStringLists(strArr){
//   return strArr.filter(e => (typeof e == 'string'));  
// }

// let sampArr = [1, 'asd', 500, 'asdsaddd', 'manik', 88, true, 'rat'];

// console.log(getStringLists(sampArr));



// *****************************************************



// - Use reduce to sum all the numbers in the numbers array.


// console.log(numbers.reduce((prev, curr) => prev+curr));


// *****************************************************





// - Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];


// console.log(countries.reduce((prev, curr) => {

// if(prev=='Finland' && curr=='Sweden'){
//   // console.log('1st');
//   return `Estonia, ${prev}, ${curr}`;
// }
// else if(prev=='Estonia, Finland, Sweden, Denmark, Norway' && curr=='IceLand'){
//   // console.log('2nd');
//   return `${prev}, and ${curr} are north European countries`;
// }
// else{
//   // console.log('3rd');
//   return `${prev}, ${curr}`;
// }

// }));




// *****************************************************



// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const products = [
//   { product: 'banana', price: 3 },
//   { product: 'mango', price: 6 },
//   { product: 'potato', price: ' ' },
//   { product: 'avocado', price: 8 },
//   { product: 'coffee', price: 10 },
//   { product: 'tea', price: '' },
// ];



// - Explain the difference between some and every


// let isEven = (e) => {
//   return e%2==0;
// }

// console.log(numbers.some(isEven));


// let isPositive = (e) => {
//   return e>=0;
// }

// console.log(numbers.every(isPositive));




// *****************************************************



// - Use some to check if some names' length greater than seven in names array


// let checkLen = (e) => {
//   return e.length>7;
// }

// console.log(names.some(checkLen));



// *****************************************************


// - Use every to check if all the countries contain the word land


// let checkland = (e) => {
//   return e.includes('land');
// }

// console.log(countries.every(checkland));

// *****************************************************


// - Explain the difference between find and findIndex.

// let checki = (e) => {
//   return e.includes('i');
// }

// console.log(names.find(checki));
// console.log(names.findIndex(checki));


// *****************************************************


// - Use find to find the first country containing only six letters in the countries array
// - Use findIndex to find the position of the first country containing only six letters in the countries array



// let checkSix = (e) => {
//   return e.length==6;
// }

// console.log(countries.find(checkSix));
// console.log(countries.findIndex(checkSix));




// *****************************************************



// - Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.



// console.log(countries.findIndex((e) => {
//   return e=='Norway';
// }));



// *****************************************************



// - Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

// console.log(countries.findIndex((e) => {
//     return e=='Russia';
//   }));
  


// *****************************************************





