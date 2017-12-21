/*Load the DOM
document.addEventListener("DOMContentLoaded", theDomHasLoaded);
function theDomHasLoaded(event) {
*/

//When "Generate Quote" button is clicked

var btn = document.getElementById("quoteButton");

btn.addEventListener("click", showQuoteBox);

function showQuoteBox () {
  document.getElementById("quoteBox").style.display = "block";
}

//} <-- belongs to theDomHasLoaded

//XMLHttpRequest
function generateQuote() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://eda-te-reo.herokuapp.com/api/proverbs");
  xhr.send();

//Response
  console.log(xhr.statusText);


//Print out Quote


}
