var elForm = document.querySelector(".site-form");
var writeText = document.querySelector(".enter-text");

var elResult = document.querySelector(".result-text");

elForm.addEventListener("submit", function(evt){
  evt.preventDefault();

  let writeTextValue = writeText.value;
  let array = [];

  array.push(writeTextValue);

  if (writeTextValue == array) {
   
    let li = document.createElement("li");
    li.textContent = array;
    elResult.appendChild(li)
    writeText.value = '';
  }
})