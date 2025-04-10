//exercise 1

/*let temperature = 20 

if (temperature < 0) {
    console.log("It's freezing!")
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold.")
} else if (temperature >= 16 && temperature <= 25) {
    console.log("It's mild.")
} else {
    console.log("It's warm.")
}

let temperature_group

if (temperature < 0) {
    temperature_group = 'freezing'
} else if (temperature >= 0 && temperature <= 15) {
    temperature_group = 'cold'
} else if (temperature >= 16 && temperature <= 25) {
    temperature_group = 'mild'
} else {
    temperature_group = 'warm'
}

switch (temperature_group) {
    case 'freezing':
        console.log("It's freezing!")
        break
    case 'cold':
        console.log("It's cold.")
        break
    case 'mild':
        console.log("It's mild.")
        break
    case 'warm':
        console.log("It's warm.")
        break
}

//exercise 2

//im gonna use a function
function DivisibilityCheck(number){
    if(number % 2 == 0 && number % 3 == 0){
        console.log("Divisible by both.")
    } else if(number % 2 == 0){
        console.log("Divisible by 2.")
    } else if(number % 3 == 0){
        console.log("Divisible by 3.")
    } else {
        console.log("Not divisible by 2 or 3.")
    }
    
}


function DivisibilityCheckSwitch(number) {
    const by2 = number % 2 === 0;
    const by3 = number % 3 === 0;
    
    switch(true) {
        case (by2 && by3):
            console.log("Divisible by both.");
            break;
        case by2:
            console.log("Divisible by 2.");
            break;
        case by3:
            console.log("Divisible by 3.");
            break;
        default:
            console.log("Not divisible by 2 or 3.");
    }
}

//exercise 3

//1
for(let i = 1; i < 11 ;i++){
    console.log(i)
}
//2
for(let i = 0; i < 21 ;i+=2){
    console.log(i)
}
//3
let one_to_100 = 0

for(let i = 1 ; i <101 ; i++){
    one_to_100 += i
}
console.log(one_to_100)

//4

const numbers = [1,2,3,4,5]
for(let i = 0;i<numbers.length;i++){
    console.log(numbers[i])
}

//5
const numbers2 = [3,7, 2, 5, 10, 6]
let largest = numbers2[0] //a value that we can compare other elements to

for(let i = 1;i<numbers2.length;i++){
    if(numbers2[i] > largest){ //if the element is bigger than largest then it will be assigned to it
        largest = numbers2[i]
    }
}
console.log("Largest",largest)

//exercise 4

//1

let counter = 1

while(counter <= 10){
    console.log(counter)
    counter++
}
*/
//2
let counter2 = 1
while(counter2<=20){
    if(counter2 % 2 == 0){
        console.log(counter2)
    }
    counter2++
}

//3

let counter3 = 1
let sum_to_100 = 0
while(counter3<=100){
    sum_to_100+=counter3
    counter3++

}
console.log(sum_to_100)


//4
let counter4 = 1
while(counter4 <= 50){
    if(counter4 % 5 == 0){
        console.log(counter4)
    }
    counter4++
}

//exercise 5

//1
//1
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);

//2
let sum = 0;
let j = 1;
do {
    sum += j;
    j++;
} while (j <= 100);
console.log(sum);

//3
let userNum;
do {
    userNum = window.prompt("Enter a number greater than 10");
} while (userNum <= 10 || isNaN(userNum));

//4
const answer = Math.floor(Math.random() * 10) + 1;
let guess;
do {
    guess = window.prompt("Guess a number between 1 and 10:");
    if (guess < answer) {
        console.log("Too low!");
    } else if (guess > answer) {
        console.log("Too high!");
    }
} while (guess != answer);
console.log("Correct!");