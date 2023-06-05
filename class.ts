class Person {
    name: string;
    age: number;
  
    constructor(name: string);
    constructor(name: string, age: number);
    constructor(name: string, age?: number) {
      this.name = name;
      this.age = age || 0;
    }
  }

  const person1 =new Person("Alice")
  console.log(person1.name)

  const person2 = new Person("Bob", 25);
console.log(person2.name); 
console.log(person2.age);