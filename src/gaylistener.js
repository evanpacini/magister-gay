chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  chrome.storage.sync.get("data", ({ data }) => {
    chrome.tabs.sendMessage(tabId, data);
    setTimeout(() => chrome.tabs.sendMessage(tabId, data), 1000);
  });
});
