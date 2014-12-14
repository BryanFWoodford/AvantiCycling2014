'use strict';

//Start by defining the main module and adding the module dependencies
angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

// Setting HTML5 Location Mode
angular.module(ApplicationConfiguration.applicationModuleName).config(['$locationProvider',
	function($locationProvider) {
		$locationProvider.hashPrefix('!');
	}
]);

//Then define the init function for starting up the application
angular.element(document).ready(function() {
	//Then init the app
	angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
});

// Smooth scrolling for links
angular.module(ApplicationConfiguration.applicationModuleName).directive('anchorSmoothScroll', function($location) {
    'use strict';
 	var isCollapsed = isCollapsed;
    return {
        restrict: 'A',
        replace: false,
        scope: {
            'anchorSmoothScroll': '@'
        },
 
        link: function($scope, $element, $attrs) {
 
            initialize();
    
            /* initialize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function initialize() {
                createEventListeners();
            }
 
            /* createEventListeners -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function createEventListeners() {
                // listen for a click
                $element.on('click', function() {
                    // set the hash like a normal anchor scroll
                    $location.hash($scope.anchorSmoothScroll);
 					
                    // smooth scroll to the passed in element
                    scrollTo($scope.anchorSmoothScroll);
                });
            }
 
            /* scrollTo -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function scrollTo(eID) {
 
                // This scrolling function 
                // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
                
                var headerHeight = 90;
                var i;
                var startY = currentYPosition();
                var stopY = elmYPosition(eID) - headerHeight;
                var distance = stopY > startY ? stopY - startY : startY - stopY;
                if (distance < 100) {
                    scrollTo(0, stopY); return;
                }
                var speed = Math.round(distance / 100);
                if (speed >= 20) speed = 20;
                var step = Math.round(distance / 25);
                var leapY = stopY > startY ? startY + step : startY - step;
                var timer = 0;
                if (stopY > startY) {
                    for (i = startY; i < stopY; i += step) {
                        setTimeout('window.scrollTo(0, '+leapY+')', timer * speed);
                        leapY += step; if (leapY > stopY) leapY = stopY; timer++;
                    } return;
                }
                for (i = startY; i > stopY; i -= step) {
                    setTimeout('window.scrollTo(0, '+leapY+')', timer * speed);
                    leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
                }
            }
            
            /* currentYPosition -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function currentYPosition() {
                // Firefox, Chrome, Opera, Safari
                if (window.pageYOffset) {
                    return window.pageYOffset;
                }
                // Internet Explorer 6 - standards mode
                if (document.documentElement && document.documentElement.scrollTop) {
                    return document.documentElement.scrollTop;
                }
                // Internet Explorer 6, 7 and 8
                if (document.body.scrollTop) {
                    return document.body.scrollTop;
                }
                return 0;
            }
 
            /* scrollTo -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function elmYPosition(eID) {
                var elm = document.getElementById(eID);
                var y = elm.offsetTop;
                var node = elm;
                while (node.offsetParent && node.offsetParent != document.body) {
                    node = node.offsetParent;
                    y += node.offsetTop;
                } return y;
            }
        }
    };
});