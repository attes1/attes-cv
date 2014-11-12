angular.module('cv2').directive('autoheight', ['$timeout', function ($timeout) {
    return function (scope, element, attrs) {
		var setHeight = function() {
			var h = Math.max(element[0].querySelector('.front .box').offsetHeight, 
				element[0].querySelector('.back .box').offsetHeight);
			element.height(h);
		}

        $timeout(function() {
        	setHeight();
		});
    }
}]);
