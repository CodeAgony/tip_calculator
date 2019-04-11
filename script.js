const initiate = function(){
  document.getElementById('calc').addEventListener('click', suggestTip);
  document.getElementById('service').addEventListener('change', servSatisfaction);
}

//Define a tip amount multiplier based on user choice
const servSatisfaction = function(e){
  switch(e.target.value) {
    case 'excellent':
      console.log("exc");
      return satisfactionIndex = 1.7
    case 'great':
      console.log("great");
      return satisfactionIndex = 1.5
    case 'unsatisfactory':
      console.log("unsatisfactory");
      return satisfactionIndex = 0.7
    default: 
      console.log("default");
      return satisfactionIndex = 1
  }
}   

//Suggest a tip given the formula: (billamt * service) / people
const suggestTip = function(){
  let billamt = document.getElementById('billamt').value.replace(/,/g, '.');
  let service = document.getElementById('service').value;
  let people = document.getElementById('people').value;

  let suggestion = alert((((billamt / 100 * 15)  * satisfactionIndex) / people).toFixed(2));
  return suggestion;
}

document.addEventListener('DOMContentLoaded', initiate);