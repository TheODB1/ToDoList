// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
console.log(li);


  if (inputValue === '') {
  alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }

  document.getElementById("myInput").value = "";


  // Create a "close" button and append it to each new list item
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);


  // Click on a close button to hide the new list item
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var list = this.parentElement;
        list.style.display = "none";
    }
  }
}




// default list item:Create a "close" button and append it to each current existing list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// default list item:Click on a close button to hide current existing list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
  var div = this.parentElement;
  div.style.display = "none";
  }
}



// Add a "checked" symbol & cross out the list when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('dblclick', function(e) {
  if (e.target.tagName === 'LI') {
  e.target.classList.toggle('checked');
  }
});

//Clearing the list
function removeAll(){  

var lst = document.getElementsByTagName("ul");
  console.log(lst);
    lst[0].innerHTML = "";
}

