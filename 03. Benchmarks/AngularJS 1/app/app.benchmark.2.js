app
    .controller('Benchmark2Ctrl', ['$rootScope', '$scope', '$timeout', function($rootScope, $scope, $timeout) {
        $scope.timeSpend = -1;
        $scope.list = [];

        var bufferList = [];

        for(var i=0; i<10000; i++) {
            bufferList.push({
                idx: i,
                text: 'ITEM ' + i
            });
        }

        $scope.list = bufferList;
        $scope.benchmark = function() {
            var bufferList = angular.copy($scope.list);
            var timeStart = new Date().getTime();

            for(var i=0; i<5000; i++) {
                var index = parseInt((Math.random() * bufferList.length).toString());
                bufferList.splice(index, 1);
            }

            $scope.list = bufferList;

            $timeout(function() {
                $scope.timeSpend = (new Date().getTime() - timeStart).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }, 0);
        };
    }]);
