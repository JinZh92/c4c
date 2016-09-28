(function(){
	'use strict'

	angular
		.module('c4cApp')
		.controller('HomeController', HomeController);

	HomeController.$inject = [];

	function HomeController(){
		var ctrl = this;

		ctrl.slides = [
			{url: "assets/img/bg.jpg", id: 0},
			{url: "assets/img/contact.jpg", id: 1},
			{url: "assets/img/events.jpg", id: 2}
		];

		console.log("Controller Loaded")

	}

})();