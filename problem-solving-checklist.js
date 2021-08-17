// //1. conversation...................................?
// function feetToInch(feet) {
//     const inch = feet * 12;
//     const totalInch = inch + " " + "inch";
//     return totalInch;
// }

// const feet = 20;
// console.log(feetToInch(feet));


// // 2. conversion..........................................?

// function centimeterToMeter(centimeter) {
//     const meter = centimeter * 0.01;
//     const totalMeter = meter + " " + "meter";
//     return totalMeter;
// }

// const centimeter = 300;
// console.log(centimeterToMeter(centimeter))


//3.calculation............................................?

// function pageRequirements(Bangla, English, Math) {
//     const banglaBookPage = Bangla * 100;
//     const englishBookPage = English * 200;
//     const mathBookPage = Math * 300;

//     const totalBookPage = banglaBookPage + englishBookPage + mathBookPage;
//     return totalBookPage;
// }
// const bangla = 50;
// const english = 100;
// const math = 200;
// const bookPage = pageRequirements(bangla, english, math);
// console.log(bookPage);


// 4. friend.............................................?





// function bestFriend(friends) {

//     let largestName = friends[0];
//     for (i = 0; i < friends.length; i++) {
//         if (largestName.length < friends[i].length) {
//             largestName = friends[i];
//         }
//     }
//     return largestName;
// }
// let friends = ["Rukon", "Khokon", "Liton", "Showpon", "Ripon", "thowpon"];
// console.log(bestFriend(friends))


//--------------------------------------------------

// 5 will stop the loop if the array ths any negative number and returns all the positive number before the negative number. 


// const numbers = [12, 35, 25, 45, -54, -25, 50, 60];
// function onlyPositive(numbers) {

//     for (i = 0; i < numbers.length; i++) {
//         if (numbers[i] > 0) {
//             console.log(numbers[i]);
//         }

//     }


// }

// console.log(onlyPositive(numbers));


// var name = "md rukon uddin";
// console.log(name.length);


/*Simple Interest= P x R x T ÷ 100, where P = Principal, R = Rate of Interest and T = Time Period of the Loan/Deposit in years. */

function perfectFriend(friends) {
    let friendOfName5Letter = [];

    for (i = 0; i < friends.length; i++) {
        const friend = friends[i];
        if (friend.length === 5) {
            friendOfName5Letter.push(friend);
        }
    }
    return friendOfName5Letter;

}

const friends = ["Delwar", "Rukon", "Shahin", "Liton", "Rufiq"];

console.log(perfectFriend(friends));
