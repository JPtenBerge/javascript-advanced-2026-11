function Person() {
  name;

  Person.nrOfPersons++;
  this.name = name;

  this.speak = () => {
    console.log(`Hi! I'm ${this.name}`);
  };
}
Person.nrOfPersons = 0;
new Person("Adam");
new Person("Eve");
