var header = document.getElementById("header")
var navbar = document.getElementById("navbar")

var headerHeight = header.offsetHeight;
var navbarHeight = navbar.offsetHeight;

header.style.height = screen.height - navbarHeight;
navbar.style.height = navbarHeight;

function initParallax() {
	if (window.pageYOffset > header.offsetHeight) {
		navbar.style.position = "fixed";
		navbar.style.top = "0";
	} else {
		navbar.style.position = "absolute";
		navbar.style.top = "0";
	}

}

//window.addEventListener("scroll", initParallax);