function printDadJoke(levelOfCorny) {
  switch (levelOfCorny) {
    case 1:
      return `"I'm afraid for the calendar. Its days are numbered."`;
    case 2:
      return `"What do a tick and the Eiffel Tower have in common?" "They're both Paris sites."`;
    case 3:
      return `"I thought the dryer was shrinking my clothes. Turns out it was the refrigerator all along."`;

    default:
      return `"No dad would ever make a joke that corny!"`;
  }
}

//Test Outputs
console.log("1", printDadJoke(1)); //output: "I'm afraid for the calendar. Its days are numbered."
console.log("2", printDadJoke(2)); //output: "What do a tick and the Eiffel Tower have in common?" "They're both Paris sites."
console.log("3", printDadJoke(3)); //output: "I thought the dryer was shrinking my clothes. Turns out it was the refrigerator all along."
console.log("5", printDadJoke(5)); //output: "No dad would ever make a joke that corny!"
