/*
Recall that arrays can store many different types of data, not just strings!
Below, create an array called `mixedArray` that contains:

* A number
* A string
* A boolean
* Another array

The order and length of the array are up to you; just be sure to include
at least one of each data type listed above.
*/

var mixedArray = ['String', true, 300, [20, false, 'nested']]


///////////////////////////////////////////////////////////////////////////////////////////////////


/*
Create an object called `menu` that represents the following menu item:

Salted Caramel Ice Cream
2.95
butter, ice cream, salt, sugar

The object should contain the following properties:
* name
* price
* ingredients

Hint: Which data collection can hold all the listed ingredients in order?
*/

var menu = {
  name : 'Salted Caramel Ice Cream',
  price : 2.95,
  ingredients : ['butter', 'ice cream', 'salt', 'sugar']
}


//////////////////////////////////////////////////////////////////////////////////////////


/*

Create an object called `chameleon` with two properties:

1. `color`, whose value is initially set to 'green' or 'pink'
2. `changeColor`, a function which changes `chameleon`'s `color` to 'pink'
    if it is 'green', or to 'green' if it is 'pink'

*/

chameleon = {
  color : 'pink',
  changeColor : function (){
      this.color === 'pink' ? this.color='green' : this.color='pink'
  }
}


////////////////////////////////////////////////////////////////////////////////////////////

