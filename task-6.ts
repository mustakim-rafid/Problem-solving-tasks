// 6.Task: Array Reduction

const allNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumEvenNumbers = (nums: number[]) => {
    return nums.reduce((prev, current) => {
        if (current % 2 === 0) {
            return prev + current
        }
        return prev
    }, 0)
}

console.log(sumEvenNumbers(allNumbers))