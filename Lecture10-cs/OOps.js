// Part 1: Fixing person object and method
let person = {
    firstName: "Shantanu",
    lastName: "Shubam",
    getFullName: function(){
      return `The name of the person is ${this.firstName} ${this.lastName}`;
    },
    phoneNumber: {
      mobile: "12345",
      landline: "6789"
    }
  };
  
  console.log(person.getFullName());
  console.log(person.phoneNumber.landline); // Fixed typo 'lanline' to 'landline'
  
  // Part 2: Fixing constructor function for person
  function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  let person1 = new Person("Shantanu", "Shubam");
  let person2 = new Person("Anurag", "Mishra");
  
  console.log(person1.firstName);
  console.log(`${person2.firstName} ${person2.lastName}`); // Fixed template literal usage
  
  // Part 3: Fixing coder object
  const coder = {
    isStudying: false,
    printIntroduction: function(){
      console.log(`My name is ${this.name} am studying?: ${this.isStudying}`); // Fixed template literal
    }
  };
  
  const me = Object.create(coder);
  me.name = "Shantanu Shubam";
  me.isStudying = true;
  me.printIntroduction();
  
  // Part 4: Fixing Vehicle class and constructor function
  class Vehicle {
    constructor(name, maker, engine){
      this.name = name;
      this.maker = maker;
      this.engine = engine;
    }
  
    getDetails(){
      return `The name of the vehicle is ${this.name}`; // Fixed template literal
    }
  }
  
  let v1 = new Vehicle("Creta", "Hyundai", "2500cc");
  let v2 = new Vehicle("Q5", "Audi", "3000cc");
  
  console.log(v1.name);
  console.log(v2.maker);
  console.log(v1.getDetails());
  
  // Part 5: Correcting Vehicle constructor function and prototype method
  function Vehicle(name, maker, engine){
    this.name = name;
    this.maker = maker; // Fixed incorrect property assignment
    this.engine = engine;
  }
  
  Vehicle.prototype.getDetails = function(){
    return `The name of the vehicle is ${this.name}`; // Fixed template literal
  }
  
  let v1Func = new Vehicle("Creta", "Hyundai", "2500cc");
  let v2Func = new Vehicle("Q5", "Audi", "3000cc");
  
  console.log(v1Func.name);
  console.log(v2Func.maker);
  console.log(v1Func.getDetails());
  
  // Part 6: Correcting Person class with addAddress method
  class Person {
    constructor(name, id){
      this.name = name;
      this.id = id;
    }
  
    addAddress(newAddress){
      this.address = newAddress;
    }
  
    getDetails(){
      console.log(`Name is: ${this.name} and the address is: ${this.address}`); // Fixed template literal
    }
  }
  
  let personObj1 = new Person("Shantanu", 24);
  personObj1.addAddress("Kolkata");
  personObj1.getDetails();
  
  // Part 7: Correcting Person class with private method concept
  class Person {
    constructor(firstName, lastName){
      this.firstName = firstName;
      this.lastName = lastName;
  
      let getDetails_NoAccess = function(){
        return `The first name is: ${this.firstName} and last name is: ${this.lastName}`; // Fixed template literal
      };
  
      this.getDetails_Access = function(){
        return `The first name is: ${this.firstName} and last name is: ${this.lastName}`; // Fixed template literal
      };
    }
  }
  
  let personObj2 = new Person("Shantanu", "Shubham");
  
  console.log(personObj2.firstName);
  // console.log(personObj2.getDetails_NoAccess()); // This method is not accessible from outside
  console.log(personObj2.getDetails_Access()); // Fixed method name typo
  
  // Part 8: Extending Person class to Student class
  class Person {
    constructor(firstName, lastName){
      this.firstName = firstName;
      this.lastName = lastName;
  
      this.getDetails_Access = function(){
        return `The first name is: ${this.firstName} and last name is: ${this.lastName}`; // Fixed template literal
      };
    }
  }
  
  class Student extends Person {
    constructor(firstName, lastName, rollNumber){
      super(firstName, lastName);
      this.rollNumber = rollNumber;
  
      this.getDetails_Access = function(){
        return `The first name is: ${this.firstName}, last name is: ${this.lastName} and the roll number is: ${this.rollNumber}`; // Fixed template literal
      };
    }
  }
  
  let personObj3 = new Person("Shantanu", "Shubham");
  
  console.log(personObj3.firstName);
  // console.log(personObj3.getDetails_NoAccess()); // This method is not accessible from outside
  
  let student1 = new Student("Anurag", "Mishra", 20);
  console.log(student1.getDetails_Access()); // Fixed method name typo and ensured correct class instantiation
  