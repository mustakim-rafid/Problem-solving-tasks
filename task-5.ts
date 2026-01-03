// 5.Task: Find and Modify

type Person = {
  name: string;
  age: number;
  gender: "Male" | "Female";
};

const allPeople: Person[] = [
  { name: "Alex Johnson", age: 25, gender: "Male" },
  { name: "Emily Smith", age: 30, gender: "Female" },
  { name: "Jordan Lee", age: 22, gender: "Male" },
  { name: "Michael Brown", age: 35, gender: "Male" },
  { name: "Sophia Davis", age: 28, gender: "Female" }
];

const updatePersonAge = (people: Person[], name: string, newAge: number) => {
  const person = people.find(p => p.name === name);
  if (person) {
    person.age = newAge;
  }
}
updatePersonAge(allPeople, "Jordan Lee", 25);

console.log(allPeople);
