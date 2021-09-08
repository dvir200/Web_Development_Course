let maximum = parseInt(prompt("Enter your maximum number: "));

let tries = 1;

while ((!maximum) || (maximum <0)){
  maximum = parseInt(prompt("Invalid number or typing. Enter a new one: "));
}

const targetNum = Math.floor(Math.random() * maximum) +1;
/* console.log(targetNum); */
let userInput = prompt("Enter a number to guess:");
while (parseInt(userInput) !== targetNum){
  if (userInput === 'q'){
    break;
  }
  if (!userInput){
    userInput = prompt("Invalid number. Enter a new one:");
    tries ++;
  }
  else{
    if (userInput > targetNum){
      userInput = prompt("Too high. Enter a new number:");
      tries ++;
    }
    else if (userInput < targetNum){
      userInput = prompt("Too low. Enter a new number:");
      tries ++;
    }
  }
}

if (userInput === 'q'){
  console.log("You quit the game");
}
else{
  console.log(`You guessed the number. It was ${targetNum}.`);
  console.log(`It took you ${tries} tries.`);
}
