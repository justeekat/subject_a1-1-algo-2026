function execute(player, steps, operation) {
  if (operation == forward) {
    forward(steps, player);
  } else {
    backward(steps, player);
  }
  return "Error.";
}

function forward(steps, player) {
  return `${player} a fait ${steps} pas en avant.`;
}

function backward(steps, player) {
  return `${player} a fait ${steps} pas en arrière.`;
}

console.log(execute("justeekat", 13, "forward"));
