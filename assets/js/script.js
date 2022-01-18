// // hljs = require('highlight.js');
// hljs.initHighlightingOnLoad();
// hljs.highlightAll(); // Code Highlighting

// Light And Dark Mode
function switchDark() {
	// var allLinks = document.links || document.getElementsByTagName('a');
	// for(var n = 0; n < allLinks ; n++) {
	// 	document.allLinks [n].style.cursor = "wait";
	// }
	if (document.getElementById("dark-style") == null) {
		var style = document.createElement("style");
		style.setAttribute("id", "dark-style");
		document.head.appendChild(style);
		var css = `a {color: yellow; text-decoration: none;}
	a:hover {color: lightgrey; text-decoration: underline;}
	body {background-color: #212529; font: white; color: white;}
	pre {color: grey; font: grey;}
	samp {color: #3D3D3D;}
	ul#tutorials-list a {color: blue;}
	ul#tutorials-list a:hover {color: darkblue;}
	code {color: #3d3d3d; font: #3d3d3d;}`
		try {
			style.innerHTML = css;
		}
		catch (_ie) {
			style.styleSheet.cssText = css;
		}
	}
	var dark = document.getElementById("toggledarklight");
	var light = document.createElement("li");
	light.setAttribute("class", "navitem");
	light.innerHTML = `<a onclick="switchLight()" id="toggledarklight">Toggle Light</a>`;
	dark.parentNode.replaceChild(light, dark);
	document.cookie = 'dark=y; path=/';
}

function switchLight() {
	if (document.getElementById("dark-style") != null) {
		document.getElementById("dark-style").remove();
	}
	var light = document.getElementById("toggledarklight");
	var dark = document.createElement("li");
	dark.setAttribute("class", "navitem");
	dark.innerHTML = `<a onclick="switchDark()" id="toggledarklight">Toggle Dark</a>`;
	light.parentNode.replaceChild(dark, light);
	document.cookie = 'dark=n; path=/';
}

// Default Light/Dark Modes
if (document.cookie.includes("dark=y")) {
	switchDark();
	// console.log("Switch Dark By Default");
}

// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const navbarLinks = document.getElementsByClassName('navbar-links')[0]

// toggleButton.addEventListener('click', () => {
// 	navbarLinks.classList.toggle('active')
// })
function openSmallNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}