console.log("This is fuction.html file.")


function greet(name,greetText){
    console.log(greetText + " " + name + ", You are a good boy.")
}

let name1 = "Rishi";
let name2 = "Rohan";
let name3 = "Rajesh";

let greetText = "Good morning💥";

greet(name1,greetText)
greet(name2,greetText)
greet(name3,greetText)



function add (num1, num2, num3 = 50){
    let sum = num1 + num2 + num3 ;
    return ("Sum of " + num1 + ", " + num2 + " and " + num3 + " is: " + sum )
}

let num1, num2, num3;
num1 = 5;
num2 = 10;
num3 = 20;

console.log(add(num1, num2, num3))

console.log(add(10, 20))