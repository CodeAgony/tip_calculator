const initiate = function(){
  document.getElementById('calc').addEventListener('click', suggestTip);
}

// Returns a tip amount multiplier based on string representation
const getSatisfactionIndex = function(value) {
  switch(value) {
    case 'excellent':
      return 1.7;
    case 'great':
      return 1.5;
    case 'unsatisfactory':
      return 0.7;
    default:
      return 1;
  }
}

// Calculates a tip given the formula: (billamt * service) / people
const calculateTip = function(billAmount, people, satisfactionValue) {
  const satisfactionIndex = getSatisfactionIndex(satisfactionValue);
  const tipPercentage = 0.15 * satisfactionIndex;

  // Take 15% as widely recommended tip amount
  return billAmount * tipPercentage / people;
}

const displaySuggestedTip = function(tip) {
  const newParagraph = document.createElement("p");
  const card = document.getElementById("main-card");
  const para = document.getElementById("output")
  //Prevent multiple paragraphs
  if (card.contains(para)){
    console.log("Some output already. Rewriting");
    para.innerHTML = `Suggested tip amount for each person is $${suggestion.toFixed(2)}`;
  } else {
    //Add new paragraph to contain the suggestion
    const para = card.appendChild(newParagraph);
    para.id = "output";
    para.innerHTML = `Suggested tip amount for each person is $${suggestion.toFixed(2)}`;
    console.log("Node created");
  }
}

const suggestTip = function(){
  const serviceSelectEl = document.getElementById('service');
  const billamt = document.getElementById('billamt').value.replace(/,/g, '.');
  const people = document.getElementById('people').value;

  const suggestedTip = calculateTip(billamt, people, serviceSelectEl.value)

  displaySuggestedTip(suggestedTip);
}

document.addEventListener('DOMContentLoaded', initiate);
