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


