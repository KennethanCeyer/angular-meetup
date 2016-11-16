var app = angular.module('app', [
])
.controller('MainCtrl', function($scope) {
	// 변수 정의
	$scope.content = 'New Item';
	$scope.message = 'Hello World';

	// 이벤트 바인딩
	$scope.onClick = function($event) {
		$event.preventDefault();
		alert($scope.message);
	};
});