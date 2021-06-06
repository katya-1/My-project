console.log("connect");

let burger = document.querySelector('.header_burger');
let menu = document.querySelector('.burger_menu');

burger.addEventListener("click", function(event) {
	burger.classList.toggle("active");
	menu.classList.toggle("active");
});