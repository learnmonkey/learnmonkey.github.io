hljs.highlightAll(); // Code Highlighting

// Light And Dark Mode
function switchDark() {
	// var allLinks = document.links || document.getElementsByTagName('a');
	// for(var n = 0; n < allLinks ; n++) {
	// 	document.allLinks [n].style.cursor = "wait";
	// }
	var style = document.createElement("style");
	document.head.appendChild(style);
	var css = `a {color: yellow; text-decoration: none;}
a:hover {color: white; text-decoration: underline;}
body {background-color: black; font: white; color: white;}`
	try {
		style.innerHTML = css;
	}
	catch (_ie) {
		style.styleSheet.cssText = css;
	}
}