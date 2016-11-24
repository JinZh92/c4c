(function(){
	'use strict'

	angular
		.module('c4cApp')
		.controller('HomeController', HomeController);

	HomeController.$inject = ['$sce'];

	function HomeController($sce){
		var ctrl = this;

		// Hero Images
		ctrl.slides = [
			{url: "assets/img/bg.jpg", id: 0},
			{url: "assets/img/contact.jpg", id: 1},
			{url: "assets/img/events.jpg", id: 2}
		];

		// Event Calendar
		ctrl.uiConfig = {
			calendar: {
				googleCalendarApiKey: 'AIzaSyBxCG3J4qilz-6XujSQtXdXATylmXtzpc4',
				defaultView: 'agendaWeek',
				allDaySlot: false,
				minTime: '11:00:00',
				maxTime: '23:00:00',
				slotDuration: '01:00:00',
				slotLabelInterval: '02:00:00',
				contentHeight: 287,
				editable: false,
				header: {
					left: 'month agendaWeek agendaDay',
					center: '',
					right: 'today prev,next'
				}
			}
		}
		ctrl.eventSources = [
			{
				googleCalendarId: '54dhdausv4k5ob57jrjch3f550@group.calendar.google.com',
				color: 'green',
				backgroundColor: 'blue',
				borderColor: 'yellow',
				textColor: 'red'
			}
		];


		// Video player

		console.log("Controller Loaded")

	}

})();