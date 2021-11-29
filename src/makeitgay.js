var datacpy = {}; // local copy of data

// once page is loaded, triggers
window.addEventListener("load", () => {
  chrome.runtime.onMessage.addListener((data) => makeItGay(data));
  document.querySelector(":root").addEventListener("click", () => {
    makeItGay(datacpy);
    setTimeout(() => makeItGay(datacpy), 100);
  });
});

// Changes the css properties of any elements dynamically
function changeProperty(selector, property, colour) {
  var elements = document.querySelectorAll(selector); // get all elements
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.setProperty(property, colour); // make them gay
  }
}

// Changes the css properties of any elements dynamically
function changeAttribute(selector, attribute, colour, i) {
  var elements = document.querySelectorAll(selector); // get all elements
  elements[i].setAttribute(attribute, colour); // make one gay
}

// Make it gay
function makeItGay(data) {
  datacpy = data; // Save local copy of data

  // General
  changeProperty("body", "background", data.bg); // background
  changeProperty(".head-bar, h1", "color", data.h1); // header 1
  changeProperty(".block h3, h2", "color", data.h2); // header 2
  changeProperty("i", "color", data.icon); // icon colour
  changeProperty(".head-bar div>a>i", "background", data.h_butt_bg); // header button background
  changeProperty(".endlink a", "color", data.link); // links at the end of the section

  // Login screen
  if (window.location.pathname.includes("/login")) {
    changeAttribute("svg path", "fill", data.login_logo, 1); // Magister text
    changeAttribute("svg path", "fill", data.login_dot, 0); // Magister dot
    changeAttribute("svg path", "fill", data.login_icons, 2); // School icon
    changeAttribute("svg path", "fill", data.login_icons, 3); // User icon
    try {
      changeAttribute("svg path", "fill", data.login_icons, 4); // Password icon
      changeAttribute("svg path", "fill", data.login_icons, 5); // Show password icon
      changeAttribute("svg path", "fill", data.login_icons, 6); // Forgot password icon
    } catch {}
    changeProperty(".dna-btn-primary", "color", data.login_butt); // login button text
    changeProperty(".dna-btn-primary", "background", data.login_butt_bg); // login button background
  }

  // Home
  changeProperty(".alert", "border-left", "4px solid " + data.home_changed); // lesson changed alert
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
