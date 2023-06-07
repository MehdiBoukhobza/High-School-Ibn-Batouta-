"use strict";

const data = [
  // 1
  {
    sender: "Sadam",
    date: "Dec, 12",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 2
  {
    sender: "Twitter",
    date: "Dec, 22",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  //  3
  {
    sender: "Yahye",
    date: "Dec, 14",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 4
  {
    sender: "Sadam",
    date: "Jan, 11",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 5
  {
    sender: "Qadar",
    date: "Dec, 12",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 6
  {
    sender: "John",
    date: "Oct, 26",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 7
  {
    sender: "Slaf",
    date: "Dec, 21",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 8
  {
    sender: "Sadam",
    date: "Dec, 10",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 9
  {
    sender: "Farah",
    date: "May, 20",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 10
  {
    sender: "Alex",
    date: "Feb, 12",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 11
  {
    sender: "Alex",
    date: "Jun, 25",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 12
  {
    sender: "Moe",
    date: "Sep, 28",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 13
  {
    sender: "Jey",
    date: "Jan, 17",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 14
  {
    sender: "Adam",
    date: "Nov, 15",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 15
  {
    sender: "Joe",
    date: "Apr, 23",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 16
  {
    sender: "Sadam",
    date: "Jul, 28",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 17
  {
    sender: "Slef",
    date: "Dec, 31",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
];

const messages = document.querySelector(".messages_area");

const render = function (data) {
  messages.innerHTML = data
    .map(
      (d) => `<div class="messages me-5">
  <div class="messages_left ms-4 mt-2">
    <span>${d.sender}</span>
  </div>
  <div class="messages_content mt-2">${d.message}</div>
  <div class="messages_date mt-2">${d.date}</div>
</div>`
    )
    .join(" ");
};

render(data);


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


