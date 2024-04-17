#! /usr/bin/env node
import inquirer from "inquirer";
let mybalance = 5000;
let mypin = 1234;
console.log("welcome to code with ahzam  - ATM");
let pinanswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your pin"
    }
]);
if (pinanswer.pin === mypin) {
    console.log("pin is correct, login successfully!");
    console.log(`current account balance is ${mybalance}`);
}
let operationans = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "enter your operation",
        choices: ["deposit", "withdraw", "exit"]
    }
]);
if (operationans.operation === "withdraw") {
    let amountans = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "enter your amount to withdraw",
        }
    ]);
    if (amountans.amount > mybalance) {
        console.log("insufficient balance");
    }
    else {
        mybalance = mybalance - amountans.amount;
        console.log(`your withdrawal amount is ${amountans.amount}`);
        console.log(`your new balance is ${mybalance}`);
    }
}
else if (operationans.operation === "checkbalance") {
    console.log(`your current balance is ${mybalance}`);
}
else {
    console.log("invalid pin");
}
