//Selecting th DOM lements
const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

//Show time
function showTime() {
  let today = new Date(),
    hrs = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  //Set Am or Pm
  const amPm = hrs >= 12 ? "PM" : "AM";

  //12 hr format
  hrs = hrs % 12 || 12;

  //output time
  time.innerHTML = `${hrs}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}`;
  setTimeout(showTime, 1000);
}

//Add Zeros to single time units
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

//set background and greeting
function setBgGreet() {
  let today = new Date(),
    hrs = today.getHours();

  if (hrs < 12) {
    //morning
    document.body.style.backgroundImage = "url('../imgs/morning.jpg')";
    greeting.textContent = "Good morning";
  } else if (hrs < 18) {
    //noon
    document.body.style.backgroundImage = "url('../imgs/noon.jpg')";
    greeting.textContent = "Good afternoon";
  } else {
    //evening
    document.body.style.backgroundImage = "url('../imgs/night.png')";
    greeting.textContent = "Good evening";
    document.body.style.color = "#fff";
  }
}

//Get name
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}
//set name
function setName(e) {
  if (e.type === "keypress") {
    //when enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

//Get focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}
//set focus
function setFocus(e) {
  if (e.type === "keypress") {
    //when enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);
//Run
showTime();
setBgGreet();
getName();
getFocus();
