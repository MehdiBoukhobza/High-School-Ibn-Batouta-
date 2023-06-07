//  Navbar Animation

var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("myNavBar").style.top = "0";
  } else {
    document.getElementById("myNavBar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
};

var dropdownTimeout;

document.getElementById("examens").addEventListener("mouseenter", function () {
  document.getElementById("dropdown").style.display = "block";
});

document.getElementById("examens").addEventListener("mouseleave", function () {
  dropdownTimeout = setTimeout(function () {
    document.getElementById("dropdown").style.display = "none";
  }, 500);
});

document.getElementById("dropdown").addEventListener("mouseenter", function () {
  clearTimeout(dropdownTimeout);
});

document.getElementById("dropdown").addEventListener("mouseleave", function () {
  document.getElementById("dropdown").style.display = "none";
});


// End Navbar Animation



let click_down = document.getElementById("click_down");
let allButtons = document.getElementById("allButtons");
click_down.addEventListener("click", goDown);

function goDown() {
    allButtons.scrollIntoView();
    console.log("test");
}






var ButtonContact = document.getElementById("buttonContact");
ButtonContact.addEventListener('click', function() {
  window.location.href = 'contact.html';
});

