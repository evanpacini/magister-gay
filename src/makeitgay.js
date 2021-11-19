// When message is received from background
chrome.runtime.onMessage.addListener((data) => makeItGay(data));
// Changes the css properties of any elements dynamically
function changeProperty(selector, property, colour) {
  var elements = document.querySelectorAll(selector); // get all elements
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.setProperty(property, colour); // make them gay
  }
}

// Make it gay
function makeItGay(data) {
  // Sidebar
  changeProperty(".container", "background", data.bg); // background
  changeProperty(":root", "--primary-background", data.sbar); // sidebar primary (collapse, right)
  changeProperty(":root", "--secondary-background", data.sbar2); // sidebar left
  changeProperty(".menu-footer", "background", data.sbar_col); // sidebar collapse button

  changeProperty(".head-bar", "color", data.h1); // header 1
  changeProperty(".block h3", "color", data.h2); // header 2

  changeProperty(":root", "--background-1", data.butt); // buttons
  changeProperty(".head-bar div>a>i", "color", data.butt); // layout button
  changeProperty(".head-bar div>a>i", "background", "#fff"); // layout button background

  changeProperty(".agenda-text-icon", "background", "#0f0"); // "SO" icon in the agenda
  changeProperty(
    "aside .tabs li.active",
    "border-bottom",
    "2px solid " + "#00f"
  ); // Active tab colour

  changeProperty(".alert", "border-left", "4px solid" + c2); // lesson changed alert
  var al = document.querySelectorAll(".alert"); // get all elements
  var alnr = document.querySelectorAll(".alert span.nrblock"); // get all elements
  for (var i = 0; i < al.length; i++) {
    al[i].style.setProperty(); // make it gay
    alnr[i].style.setProperty("background-color", c2); // make it gay
  }
  var alRed = document.querySelectorAll(".alertRed"); // get all elements
  var alRednr = document.querySelectorAll(".alertRed span.nrblock"); // get all elements
  for (var i = 0; i < alRed.length; i++) {
    alRed[i].style.setProperty("border-left", "4px solid " + c4); // make it gay
    alRednr[i].style.setProperty("background-color", c4); // make it gay
  }
  document
    .querySelector("#cijfers-leerling .last-grade")
    .style.setProperty("background-color", c2); // make it gay
  var links = document.querySelectorAll(".endlink a"); // get all elements
  for (var i = 0; i < links.length; i++) {
    links[i].style.setProperty("color", c2); // make it gay
  }
  // END HOME
}
