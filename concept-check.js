//1. Write 3 variables (number,string,bo0lean)-----------?

// var number = 10;
// var string = "string";
// var boolean = 10 > 9;
// console.log(typeof (number));
// console.log(typeof (string));
// console.log(typeof (boolean));


// .............................................

// 2. 2 variables using (let,const)-------------?


// let variablesLet = 50; //let variable এর মান পরিবর্তন করা যায়।
// variablesLet = 20;
// console.log(variablesLet);

// const variableConst = 100; //const variable এর মান পরিবর্তন করা যায় না। 
// variableConst = 50;
// console.log(variableConst);

// ....................................................

// 3 simple math operations (+,-,*,/,%)?

// var number1 = 80;
// var number2 = 20;

// var plus = number1 + number2;
// console.log(plus);

// var subtraction = number1 - number2;
// console.log(subtraction);

// var multiply = number1 * number2;
// console.log(multiply);

// var division = number1 / number2;
// console.log(division);

// var quotient = number1 % number2;
// console.log(quotient);
// var totalCalculation = plus + subtraction + multiply + division + quotient;
// console.log(totalCalculation);


// 4.comparison--------------------------------------?

// var number1 = 300;
// var number2 = 400;

// var equal = number1 == number2;
// console.log(equal);


// var graterThan = number1 > number2;
// console.log(equal);

// var lessThan = number1 < number2;
// console.log(lessThan);

// var unequal = number1 != number2;
// console.log(unequal);

// var greaterThanOrEqualTo = number1 >= number2;
// console.log(greaterThanOrEqualTo);


// var lessThanOrEqualTo = number1 <= number2;
// console.log(greaterThanOrEqualTo);

// ........................................................




// 5. tow conditions . case-1 fulfill both condition.case-2 fulfill at least one condition...........................?

// var haveYouEatenRice = true;
// var haveYouTakenABath = true;
// if (haveYouEatenRice && haveYouTakenABath) {
//     console.log("you are right person!")
// }


// ..............................................................


//6.if-else----------------------------?

// var haveYouEatenRice = true;
// var haveYouTakenABath = true;

// if (haveYouEatenRice == true) {
//     console.log("your good healthy");
// } else if (haveYouTakenABath == true) {
//     console.log("you good person");
// } else {
//     console.log("tui ekta khatas!!!")
// }


// .............................................................

// 7.while loop to display 7 to 19 all numbers.Only display odd numbers including 7 to 19.......................?


// var numbers = 0;
// while (numbers <= 20) {
//     numbers++;
//     if (numbers >= 7 && numbers <= 19 && numbers % 2 != 0) {
//         console.log(numbers)
//     }
// }


// ..........................................................


// 8.declare an array . number of elements. update or change 4th position element. add or remove elements. check whether specific value exists in the array....................................?


// var array = [12, 13, 14, 15, 16, 17, 18, 19, 20];
// console.log(array.length);
// array[3] = 120;
// array.pop();
// array.push(500);
// console.log(array);
// console.log(array[5]);
// console.log(array.indexOf(16));

// .............................................................

// 9.ues any for loop to display every elements of an array....?

var array = [12, 13, 14, 15, 16, 17, 18, 19, 20];
// for (i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }


for (const numbers of array) {
    console.log("number", numbers);
}

// .............................................................


// 10.you have an array of numbers.Display only the number bigger then 80..........?
// var numbers = [125, 45, 90, 28, 200, 100, 456, 54, 23, 662];
// for (i = 0; i < numbers.length; i++) {
//     if (numbers[i] >= 80) {
//         console.log(numbers[i]);
//     }
// }

// .............................................................

//11. write a function that takes three numbers and returns the multiplication of the three numbers...........?

// function multiplication(number1, number2, number3) {
//     const totalMultiplication = number1 * number2 * number3;
//     return totalMultiplication;
// }

// const number1 = 10;
// const number2 = 20;
// const number3 = 30;

// const calculation = multiplication(number1, number2, number3);
// console.log(calculation);


// 12 declare an object and change any property of that object..?

// const object = { name: "rukon", height: "5fit 6 inch", Weight: "50kg" };
// object.Weight = "60kg";

// console.log(object);