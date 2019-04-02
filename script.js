const initiate = function(){
  document.getElementById('service').addEventListener('change', reportContent);
  document.getElementById('calc').addEventListener('click', doNothing);
}

const doNothing = function(){
  console.log("do nothing");
} 


const reportContent = function(e){
  console.log(e.target.value)
}


document.addEventListener('DOMContentLoaded', initiate);