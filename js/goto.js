function goTo(){
	var lang = chrome.i18n.getUILanguage().split('-')[0];
	var iframe = document.createElement('iframe');
	iframe.src = 'https://' + lang + '.wikipedia.org/wiki/Special:Random';
	document.body.appendChild(iframe);
}
