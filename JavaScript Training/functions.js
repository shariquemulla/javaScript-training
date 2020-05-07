/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */


function laugh(num){
  var laughs="";
  for(var x=1; x<=num; x++){
      laughs += "ha";
      if(x==num){
          laughs += "!";
      }
  }
  return laughs;
}

console.log(laugh(5));


//////////////////////////////////////////////////////////////////////////////////////////////////


/*
 * Programming Quiz: Build A Triangle (5-3)

    *
    * *
    * * *
    * * * *
    * * * * *
    * * * * * *
    * * * * * * *
    * * * * * * * *
    * * * * * * * * *
    * * * * * * * * * *

 */

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

function buildTriangle(num){
  var triangle="";
  for(var i=1; i<=num; i++){
     triangle += makeLine(i);
  }
  return triangle;
}

console.log(buildTriangle(10));


/////////////////////////////////////////////////////////////////////////////////////////////


/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function (num){
  var laughs = "";
  for(var i=1; i<=num; i++){
      laughs += "ha";
  }
  return laughs + "!";
}
console.log(laugh(10));


/////////////////////////////////////////////////////////////////////////////////////////////


/*
 * Programming Quiz: Cry (5-5)
 */

// your code goes here
var cry = function name(){
  return "boohoo!"
}
cry();


///////////////////////////////////////////////////////////////////////////////////////////////


/*
 * Programming Quiz: Inline Functions (5-6)
 */

function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function(num){
  var laughs="";
  for(var i=1; i<=num; i++){
      laughs += "ha";
      }
  return laughs + "!";
  }
);


