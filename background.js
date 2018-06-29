chrome.browserAction.onClicked.addListener(function(tab){
  chrome.tabs.create({ url: "https://utils.1ce.org/random-wiki#" + chrome.i18n.getUILanguage().split('-')[0] });;
});