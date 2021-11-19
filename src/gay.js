document.addEventListener("DOMContentLoaded", function () {
  // Wait until the popup is loaded

  // Autofill form with current data
  chrome.storage.sync.get("data", ({ data }) => {
    Object.keys(data).forEach(function (key) {
      document.getElementsByName(key)[0].value = data[key];
    });
  });

  const form = document.querySelector("form");
  // If form submitted
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    new FormData(form);
  });
  form.addEventListener("formdata", (e) => {
    // Update data
    let data = {};
    for (const [key, value] of e.formData) {
      data[key] = value;
    }
    chrome.storage.sync.set({ data });
  });
});
