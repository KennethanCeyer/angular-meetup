window.onload = function() {
	var element, elements = [];
	var className = 'item';

	if(typeof document.querySelectorAll === 'function') {
		elements = document.querySelectorAll('.' + className);
	} else {
		// IE 8 lower polyfills
		var allElements = document.getElementsByTagName('*');
		for (var i=0; i<allElements.length; i++) {
			var searchElementItem = allElements[i];
			if(typeof searchElementItem.className !== 'undefined') {
				if(searchElementItem.className.indexOf(className) !== -1) {
					elements.push(searchElementItem);	
				}
			}
		}
	}

	if(elements !== null && elements.length > 0) {
		element = elements[0];
	}
}