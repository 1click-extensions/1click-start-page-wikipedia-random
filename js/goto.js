function goTo(){
	var lang = chrome.i18n.getUILanguage().split('-')[0];
	location = 'https://' + lang + '.wikipedia.org/wiki/Special:Random';
}
