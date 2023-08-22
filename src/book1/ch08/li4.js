import prompt from "prompt-sync";

const promptSync = prompt();

const greetInSpanish = (name) => `Hola ${name}`;

const getUserName = (callback) => callback(promptSync("Enter your name: "));

console.log(getUserName(greetInSpanish));
