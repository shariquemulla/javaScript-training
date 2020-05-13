//Mixins

let target = {};

let source = { number: 7 };

Object.assign(target, source);

console.log(target);
// { number: 7 }


/////////////////////////////////////////////////////////////////////////////////////////


let target = { letter: 'a', number: 11 };

let source = { number: 7 };

Object.assign(target, source);

console.log(target);
// { letter: 'a', number: 7 }


///////////////////////////////////////////////////////////////////////////////////////////


const duck = {
  hasBill: true
};
const beaver = {
  hasTail: true
};
const otter = {
  hasFur: true,
  feet: 'webbed'
};

const platypus = Object.assign({}, duck, beaver, otter);

console.log(platypus);
// { hasBill: true, hasTail: true, hasFur: true, feet: 'webbed' }


///////////////////////////////////////////////////////////////////////////////////////////


//*****Check out the following Basketball() factory function:

function Basketball(color) {
  return {
    color: color,
    numDots: 35000
  };
}
const orangeBasketball = Basketball('orange');

console.log(orangeBasketball);
// { color: 'orange', numDots: 35000 }

/////////////////////////////////////////////////////////////////////////////////////////////


function Radio(mode) {
  let on = false;

  return {
    mode: mode,
    turnOn: function () {
      on = true;
    },
    isOn: function () {
      return on;
    }
  };
}

let fmRadio = Radio('fm');

fmRadio.on;
//undefined

fmRadio.isOn();
// false

fmRadio.turnOn();

fmRadio.isOn();


/////////////////////////////////////////////////////////////////////////////////////////////


function CoffeeMaker(object) {
  let needsRefill = false;

  return Object.assign({}, object, {
    pourAll: function () {
      needsRefill = true;
    },
    isEmpty: function () {
      return needsRefill;
    }
  });
}

const mixedCoffeeMaker = CoffeeMaker({ style: 'percolator' });

// mixedCoffeeMaker = {
//   style: 'percolator',
//   pourAll: function () {
//     needsRefill = true;
//   },
//   isEmpty: function () {
//     return needsRefill;
//   }
// }


///////////////////////////////////////////////////////////////////////////////////////


function IceCreamFactory(obj) {
  let isCold = true;

  return Object.assign({}, obj, {
    melt: function () {
      isCold = false;
    },
    isCold: function () {
      return isCold;
    }
  });
}

let iceCream = IceCreamFactory({});

function ConeFactory(obj) {
  let isDry = true;

  return Object.assign({}, obj, {
    soggy: function () {
      isDry = false;
    },
    isDry: function () {
      return isDry;
    }
  });
}

let iceCreamCone = IceCreamFactory(ConeFactory({}));

console.log(iceCreamCone);


///////////////////////////////////////////////////////////////////////////////////////////

// The Module Pattern - privatizing properties
let person = (function () {
  let name = 'Veronika';

  return  {
    getName: function () {
      return name;
    },
    setName: function (myName){
      name = myName;
    }
  };
})();

person.name;
// undefined
person.getName();
// 'Veronika'

person.setName('Not Veronika');
person.getName();
// 'Not Veronika'


////////////////////////////////////////////////////////////////////////////////////////////


// Revealing Module Pattern

let myModule = (function (){
  function privateMethod (message) {
    console.log(message);
  }

  function publicMethod (message) {
    privateMethod(message);
  }

  return {
    publicMethod: publicMethod
  };
})();

let myModule2 = (function () {
  function privateMethod (message) {
    console.log(message);
  }

  return {
    publicMethod: function (message) {
      privateMethod(message);
    }
  };
})();

console.log(myModule.publicMethod("Public"))


///////////////////////////////////////////////////////////////////////////////////////////


let person = (function () {
  let privateAge = 0;
  let privateName = 'Andrew';

  function privateAgeOneYear() {
    privateAge += 1;
    console.log(`One year has passed! Current age is ${privateAge}`);
  }

  function displayName() {
    console.log(`Name: ${privateName}`);
  }

  function ageOneYear() {
    privateAgeOneYear();
  }

  return {
    name: displayName,
    age: ageOneYear
  };
})();

console.log(person.name());
// 'My name is Andrew'

person.privateName = 'Richard';

console.log(person.name());
// 'My name is Andrew'
