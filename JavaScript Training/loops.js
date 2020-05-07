/*
 * Programming Quiz: JuliaJames (4-1)
 */
// Loop through the numbers 1 to 20
// If the number is divisible by 3, print "Julia"
// If the number is divisible by 5, print "James"
// If the number is divisible by 3 and 5, print "JuliaJames"
// If the number is not divisible by 3 or 5, print the number

var x = 1;

while (x<=20) {
    // check divisibility
    // print Julia, James, or JuliaJames
    // increment x
    console.log((x%3 === 0 && x%5 === 0)? "JuliaJames" : (x%3 === 0? "Julia" : (x%5 === 0? "James" : x)));
    x++;
}


/////////////////////////////////////////////////////////////////////////////////////////////////


/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;

while (num>0) {
    if(num >2){
        console.log(num + " bottles of juice on the wall! "+ num +" bottles of juice! Take one down, pass it around... "+ (num-1) +" bottles of juice on the wall!");
        num--;
    } else if(num ===2){
        console.log(num + " bottles of juice on the wall! "+ num +" bottles of juice! Take one down, pass it around... "+ (num-1) +" bottle of juice on the wall!");
        num--;
    }
    else{
        console.log(num + " bottle of juice on the wall! "+ num +" bottle of juice! Take one down, pass it around... "+ (num-1) +" bottles of juice on the wall!");
        num--;
    }
}


//////////////////////////////////////////////////////////////////////////////////////////


/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 *
 * Using a while loop, print out the countdown output above.
 */

var time = 60;

while(time>=0){

    if(time===50){
        console.log("Orbiter transfers from ground to internal power");
    }else if(time===31){
        console.log("Ground launch sequencer is go for auto sequence start");
    }else if(time===16){
        console.log("Activate launch pad sound suppression system");
    }else if(time===10){
        console.log("Activate main engine hydrogen burnoff system");
    }else if(time===6){
        console.log("Main engine start");
    }else if(time===0){
        console.log("Solid rocket booster ignition and liftoff!");
    }else{
    console.log("T-" + time +" seconds");
    }
    time--;
}


///////////////////////////////////////////////////////////////////////////////////////////


/*
 * Programming Quiz: Changing the Loop (4-4)
 */

// rewrite the while loop as a for loop

for (var x = 9; x >= 1; x--) {
  console.log("hello " + x);

}


//////////////////////////////////////////////////////////////////////////////////////////

/*
 * Programming Quiz: Fix the Error 1 (4-5)
 */

// fix the for loop
for (var x=5;x < 10; x++) {
  console.log(x);
}


////////////////////////////////////////////////////////////////////////////////////////////


/*
 * Programming Quiz: Factorials (4-7)
 */
var solution=1;
for(var x=12; x>=1; x--){
    solution *= x;
}
console.log(solution)


/////////////////////////////////////////////////////////////////////////////////////////////


/*
 * Programming Quiz: Find my Seat (4-8)
 *
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0
 * The last row-seat combination will be 25-99
 *
 * Things to note:
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

for(var x=0; x<=25; x++){
  for(var y=0; y<=99; y++){
      console.log(x +"-"+y);
  }
}
