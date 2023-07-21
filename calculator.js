const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addition(num1, num2) {
  return num1 + num2;
}

function subtraction(num1, num2) {
  return num1 - num2;
}

function multiplication(num1, num2) {
  return num1 * num2;
}

function division(num1, num2) {
  if (num2 === 0) {
    throw new Error("DivideByZero Error: Cannot divide by zero!");
  }
  return num1 / num2;
}

function displayMenu() {
  console.log("\nMenu:");
  console.log("1. Addition");
  console.log("2. Subtraction");
  console.log("3. Multiplication");
  console.log("4. Division");
  console.log("5. Exit");
  rl.question("Enter your choice (1-5): ", (choice) => {
    if (choice === '5') {
      rl.close();
    } else {
      rl.question("Enter first number: ", (num1) => {
        rl.question("Enter second number: ", (num2) => {
          const number1 = parseFloat(num1);
          const number2 = parseFloat(num2);
          switch (choice) {
            case '1':
              console.log(`Result: ${addition(number1, number2)}`);
              break;
            case '2':
              console.log(`Result: ${subtraction(number1, number2)}`);
              break;
            case '3':
              console.log(`Result: ${multiplication(number1, number2)}`);
              break;
            case '4':
              try {
                console.log(`Result: ${division(number1, number2)}`);
              } catch (error) {
                console.log(`Error: ${error.message}`);
              }
              break;
            default:
              console.log("Invalid choice! Please try again.");
          }
          displayMenu();
        });
      });
    }
  });
}

displayMenu();
