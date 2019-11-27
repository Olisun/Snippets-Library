// Classes

class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 'walking time';
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
  }
}

const wiggly = new Dog('Wiggly');
console.log(wiggly.name);  // output is Wiggly 
console.log(wiggly.behavior);  // output is walking time
console.log(wiggly.incrementBehavior);

// Constructor creates new obect - Surgeon {name: "Oliver", department: "Settlements"}

class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

const oli = new Surgeon('Oliver', 'Settlements');
console.log(oli);

// Class getters.  

class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get department() {
    return this._department;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

surgeonCurry.takeVacationDays(5);  // calls the takeVacationDays method.
console.log(surgeonCurry);  // returns Surgeon {_name: "Curry", _department: "Cardiovascular", _remainingVacationDays: 15}

// Class Inheritance - Creating a sublclass Nurse from class Hospital Employee

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications
  }
};

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
console.log(nurseOlynyk);  // output Nurse {_name: "Olynyk", _remainingVacationDays: 20, _certifications: Array(2)}

nurseOlynyk.takeVacationDays(5);  // calling inherited method from parent
console.log(nurseOlynyk.remainingVacationDays);  // returns 15

// MOSH

class Circle {
  constructor(radius) {
      this.radius = radius; 
  }

  // These methods will be added to the prototype. 
  draw() {
  }

  // This will be available on the Circle class (Circle.parse())
  static parse(str) {
  }
}

// Using symbols to implement private properties and methods
const _size = Symbol();
const _draw = Symbol();

class Square {
  constructor(size) {
      // "Kind of" private property 
      this[_size] = size; 
  }

  // "Kind of" private method 
  [_draw]() {
  }

  // By "kind of" I mean: these properties and methods are essentally
  // part of the object and are accessible from the outside. But accessing
  // them is hard and awkward. 
}

// using WeakMaps to implement private properties and methods
const _width = new WeakMap();

class Rectangle {
  constructor(width) {
      _width.set(this, width);
  }

  draw() {
      console.log('Rectangle with width' + _width.get(this));
  }
}

// WeakMaps give us better protection than symbols. There is no way 
// to access private members implemented using WeakMaps from the 
// outside of an object. 

       