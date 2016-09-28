(function(){
	'use strict'

	angular
		.module('c4cApp', [
			'ui.router',
			'ngAnimate',
			'ui.bootstrap'
		]);

	angular
		.module('c4cApp')
		.config(function($stateProvider, $httpProvider, $urlRouterProvider){

				$urlRouterProvider.otherwise('/home');
				$stateProvider
					.state('home', {
						url:'/home',
						templateUrl:'site/partials/home.html',
						controller:'HomeController as ctrl'
					})
		})
})();