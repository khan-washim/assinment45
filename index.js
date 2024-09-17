// 1. Function to calculate the difference between two numbers
function calculateDifference(num1, num2) {
    let difference = num1 - num2;
    return difference;
}
console.log("Difference between 10 and 5:", calculateDifference(10, 5)); // Example usage

// 2. Function to check if a number is odd
function isOdd(num) {
    let result = num % 2 !== 0;
    return result;
}
console.log("Is 3 odd?:", isOdd(3)); // Example usage

// 3. Function to find the minimum number in an array
function findMin(arr) {
    let minValue = Math.min(...arr);
    return minValue;
}
console.log("Minimum in [3, 1, 4]:", findMin([3, 1, 4])); // Example usage

// 4. Function to filter even numbers from an array
function filterEvenNumbers(arr) {
    let evenNumbers = arr.filter(num => num % 2 === 0);
    return evenNumbers;
}
console.log("Even numbers in [1, 2, 3, 4]:", filterEvenNumbers([1, 2, 3, 4])); // Example usage

// 5. Function to sort an array in descending order
function sortArrayDescending(arr) {
    let sortedArray = arr.slice().sort((a, b) => b - a);
    return sortedArray;
}
console.log("Sorted array [3, 1, 4] in descending order:", sortArrayDescending([3, 1, 4])); // Example usage

// 6. Function to lowercase the first letter of a string
function lowercaseFirstLetter(str) {
    if (!str) return ''; // Handle empty string case
    let lowercasedString = str.charAt(0).toLowerCase() + str.slice(1);
    return lowercasedString;
}
console.log("Lowercase first letter of 'Hello':", lowercaseFirstLetter('Hello')); // Example usage

// 7. Function to count the number of vowels in a string
function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let vowelCount = str.split('').filter(char => vowels.includes(char)).length;
    return vowelCount;
}
console.log("Number of vowels in 'OpenAI':", countVowels('OpenAI')); // Example usage

// 8. Function to find the average of numbers in an array
function findAverage(arr) {
    if (arr.length === 0) return 0; // Handle empty array case
    let sum = arr.reduce((acc, num) => acc + num, 0);
    let average = sum / arr.length;
    return average;
}
console.log("Average of [1, 2, 3]:", findAverage([1, 2, 3])); // Example usage

