(function(){
	'use strict'

	angular
		.module('c4cApp', [
			'ui.router',
			'ngAnimate',
			'ui.bootstrap',
			'ui.calendar'
		]);

	angular
		.module('c4cApp')
		.config(function($stateProvider, $httpProvider, $urlRouterProvider){

				$urlRouterProvider.otherwise('/home');
				$stateProvider
					.state('home', {
						url:'/home',
						templateUrl:'site/partials/home.html',
						controller:'HomeController as ctrl',
						resolve: {
							heroImgResolve: function(HomeSrv){
								return HomeSrv.getFileNames('hero');
							},
							photoResolve: function(HomeSrv){
								return HomeSrv.getFileNames('photo');
							}
						}
					})
		})
})();