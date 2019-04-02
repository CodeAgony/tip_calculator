const initiate = function(){
  document.getElementById('service').addEventListener('change', servSatisfaction);
  document.getElementById('calc').addEventListener('click', doNothing);
}

let billamt = document.getElementById('billamt');
let service = document.getElementById('service');
let people = document.getElementById('people');

const doNothing = function(){
  console.log("do nothing");
} 

//Define a tip amount multiplier based on user choice
const servSatisfaction = function(e){
  switch(e.target.value) {
    case 'excellent':
      console.log("exc");
      return 1.7
    case 'great':
      console.log("great");
      return 1.5
    case 'unsatisfactory':
      console.log("unsatisfactory");
      return 0.7
    default: 
      console.log("default");
      return 1
  }
}   

//Suggest a tip given the formula: (billamt * service) / people
// const suggestTip(){
//   let suggestion = (billamt.value * service) / people
// }

document.addEventListener('DOMContentLoaded', initiate);