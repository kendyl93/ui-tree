// background.js

// Function to handle messages from content script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "getDocumentContent") {
    // Update the state with the document content received from content script
    chrome.storage.local.set({ documentContent: message });
  }
});
