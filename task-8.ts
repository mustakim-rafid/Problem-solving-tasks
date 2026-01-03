// 8. Task: Unique Values

const numbers: number[] = [1, 2, 3, 2, 4, 5, 1, 6, 3, 7, 8];

const getUniqueNumbers = (arr: number[]): number[] => {
  return arr.filter((value, index, self) => self.indexOf(value) === index);
};

console.log(getUniqueNumbers(numbers));
