#! /usr/bin/env node

import inquirer from "inquirer";

// printing a wellcomemessage
console.log("\n\tWellcome To 'CodeWithFozia' - ClI Simple calculator\n");

const answer = await inquirer.prompt([
  { message: "Enter first numper", type: "number", name: "fisrtNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

//conditional statement
if (answer.operator === "Addition") {
  console.log(answer.fisrtNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.fisrtNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.fisrtNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log(answer.fisrtNumber / answer.secondNumber);
} else {
  console.log("please select valid operator");
}
