window.onload = function() {
	// 변수 정의
	var content = 'New Item';
	var message = 'Hello World';
	var newDomObj = document.createElement('a');

	// DOM 삽입
	newDomObj.href = '#';
	newDomObj.innerHTML = content;
	document.body.appendChild(newDomObj);

	// 이벤트 바인딩
	newDomObj.addEventListener('click', function(event) {
		event.preventDefault();
		alert(message);
	});
}