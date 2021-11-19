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
  // General
  changeProperty("body", "background", data.bg); // background
  changeProperty(".head-bar", "color", data.h1); // header 1
  changeProperty(".block h3", "color", data.h2); // header 2
  changeProperty("i", "color", data.icon); // icon colour
  changeProperty(".head-bar div>a>i", "background", data.h_butt_bg); // header button background
  changeProperty("li.active", "border-bottom", "2px solid " + data.tab); // active tab colour
  changeProperty(".endlink a", "color", data.link); // links at the end of the section

  // Home
  changeProperty(".alert", "border-left", "4px solid" + data.home_changed); // lesson changed alert
  changeProperty(".alert span.nrblock", "background", data.home_changed_nr); // lesson changed alert nrblock
  changeProperty(".alertRed", "border-left", "4px solid " + data.home_x); // lesson cancelled alert
  changeProperty(".alertRed span.nrblock", "background", data.home_x_nr); // lesson cancelled alert nrblock
  changeProperty("#cijfers-leerling .last-grade", "background", data.home_g); // last grade

  // Sidebar
  changeProperty(":root", "--primary-background", data.sbar); // sidebar primary (collapse, right)
  changeProperty(":root", "--background-1", data.sbar_butt_bg); // sidebar button backgeound
  changeProperty(":root", "--secondary-background", data.sbar2); // sidebar left
  changeProperty(".menu-footer", "background", data.sbar_col); // sidebar collapse button

  // Agenda
  changeProperty(".agenda-text-icon", "background", data.agenda_notif); // "SO", "HW" icons in the agenda
}
