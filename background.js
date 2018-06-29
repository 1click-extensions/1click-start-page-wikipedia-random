chrome.browserAction.onClicked.addListener(function(tab){
  chrome.tabs.create({ url: "http://127.0.0.1:2632/random-wiki#" + chrome.i18n.getUILanguage().split('-')[0] });;
});