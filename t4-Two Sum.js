// Two Sum

function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let n = i + 1; n < numbers.length; n++) {
       let sum = numbers[i] + numbers[n]
       if (sum == target) return [i, n];
        }
    }
}

  console.log(twoSum([2,4,6,8], 14))