
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

// updates the UI with suggested tip
const displaySuggestedTip = function(tip) {
  // try to find an existing output element or create a new one
  let outputEl = document.getElementById("output");

  // if an element isn't found, `getElementById` returns null
  if(!outputEl) {
    outputEl = document.createElement("p");
    outputEl.id = "output";

    // put element on a page
    const outputContainerEl = document.getElementById("main-card");
    outputContainerEl.appendChild(outputEl);
  }

  outputEl.innerHTML = `Suggested tip amount for each person is $${tip.toFixed(2)}`;
}

// this function is called when the "Calculate!" button is clicked.
// recalculates suggested value and updates the UI.
const handleClickOnCalc = function(){
  const serviceSelectEl = document.getElementById('service');
  const billamt = document.getElementById('billamt').value.replace(/,/g, '.');
  const people = document.getElementById('people').value;

  const suggestedTip = calculateTip(billamt, people, serviceSelectEl.value)

  displaySuggestedTip(suggestedTip);
}

// initialise the app
document.addEventListener('DOMContentLoaded', function() {
  const calcButtonEl = document.getElementById('calc');
  calcButtonEl.addEventListener('click', handleClickOnCalc);
});


