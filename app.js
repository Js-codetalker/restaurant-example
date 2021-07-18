function openAndCloseMenu() {
	navSection.classList.toggle("closed")
}

let responsiveMenuButton = document.getElementById('responsiveMenu__button'),
	navSection = document.getElementById('navSection'),
	link1 = document.getElementById('link1'),
	link2 = document.getElementById('link2'),
	link3 = document.getElementById('link3');

responsiveMenuButton.addEventListener('click',function () {
	openAndCloseMenu();
});
link1.addEventListener('click',function() {
	openAndCloseMenu();
});
link2.addEventListener('click', function(){
	openAndCloseMenu();
});
link3.addEventListener('click', function(){
	openAndCloseMenu();
});