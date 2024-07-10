
const crypto = require('crypto');

const args = process.argv.slice(2);
const operation = args[0];


function calculate(operation, args) {
  let result;
  const numbers = args.slice(1).map(Number);

  switch (operation) {
    case 'add':
      if (numbers.length < 2) {
        console.log("Provide at least two numbers for addition.");
        return;
      }
      result = numbers.reduce((acc, num) => acc + num, 0);
      break;

    case 'sub':
      if (numbers.length < 2) {
        console.log("Provide at least two numbers for subtraction.");
        return;
      }
      result = numbers.reduce((acc, num) => acc - num);
      break;

    case 'mult':
      if (numbers.length < 2) {
        console.log("Provide at least two numbers for multiplication.");
        return;
      }
      result = numbers.reduce((acc, num) => acc * num, 1);
      break;

    case 'divide':
      if (numbers.length < 2) {
        console.log("Provide at least two numbers for division.");
        return;
      }
      result = numbers.reduce((acc, num) => acc / num);
      break;

    case 'sin':
      if (numbers.length !== 1) {
        console.log("Provide exactly one number for sine calculation.");
        return;
      }
      result = Math.sin(numbers[0]);
      break;

    case 'cos':
      if (numbers.length !== 1) {
        console.log("Provide exactly one number for cosine calculation.");
        return;
      }
      result = Math.cos(numbers[0]);
      break;

    case 'tan':
      if (numbers.length !== 1) {
        console.log("Provide exactly one number for tangent calculation.");
        return;
      }
      result = Math.tan(numbers[0]);
      break;

    case 'random':
      if (numbers.length !== 1 || isNaN(numbers[0]) || numbers[0] <= 0) {
        console.log("Provide a valid length for random number generation.");
        return;
      }
      result = crypto.randomBytes(numbers[0]).toString('binary');
      break;

    default:
      console.log("Invalid operation");
      return;
  }

  console.log("Result:", result);
}

calculate(operation, args);
