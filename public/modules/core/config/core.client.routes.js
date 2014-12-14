'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		$stateProvider.
		state('bikeability', {
			url: '/bikeability',
			templateUrl: 'modules/core/views/bikeability.client.view.html'
		});

		$stateProvider.
		state('environment', {
			url: '/environment',
			templateUrl: 'modules/core/views/environment.client.view.html'
		});

		$stateProvider.
		state('instructortraining', {
			url: '/instructortraining',
			templateUrl: 'modules/core/views/instructortraining.client.view.html'
		});

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		});

		// Home state routing
		$stateProvider.
		state('contact', {
			url: '/contact',
			templateUrl: 'modules/core/views/contact.client.view.html'
		});
	}
]);