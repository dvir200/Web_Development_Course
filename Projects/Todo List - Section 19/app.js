const data = [];
let userInput = prompt("What would you like to do?");

while ((userInput !== 'quit') && (userInput !== 'q')){
  if (userInput === 'new'){
    const newTodo = prompt("Enter a new todo:");
    data.push(newTodo);
    console.log(`${newTodo} added to the list.`)
  }
  else if (userInput === 'list'){
    for (let i =0; i < data.length; i++){
      console.log(`${i}: ${data[i]}`);
    }
  }
  else if (userInput === 'delete'){
    let deleteTodo = parseInt(prompt("Enter index of todo to delete:"));
    while ((deleteTodo < 0) || (deleteTodo > data.length -1)){
      deleteTodo = prompt("invalid number. Enter a new one:");
    }
    const deleted = data.splice(deleteTodo, 1);
    console.log(`Deleted ${deleted}`);
  }
  userInput = prompt("What would you like to do?");
}

console.log("You quit the app.");
