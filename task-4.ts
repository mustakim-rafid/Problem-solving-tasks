// 4.Task: Sorting Objects

type Car = {
  make: string;
  model: string;
  year: number;
};

const cars: Car[] = [
  { make: "Toyota", model: "Corolla", year: 2020 },
  { make: "Honda", model: "Civic", year: 2019 },
  { make: "Ford", model: "Mustang", year: 2021 },
  { make: "Chevrolet", model: "Camaro", year: 2018 },
  { make: "Tesla", model: "Model 3", year: 2022 },
  { make: "BMW", model: "X5", year: 2017 },
  { make: "Audi", model: "A4", year: 2016 },
  { make: "Mercedes-Benz", model: "C-Class", year: 2020 },
  { make: "Hyundai", model: "Elantra", year: 2019 },
  { make: "Nissan", model: "Altima", year: 2021 },
];

const sortCarsByYearAsc = (arr: Car[]) => {
  return arr.sort((a, b) => a.year - b.year);
};

console.log(sortCarsByYearAsc(cars));
