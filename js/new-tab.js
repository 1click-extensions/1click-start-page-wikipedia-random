let used = localStorage.getItem('already_opened');
used = used ? Number(used) : 0;
used++;
localStorage.setItem('already_opened',used);

if(Number(localStorage.getItem('already_opened')) > 3 ){
checkIfRankNeededAndAndAddRank();
goTo();
}
else{
	goTo();
}
//if user closed window
function afterRemoveRateRequest(){
	goTo();
}