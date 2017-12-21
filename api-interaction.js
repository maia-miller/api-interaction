// 1) When "Generate Quote" button is clicked

var btn = document.getElementById("quoteButton");

btn.addEventListener("click", generateQuote);

//XMLHttpRequest
function generateQuote() {
  var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://eda-te-reo.herokuapp.com/api/proverbs");
  xhr.send();

//Response
  console.log(xhr.statusText);


//Print out Quote
  document.getElementById("quoteBox").style.display = "";

}



// 2) Tweet Generated Quote
