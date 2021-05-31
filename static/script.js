// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
const inputField = document.getElementById("myInput");
var i;

let ingredients = []

for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('#myUL');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = inputField.value;
  var t = document.createTextNode(inputValue);

  ingredients.push(inputValue)

  console.log(ingredients)

  li.appendChild(t);
  if (inputValue === '' || !isNaN(inputValue)) {
    alert("Invalid Input!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

inputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    newElement()
  }
})




function SendData(){
    console.log('het')
    fetch('http://127.0.0.1:5000/ingredient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ingredients),
      })
      .catch((error) => {
        console.error('Error:', error);
      });


}
function openForm(){
  document.getElementById("meal_detailspopup").style.display="block";
  op.classList.add("active");
}

function closeForm(){
  var op = document.getElementById("meal_detailspopup").style.display="none";
  op.classList.remove("active");
}

