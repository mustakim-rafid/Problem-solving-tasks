// 1.Task: Array Filtering and Mapping

type PersonType = {
  name: string;
  age: number;
  gender: "Male" | "Female";
};

const people: PersonType[] = [
  { name: "Alex Johnson", age: 25, gender: "Male" },
  { name: "Emily Smith", age: 30, gender: "Female" },
  { name: "Jordan Lee", age: 22, gender: "Male" },
  { name: "Michael Brown", age: 35, gender: "Male" },
  { name: "Sophia Davis", age: 28, gender: "Female" },
  { name: "Chris Wilson", age: 40, gender: "Male" },
  { name: "Olivia Martinez", age: 19, gender: "Female" },
  { name: "Daniel Anderson", age: 33, gender: "Male" },
  { name: "Taylor Nguyen", age: 27, gender: "Female" },
  { name: "Ava Thompson", age: 24, gender: "Female" },
];

const getNamesWithoutFemales = (arr: PersonType[]) => {
  const males = arr
    .filter((item) => item.gender === "Male")
    .map((item) => item.name);
  return males;
};

console.log(getNamesWithoutFemales(people));
