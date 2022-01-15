hljs.highlightAll(); // Code Highlighting

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
	pre {color: grey; font: grey;}`
		try {
			style.innerHTML = css;
		}
		catch (_ie) {
			style.styleSheet.cssText = css;
		}
	}
}

function switchLight() {
	document.getElementById("dark-style").remove();
}