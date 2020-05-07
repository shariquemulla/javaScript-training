var money = 100.50;
var price = 100.50;

if (money > price) {
  console.log("You paid extra, here's your change.");
} else if (money === price) {
  console.log("You paid the exact amount, have a nice day!");
} else {
  console.log("That's not enough, you still owe me money.");
}

var runner = "Kendyll";
var position = 2;
var medal;

if(position === 1) {
  medal = "gold";
} else if(position === 2) {
  medal = "silver";
} else if(position === 3) {
  medal = "bronze";
} else {
  medal = "pat on the back";
}
console.log(runner + " received a " + medal + " medal.");


/*
 * Programming Quiz: Even or Odd (3-2)
 *
 * Write an if...else statement that prints `even` if the
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
 */

// change the value of `number` to test your if...else statement
var number = 1;

if ((number % 2) === 0) {
    console.log("even");
} else {
    console.log("odd");
}


/*
 * Programming Quiz: Musical Groups (3-3)
 */

// change the value of `musicians` to test your conditional statements
var noOfMusicians = 3;

if(noOfMusicians <= 0){
    console.log("not a group");
}
else if(noOfMusicians === 1){
    console.log("solo");
}
else if(noOfMusicians === 2){
    console.log("duet");
}
else if(noOfMusicians === 3){
    console.log("trio");
}
else if(noOfMusicians === 4){
    console.log("quartet");
}
else{
    console.log("this is a large group");
}


/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if ((room === "dining room") && (suspect = "Mr. Parkes")) {
    weapon = "knife";
    solved = true;
} else if ((room === "gallery") && (suspect = "Ms. Van Cleve")) {
    weapon = "trophy";
    solved = true;
} else if ((room === "billiards room") && (suspect = "Mrs. Sparr")) {
    weapon = "pool stick";
    solved = true;
}
else if ((room === "ballroom") && (suspect = "Mr. Kalehoff")) {
    weapon = "poison";
    solved = true;
}else {
    solved = false;
}

if (solved) {
	console.log( suspect + " did it in the " + room + " with the " + weapon +"!");
}


/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.00;
var checkBalance = true;
var isActive = true;

if(checkBalance === true){
    if((isActive === true) && balance>0){
        console.log("Your balance is $" + balance.toFixed(2) + ".");
    } else if(isActive === false){
        console.log("Your account is no longer active.");
    } else if (balance === 0){
        console.log("Your account is empty.");
    } else{
        console.log("Your balance is negative. Please contact bank.");
    }
}else{
    console.log("Thank you. Have a nice day!");
}


/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 *
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 *
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators.
 * It's okay if the output string doesn't match exactly.
 */

// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "chocolate";
var vessel = "cone";
var toppings = "peanuts";

if((flavor == "vanilla" || flavor == "chocolate") && (vessel == "cone" || vessel == "bowl") && (toppings == "sprinkles" || toppings == "peanuts"))
{
    console.log("I'd like two scoops of "+ flavor +" ice cream in a "+ vessel +" with "+ toppings +".");
}


/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 25;
var shirtLength = 32;
var shirtSleeve = 9.10;

if((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)){
    console.log("S");
}else if((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.13 && shirtSleeve < 8.63)){
    console.log("M");
}else if((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88)){
    console.log("L");
}else if((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)){
    console.log("XL");
}else if((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13)){
    console.log("2XL");
}else if((shirtWidth >= 28) && (shirtLength >= 34) && (shirtSleeve >= 10.13)){
    console.log("3XL");
}else{
     console.log("N/A");
 }

