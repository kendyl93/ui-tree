// content.js

// Send the document content to the background script
chrome.runtime.sendMessage({
  action: "getDocumentContent",
  content: document.documentElement.outerHTML,
});
