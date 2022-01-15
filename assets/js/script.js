hljs.highlightAll(); // Code Highlighting

// Light And Dark Mode
function switchDark() {
	// var allLinks = document.links || document.getElementsByTagName('a');
	// for(var n = 0; n < allLinks ; n++) {
	// 	document.allLinks [n].style.cursor = "wait";
	// }
	var style = document.createElement("style");
	document.head.appendChild(style);
	try {
		style.innerHTML = `a { cursor: wait; }`;
	}
	catch (_ie) {
		style.styleSheet.cssText = `a { cursor: wait; }`;
	}